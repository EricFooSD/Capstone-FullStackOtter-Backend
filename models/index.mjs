import { Sequelize } from 'sequelize';
import url from 'url';
import allConfig from '../config/config.js';

import initIndustryModel from './industry.mjs';
import initUserModel from './user.mjs';
import initProjectModel from './project.mjs';
import initUserProjectModel from './userProject.mjs';
import initSkillModel from './skill.mjs';
import initUserSkillModel from './userSkill.mjs';
import initProjectSkillModel from './projectSkill.mjs';

const env = process.env.NODE_ENV || 'development';

const config = allConfig[env];

const db = {};

let sequelize;

if (env === 'production') {
  // break apart the Heroku database url and rebuild the configs we need

  const { DATABASE_URL } = process.env;
  const dbUrl = url.parse(DATABASE_URL);
  const username = dbUrl.auth.substr(0, dbUrl.auth.indexOf(':'));
  const password = dbUrl.auth.substr(dbUrl.auth.indexOf(':') + 1, dbUrl.auth.length);
  const dbName = dbUrl.path.slice(1);

  const host = dbUrl.hostname;
  const { port } = dbUrl;

  config.host = host;
  config.port = port;

  sequelize = new Sequelize(dbName, username, password, config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

db.Industry = initIndustryModel(sequelize, Sequelize.DataTypes);
db.User = initUserModel(sequelize, Sequelize.DataTypes);
db.Project = initProjectModel(sequelize, Sequelize.DataTypes);
db.UserProject = initUserProjectModel(sequelize, Sequelize.DataTypes);
db.Skill = initSkillModel(sequelize, Sequelize.DataTypes);
db.UserSkill = initUserSkillModel(sequelize, Sequelize.DataTypes);
db.ProjectSkill = initProjectSkillModel(sequelize, Sequelize.DataTypes);

// ===== One to Many for User and Industry Table
db.User.belongsTo(db.Industry);
db.Industry.hasMany(db.User);
// ==========================

// ===== One to Many for Project and Industry Table
db.Project.belongsTo(db.Industry);
db.Industry.hasMany(db.Project);
// ==========================

// ===== Many to Many for User and Projects Table
db.User.belongsToMany(db.Project, { through: db.UserProject });
db.Project.belongsToMany(db.User, { through: db.UserProject });

db.User.hasMany(db.UserProject);
db.UserProject.belongsTo(db.User);
db.Project.hasMany(db.UserProject);
db.UserProject.belongsTo(db.Project);
// ============================================

// ===== Many to Many for User and Skills Table
db.User.belongsToMany(db.Skill, { through: db.UserSkill });
db.Skill.belongsToMany(db.User, { through: db.UserSkill });

db.User.hasMany(db.UserSkill);
db.UserSkill.belongsTo(db.User);

db.Skill.hasMany(db.UserSkill);
db.UserSkill.belongsTo(db.Skill);
// ==============================

// ==== Many to Many for Project and Skills Table
db.Project.belongsToMany(db.Skill, { through: db.ProjectSkill });
db.Skill.belongsToMany(db.Project, { through: db.ProjectSkill });

db.Project.hasMany(db.ProjectSkill);
db.ProjectSkill.belongsTo(db.Project);

db.Skill.hasMany(db.ProjectSkill);
db.ProjectSkill.belongsTo(db.Skill);
// ==============================

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
