/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-plusplus */
module.exports = {
  up: async (queryInterface) => {
    const kanbanData = {
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

    const moreProjectsArray = [];
    const moreProjectsSkillsArray = [];

    for (let i = 5; i < 16; i++) {
    // adds more projects starting from i = 5, because we already have 4 projects
      moreProjectsArray.push({
        name: `Seed App ${i}`,
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in imperdiet lectus, vitae lacinia augue. Nam facilisis nisi vitae nisi vestibulum congue.',
        no_engineers_required: Math.ceil(Math.random() * 5),
        minimum_salary: 45.00,
        enrolment_deadline: new Date('October 30, 2022 00:00:00'),
        delivery_deadline: new Date('December 30, 2022 00:00:00'),
        kanban_data: JSON.stringify(kanbanData),
        stage: 'sourcing',
        projected_hours: 150,
        actual_hours: 0,
        industry_id: Math.ceil(Math.random() * 5),
        created_at: new Date(),
        updated_at: new Date(),
      });

      moreProjectsSkillsArray.push({
        project_id: i,
        skill_id: Math.ceil(Math.random() * 10),
        created_at: new Date(),
        updated_at: new Date(),
      });
    }

    await queryInterface.bulkInsert('projects', moreProjectsArray);

    await queryInterface.bulkInsert(
      'project_skills',
      moreProjectsSkillsArray,
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('project_skills', null);
    await queryInterface.bulkDelete('projects', null);
  },
};
