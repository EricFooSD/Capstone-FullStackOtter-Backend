/*
 * ========================================================
 *                  Controller Functions
 * ========================================================
 */

export default function initSkillController(db) {
  /**
 * @desc to get all skill type listed in DB
 */
  const getAllSkills = async (request, response) => {
    try {
      const skills = await db.Skill.findAll();
      response.send(skills);
    } catch (error) {
      response.send(error);
    }
  };

  /**
 * @desc to get all skills tagged to each user
 */
  const getAllSkillsByUsers = async (request, response) => {
    try {
      const skillsByUsers = await db.Skill.findAll({
        include: [
          db.User,
        ],
      });
      response.send(skillsByUsers);
    } catch (error) {
      response.send(error);
    }
  };

  return {
    getAllSkills,
    getAllSkillsByUsers,
  };
}
