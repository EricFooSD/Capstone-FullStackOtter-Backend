/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/*
 * ========================================================
 *                  Controller Functions
 * ========================================================
 */

export default function initProjectController(db) {
  /**
 * @desc to get all projects listed in DB
 */
  const getAllProjects = async (request, response) => {
    try {
      const projects = await db.Project.findAll({
        include: [
          db.Industry,
          db.UserProject,
          db.ProjectSkill,
          db.Skill,
        ],
      });
      response.send(projects);
    } catch (error) {
      console.log(error);
    }
  };

  /**
 * @desc get all projects that are considered open for SWE to enroll, ie in the sourcing stage
 */
  const getAllOpenProjects = async (request, response) => {
    try {
      const allProjects = await db.Project.findAll({
        where: {
          stage: 'sourcing',
        },
        include: [
          db.Industry,
          db.UserProject,
          db.ProjectSkill,
          db.Skill,
        ],
      });
      response.send(allProjects);
    } catch (error) {
      console.log(error);
    }
  };

  /**
 * @desc get all completed projects by a specific user
 * @param {integer}request include user ID
 */
  const getAllCompletedProjectsByUser = async (request, response) => {
    try {
      const completedProjects = await db.UserProject.findAll({
        where: {
          userId: request.params.id,
        },
        include: {
          model: db.Project,
          where: {
            stage: ['payment-pending', 'completed'],
          },
          include: [
            db.Industry,
            db.UserProject,
          ],
        },
      });
      response.send(completedProjects);
    } catch (error) {
      console.log(error);
    }
  };

  /**
 * @desc get all in progress project a specific user is currently involved in
 * @param {integer}request include user ID
 */
  const getAllCurrentProjectsByUser = async (request, response) => {
    try {
      const currentProjects = await db.UserProject.findAll({
        where: {
          userId: request.params.id,
        },
        include: {
          model: db.Project,
          where: {
            stage: ['sourcing', 'in-progress', 'client-review'],
          },
          include: [
            db.Industry,
            db.UserProject,
          ],
        },
      });
      response.send(currentProjects);
    } catch (error) {
      console.log(error);
    }
  };

  /**
 * @desc get projects that are in contracting stage for specific user
 * @param {integer}request include user ID
 */
  const getAllUnconfirmedProjects = async (request, response) => {
    try {
      const unconfirmedProjects = await db.Project.findAll({
        where: {
          stage: 'contracting',
        },
        include: [
          db.Industry,
        ],
      });
      response.send(unconfirmedProjects);
    } catch (error) {
      console.log(error);
    }
  };

  /**
 * @desc to create a new project
 * @param request include all information needed in DB
 */
  const createNewProject = async (request, response) => {
    try {
      const {
        name,
        summary,
        numberEngineers,
        minimumSalary,
        enrolmentDeadline,
        deliveryDeadline,
        stage,
        projectedHours,
        industryId,
        projectSkills,
        userProjects,
      } = request.body;

      const newProjectObject = {
        name,
        summary,
        noEngineersRequired: numberEngineers,
        minimumSalary,
        enrolmentDeadline,
        deliveryDeadline,
        // include placeholder Kanban data
        kanbanData: {
          lanes: [
            {
              cards: [
                {
                  description: 'Placeholder Task 1',
                  id: 'PH1',
                  label: '15 mins',
                  laneId: 'PLANNED',
                  title: 'Placeholder 1',
                },
                {
                  description: 'Placeholder Task 2',
                  id: 'PH2',
                  label: '10 mins',
                  laneId: 'PLANNED',
                  title: 'Placeholder 2',
                },
                {
                  description: 'Placeholder Task 3',
                  id: 'PH3',
                  label: '30 mins',
                  laneId: 'PLANNED',
                  title: 'Placeholder 3',
                },
                {
                  description: 'Placeholder Task 4',
                  id: 'PH4',
                  label: '5 mins',
                  laneId: 'PLANNED',
                  title: 'Placeholder 4',
                },
              ],
              currentPage: 1,
              disallowAddingCard: true,
              id: 'PLANNED',
              label: '20/70',
              style: {
                width: 280,
              },
              title: 'Planned',
            },
            {
              cards: [
                {
                  description: 'Placeholder Task 5',
                  id: 'WIP1',
                  label: '30 mins',
                  laneId: 'WIP',
                  title: 'Placeholder 5',
                },
              ],
              currentPage: 1,
              id: 'WIP',
              label: '10/20',
              style: {
                width: 280,
              },
              title: 'Work In Progress',
            },
            {
              cards: [
                {
                  description: 'Placeholder Task 6',
                  id: 'BLK1',
                  label: '30 mins',
                  laneId: 'WIP',
                  title: 'Placeholder 6',
                },
              ],
              currentPage: 1,
              id: 'BLOCKED',
              label: '0/0',
              style: {
                width: 280,
              },
              title: 'Blocked',
            },
            {
              cards: [
                {
                  description: 'Placeholder Task 7',
                  id: 'CMP1',
                  label: '15 mins',
                  laneId: 'COMPLETED',
                  title: 'Placeholder 6',
                },
                {
                  description: 'Placeholder Task 8',
                  id: 'CMP2',
                  label: '15 mins',
                  laneId: 'COMPLETED',
                  title: 'Placeholder 6',
                },
              ],
              currentPage: 1,
              id: 'COMPLETED',
              label: '2/5',
              style: {
                width: 280,
              },
              title: 'Completed',
            },
            {
              cards: [
                {
                  description: 'Placeholder Task 9',
                  id: 'ARC1',
                  label: '300 mins',
                  laneId: 'ARCHIVED',
                  title: 'Placeholder 9',
                },
              ],
              currentPage: 1,
              id: 'ARCHIVED',
              label: '1/1',
              style: {
                width: 280,
              },
              title: 'Archived',
            },
          ],
        },
        stage,
        projectedHours,
        industryId: Number(industryId),
      };
      const newProject = await db.Project.create(newProjectObject);

      const { id } = newProject;

      await projectSkills.forEach((skill) => {
        db.ProjectSkill.create({
          projectId: id,
          skillId: skill.id,
        });
      });

      await userProjects.forEach((user) => {
        db.UserProject.create({
          userId: user.id,
          projectId: id,
        });
      });

      response.sendStatus(200);
    } catch (error) {
      console.log(error);
      response.send(error);
    }
  };

  /**
 * @desc get users associated to a project and skills required for the project by project ID
 * @param {integer} request project ID
 */
  const getAllUsersAndSkillsByProjectID = async (request, response) => {
    try {
      const usersSkillsForThisProject = {};

      const usersInThisProject = await db.UserProject.findAll({
        where: {
          projectId: request.params.id,
        },
        include: {
          model: db.User,
        },
      });
      const skillsInThisProject = await db.ProjectSkill.findAll({
        where: {
          projectId: request.params.id,
        },
        include: {
          model: db.Skill,
        },
      });

      usersSkillsForThisProject.users = usersInThisProject;
      usersSkillsForThisProject.skills = skillsInThisProject;
      response.send(usersSkillsForThisProject);
    } catch (error) {
      console.log(error);
    }
  };

  /**
 * @desc delete project
 * @param {integer} request project ID
 */
  const deleteOneProject = async (request, response) => {
    try {
      const projectId = request.params.id;
      const deletedUserProjectEntries = await db.UserProject.destroy({
        where: {
          projectId: request.params.id,
        },
      });

      const deletedProjectSkillEntries = await db.ProjectSkill.destroy({
        where: {
          projectId: request.params.id,
        },
      });

      const deletedProject = await db.Project.destroy({
        where: {
          id: projectId,
        },
      });

      response.sendStatus(200);
    } catch (error) {
      console.log(error);
      response.sendStatus(500);
    }
  };

  /**
 * @desc associate / enroll user to a project
 * @param {integer} request project ID
 * @param {integer} request user ID
 */
  const addCurrentUserToProject = async (request, response) => {
    try {
      const {
        userId,
        projectId,
      } = request.body;

      const newUserAssignedToProjectObject = {
        userId,
        projectId,
      };

      const addUserToProject = await db.UserProject.create(newUserAssignedToProjectObject);
      response.sendStatus(addUserToProject);
    } catch (error) {
      console.log(error);
      response.sendStatus(500);
    }
  };

  /**
 * @desc update stage of project
 * @param {integer} request project ID
 * @param {string} request project stage 'contracting', 'sourcing', 'in-progress', 'client-review', 'payment-pending', 'completed'
 */
  const updateProjectStage = async (request, response) => {
    try {
      const projectId = Number(request.body.projectId);
      const { newStage } = request.body;

      const updateOneRequest = await db.Project.update(
        {
          stage: newStage,
        },
        {
          where: {
            id: projectId,
          },
        },
      );
      response.send(updateOneRequest);
    } catch (error) {
      console.log(error);
    }
  };

  /**
 * @desc update Kanban board data
 * @param {integer} request project ID
 * @param {JSON} request Kanban board data
 */
  const updateKanbanData = async (request, response) => {
    try {
      const project = await db.Project.findOne({ where: { id: request.body.id } });

      await project.update({ kanbanData: request.body.kanbanData });

      response.sendStatus(200);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getAllProjects,
    getAllOpenProjects,
    getAllCompletedProjectsByUser,
    getAllCurrentProjectsByUser,
    getAllUnconfirmedProjects,
    createNewProject,
    getAllUsersAndSkillsByProjectID,
    deleteOneProject,
    updateProjectStage,
    addCurrentUserToProject,
    updateKanbanData,
  };
}
