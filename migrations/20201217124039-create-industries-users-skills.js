module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'industries',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: {
          type: Sequelize.STRING,
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
    );
    await queryInterface.createTable(
      'users',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        username: {
          type: Sequelize.STRING,
        },
        password: {
          type: Sequelize.STRING,
        },
        name: {
          type: Sequelize.STRING,
        },
        email: {
          type: Sequelize.STRING,
        },
        location: {
          type: Sequelize.STRING,
        },
        account_type: {
          type: Sequelize.ENUM('manager', 'engineer', 'client'),
        },
        profile_photo: {
          type: Sequelize.STRING,
        },
        minimum_salary: {
          type: Sequelize.DECIMAL(10, 2),
        },
        portfolio_url: {
          type: Sequelize.STRING,
        },
        about_me: {
          type: Sequelize.STRING,
        },
        experience: {
          type: Sequelize.STRING,
        },
        industry_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'industries',
            key: 'id',
          },
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
    );
    await queryInterface.createTable(
      'skills',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: {
          type: Sequelize.STRING,
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
    );
    await queryInterface.createTable('user_skills', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      skill_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'skills',
          key: 'id',
        },
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('user_skills');
    await Promise.all([
      queryInterface.dropTable('skills'),
      queryInterface.dropTable('users'),
      queryInterface.dropTable('industries'),
    ]);
  },
};
