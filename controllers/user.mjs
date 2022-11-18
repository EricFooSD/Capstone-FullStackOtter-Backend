/* eslint-disable new-cap */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable consistent-return */
import Jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import jsSHA from 'jssha';

// ... set to use env file for secret keys ... //
dotenv.config();

/*
 * ========================================================
 *                  Helper Functions
 * ========================================================
 */

/**
 * @desc function to hash a string with secret SALT
 * @param {string} input text to be hashed
 * @returns hashed string
 */
const getHash = (input) => {
  // create new SHA object
  const shaObj = new jsSHA('SHA-512', 'TEXT', { encoding: 'UTF8' });

  // create an unhashed cookie string based on user ID and salt
  const unhashedString = `${input}-${process.env.SALT}`;

  // generate a hashed string using SHA object
  shaObj.update(unhashedString);
  return shaObj.getHash('HEX');
};

/*
 * ========================================================
 *                  Controller Functions
 * ========================================================
 */

export default function initUserController(db) {
  /**
 * @desc to check user login credentials with database
 * @param {string} request username and password
 */
  const attemptLogin = async (request, response) => {
    const userEnteredPassword = getHash(request.body.password);
    try {
      // run the query into User DB
      const user = await db.User.findOne({
        where: {
          username: request.body.username,
        },
        include: [
          db.Industry,
          db.Skill,
        ],
      });
      // set default response obj
      const responseObj = { status: false, user: {}, token: '' };

      // check if username and password match
      if (user != null && user.dataValues.password === userEnteredPassword) {
        const accessToken = Jwt.sign(user.id, process.env.ACCESS_TOKEN_SECRET);
        // change response object
        responseObj.status = true;
        responseObj.user = user;
        responseObj.token = accessToken;
        return response.send(responseObj);
      }
      response.send(responseObj);
    } catch (error) {
      response.send(error);
    }
  };

  /**
 * @desc to get a logged in users data to update React State
 * @param request JWT token
 */
  const getUserData = async (request, response) => {
    // getting access token from cookies in http request header
    const { token } = request.cookies;
    // verifying and getting user id from JWT
    Jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, loggedUser) => {
      if (err) return response.status(500).json({ error: 'failed to authenticate token' });
      try {
      // run the query into User DB
        const user = await db.User.findOne({
          where: {
            id: loggedUser,
          },
          include: [
            db.Industry,
            db.Skill,
          ],
        });
        if (user != null) {
          return response.send(user);
        }
        response.send();
      } catch (error) {
        response.send(error);
      }
    });
  };

  /**
 * @desc to get all users in DB for population in search function
 */
  const getAllUsers = async (request, response) => {
    try {
      const users = await db.User.findAll({
        include: [
          db.Skill,
        ],
      });
      response.send(users);
    } catch (error) {
      response.send(error);
    }
  };

  /**
 * @desc function to update user information from edit profile page
 */
  const updateUser = async (request, response) => {
    try {
      const {
        name,
        email,
        location,
        aboutMe,
        experience,
        industryId,
        portfolioURL,
        minimumSalary,
      } = request.body;

      const newUserInfo = {
        name,
        email,
        location,
        aboutMe,
        experience,
        portfolioURL,
        minimumSalary,
        industryId: Number(industryId),
      };

      // update into in User DB
      const updatedUser = await db.User.update(newUserInfo, { where: { id: request.params.id } });

      // update M:M table User_Skills
      const deleteUserSkills = await db.UserSkill.destroy(
        { where: { userId: request.params.id } },
      );
      const { skills } = request.body;
      await skills.forEach((skill) => {
        db.UserSkill.create({
          userId: request.params.id,
          skillId: skill.id,
        });
      });

      response.sendStatus(200);
    } catch (error) {
      response.send(error);
    }
  };

  return {
    attemptLogin,
    getUserData,
    getAllUsers,
    updateUser,
  };
}
