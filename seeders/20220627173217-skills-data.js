module.exports = {
  up: async (queryInterface) => {
    const startingSkills = [
      {
        name: 'JavaScript',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'React.js',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Node.js',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Express.js',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Sequelize',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'PostgreSQL',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Python',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Data Science and Machine Learning',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Java',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Algorithmic Trading',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    await queryInterface.bulkInsert('skills', startingSkills);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('skills', null);
  },
};
