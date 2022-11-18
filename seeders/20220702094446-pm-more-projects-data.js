module.exports = {
  up: async (queryInterface) => {
    const newData = {
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
    };
    const moreProjects = [
      {
        name: 'Algorithmic Trading App',
        summary: 'A Finance Client wants to build a cryptocurrency algorithmic trading app.',
        no_engineers_required: 1,
        minimum_salary: 90.00,
        enrolment_deadline: new Date('September 30, 2022 00:00:00'),
        delivery_deadline: new Date('December 10, 2022 00:00:00'),
        kanban_data: JSON.stringify(newData),
        stage: 'completed',
        projected_hours: 80,
        actual_hours: 80,
        industry_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'eCommerce App',
        summary: 'A tech client wants to build an eCommerce App.',
        no_engineers_required: 2,
        minimum_salary: 40.00,
        enrolment_deadline: new Date('September 17, 2022 00:00:00'),
        delivery_deadline: new Date('January 10, 2023 00:00:00'),
        kanban_data: JSON.stringify(newData),
        stage: 'in-progress',
        projected_hours: 80,
        actual_hours: 0,
        industry_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    const moreUsers = [
      {
        username: 'Dumbledore',
        password: 'd5b897aad732d7212bfdf9a7759a45babc25a90eb557d9e4a147e71523ad8cafecbed13783400f2c9b29b0e2d58a131fa4f9280f61ff7867080ac9bfffda0f72',
        name: 'Albus Dumbledore',
        email: 'dumbledore@gmail.com',
        location: 'Singapore',
        account_type: 'manager',
        profile_photo: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
        minimum_salary: 40.0,
        portfolio_url: 'https://www.youtube.com/watch?v=3wR4mZdTytw',
        about_me: 'Hi, I am a Project Manager!',
        experience: 'I scope out client needs before sourcing talented engineers to build the code out for us.',
        industry_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: 'Client',
        password: 'd5b897aad732d7212bfdf9a7759a45babc25a90eb557d9e4a147e71523ad8cafecbed13783400f2c9b29b0e2d58a131fa4f9280f61ff7867080ac9bfffda0f72',
        name: 'Minerva McGonagall',
        email: 'fakeemail@gmail.com',
        location: 'Singapore',
        account_type: 'client',
        profile_photo: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
        minimum_salary: 0.0,
        portfolio_url: 'https://www.youtube.com/watch?v=3wR4mZdTytw',
        about_me: 'I want people to code for me, and I will pay a reasonable amount.',
        experience: 'Lots of experience telling people what to do for money.',
        industry_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    const moreUserProjects = [
      {
        user_id: 3,
        project_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        project_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 2,
        project_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    await Promise.all([
      queryInterface.bulkInsert('projects', moreProjects),
      queryInterface.bulkInsert('users', moreUsers),
    ]);
    await queryInterface.bulkInsert('user_projects', moreUserProjects);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('user_projects');
    await Promise.all([
      queryInterface.dropTable('users'),
      queryInterface.dropTable('projects'),
    ]);
  },
};
