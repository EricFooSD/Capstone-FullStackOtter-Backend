module.exports = {
  up: async (queryInterface) => {
    const startingUserProjects = [
      {
        user_id: 1,
        project_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 2,
        project_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    const startingUserSkills = [
      {
        user_id: 1,
        skill_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        skill_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        skill_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        skill_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        skill_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        skill_id: 6,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 2,
        skill_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 2,
        skill_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 2,
        skill_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 2,
        skill_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 2,
        skill_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 2,
        skill_id: 6,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 3,
        skill_id: 7,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 3,
        skill_id: 8,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 3,
        skill_id: 9,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 3,
        skill_id: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    const startingProjectSkills = [
      {
        project_id: 1,
        skill_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        project_id: 1,
        skill_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        project_id: 1,
        skill_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        project_id: 1,
        skill_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        project_id: 1,
        skill_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        project_id: 1,
        skill_id: 6,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        project_id: 2,
        skill_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        project_id: 2,
        skill_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        project_id: 2,
        skill_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        project_id: 2,
        skill_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        project_id: 2,
        skill_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        project_id: 2,
        skill_id: 6,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    await Promise.all([
      queryInterface.bulkInsert('user_projects', startingUserProjects),
      queryInterface.bulkInsert('user_skills', startingUserSkills),
      queryInterface.bulkInsert('project_skills', startingProjectSkills),
    ]);
  },

  down: async (queryInterface) => {
    await Promise.all([
      queryInterface.bulkDelete('project_skills', null),
      queryInterface.bulkDelete('user_skills', null),
      queryInterface.bulkDelete('user_projects', null),
    ]);
  },
};
