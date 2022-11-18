module.exports = {
  up: async (queryInterface) => {
    const startingUsers = [
      {
        username: 'Potter',
        password: 'be3c67cd5afa51dd80c15135325c39de6b01a8d16f5d1c8a2bf0da953c904b3c374154251bdde38ad3b7f795dc620538ee11d032f7856d3bc12968873a82c0d0',
        name: 'Harry Potter',
        email: 'harrypotter@gmail.com',
        location: 'Singapore',
        account_type: 'engineer',
        profile_photo: 'https://cdn-icons-png.flaticon.com/512/147/147142.png',
        minimum_salary: 40.0,
        portfolio_url: 'https://https://github.com/EricFooSD',
        about_me: 'Hi i am an engineer.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus purus neque, consectetur a urna eget, fringilla vehicula ante. Nam id euismod ligula, vitae lobortis eros.',
        experience: 'I am an automation expert and a full-stack software engineer.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus purus neque, consectetur a urna eget, fringilla vehicula ante. Nam id euismod ligula, vitae lobortis eros.',
        industry_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: 'Weasley',
        password: 'be3c67cd5afa51dd80c15135325c39de6b01a8d16f5d1c8a2bf0da953c904b3c374154251bdde38ad3b7f795dc620538ee11d032f7856d3bc12968873a82c0d0',
        name: 'Ron Weasley',
        email: 'ronweasley@gmail.com',
        location: 'Singapore',
        account_type: 'engineer',
        profile_photo: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
        minimum_salary: 40.0,
        portfolio_url: 'https://https://github.com/EricFooSD',
        about_me: 'Hi i am an engineer.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus purus neque, consectetur a urna eget, fringilla vehicula ante. Nam id euismod ligula, vitae lobortis eros.',
        experience: 'I am a product manager.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus purus neque, consectetur a urna eget, fringilla vehicula ante. Nam id euismod ligula, vitae lobortis eros.',
        industry_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: 'Snape',
        password: 'be3c67cd5afa51dd80c15135325c39de6b01a8d16f5d1c8a2bf0da953c904b3c374154251bdde38ad3b7f795dc620538ee11d032f7856d3bc12968873a82c0d0',
        name: 'Severus Snape',
        email: 'snape@gmail.com',
        location: 'Singapore',
        account_type: 'engineer',
        profile_photo: 'https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png',
        minimum_salary: 40.0,
        portfolio_url: 'https://https://github.com/EricFooSD',
        about_me: 'Hi i am an engineer.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus purus neque, consectetur a urna eget, fringilla vehicula ante. Nam id euismod ligula, vitae lobortis eros.',
        experience: 'I am an algorithmic trader and a full-stack software engineer.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus purus neque, consectetur a urna eget, fringilla vehicula ante. Nam id euismod ligula, vitae lobortis eros.',
        industry_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    queryInterface.bulkInsert('users', startingUsers);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null);
  },
};
