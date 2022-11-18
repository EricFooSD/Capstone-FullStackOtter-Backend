import { resolve } from 'path';
import db from './models/index.mjs';

import initUserController from './controllers/user.mjs';
import initProjectController from './controllers/project.mjs';
import initSkillController from './controllers/skill.mjs';

export default function routes(app) {
  const UserController = initUserController(db);
  const ProjectController = initProjectController(db);
  const SkillController = initSkillController(db);

  // check login details
  app.post('/attemptLogin', UserController.attemptLogin);

  // get all skills
  app.get('/skills', SkillController.getAllSkills);

  // get all skills by users
  app.get('/skills/users', SkillController.getAllSkillsByUsers);

  // get all currently enrolled or in-progress projects
  app.get('/projects/current/:id', ProjectController.getAllCurrentProjectsByUser);

  // get all completed projects
  app.get('/projects/completed/:id', ProjectController.getAllCompletedProjectsByUser);

  // get all open projects
  app.get('/projects/open', ProjectController.getAllOpenProjects);

  // get all projects
  app.get('/projects', ProjectController.getAllProjects);

  // create one project
  app.post('/project', ProjectController.createNewProject);

  // get all the users in 1 selected project being viewed
  app.get('/project/:id', ProjectController.getAllUsersAndSkillsByProjectID);

  // delete one project and all associated join table queries
  app.delete('/project/:id', ProjectController.deleteOneProject);

  // update project stage by id
  app.put('/project/:id', ProjectController.updateProjectStage);

  // update project stage by id
  app.post('/project/enrol-user/:id', ProjectController.addCurrentUserToProject);

  // update kanban data
  app.put('/project/update-kanban/:id', ProjectController.updateKanbanData);

  // get user data
  app.get('/userData', UserController.getUserData);

  // get all users
  app.get('/users', UserController.getAllUsers);

  // update user info
  app.post('/users/edit/:id', UserController.updateUser);

  // special JS page. Include the webpack index.html file
  app.get('/home', (request, response) => {
    response.sendFile(resolve('dist', 'main.html'));
  });
}
