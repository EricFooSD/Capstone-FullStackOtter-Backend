export default function initProjectModel(sequelize, DataTypes) {
  return sequelize.define(
    'project',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
      },
      summary: {
        type: DataTypes.STRING,
      },
      noEngineersRequired: {
        type: DataTypes.INTEGER,
      },
      minimumSalary: {
        type: DataTypes.DECIMAL(10, 2),
      },
      enrolmentDeadline: {
        type: DataTypes.DATE,
      },
      deliveryDeadline: {
        type: DataTypes.DATE,
      },
      kanbanData: {
        type: DataTypes.JSON,
      },
      stage: {
        type: DataTypes.ENUM('contracting', 'sourcing', 'in-progress', 'client-review', 'payment-pending', 'completed'),
      },
      projectedHours: {
        type: DataTypes.INTEGER,
      },
      actualHours: {
        type: DataTypes.INTEGER,
      },
      industryId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'industry',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    { underscored: true },
  );
}
