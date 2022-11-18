module.exports = {
  up: async (queryInterface) => {
    const startingIndustries = [
      {
        name: 'Airline',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Finance',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Market Research',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Human Resources',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Technology',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    await queryInterface.bulkInsert('industries', startingIndustries);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('industries', null);
  },
};
