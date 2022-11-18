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
    const startingProjects = [
      {
        name: 'Leave Application App',
        summary: 'A HR Client is looking to build a leave application app where users will be able to submit, approve and plan their leave in an enterprise.',
        no_engineers_required: 3,
        minimum_salary: 45.00,
        enrolment_deadline: new Date('September 1, 2022 00:00:00'),
        delivery_deadline: new Date('December 1, 2022 00:00:00'),
        kanban_data: JSON.stringify(newData),
        stage: 'sourcing',
        projected_hours: 120,
        actual_hours: 0,
        industry_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Job Application App',
        summary: 'A Market Research Client is looking to build a job application app where users will be able to apply for jobs, and this data can be tracked.',
        no_engineers_required: 2,
        minimum_salary: 25.00,
        enrolment_deadline: new Date('September 2, 2022 00:00:00'),
        delivery_deadline: new Date('December 15, 2022 00:00:00'),
        kanban_data: JSON.stringify(newData),
        stage: 'sourcing',
        projected_hours: 80,
        actual_hours: 0,
        industry_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    await queryInterface.bulkInsert('projects', startingProjects);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('projects', null);
  },
};
