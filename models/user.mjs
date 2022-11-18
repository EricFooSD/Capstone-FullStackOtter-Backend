export default function initUserModel(sequelize, DataTypes) {
  return sequelize.define(
    'user',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      username: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      location: {
        type: DataTypes.STRING,
      },
      accountType: {
        type: DataTypes.ENUM('manager', 'engineer', 'client'),
      },
      profilePhoto: {
        type: DataTypes.STRING,
      },
      minimumSalary: {
        type: DataTypes.DECIMAL(10, 2),
      },
      portfolioUrl: {
        type: DataTypes.STRING,
      },
      aboutMe: {
        type: DataTypes.STRING,
      },
      experience: {
        type: DataTypes.STRING,
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
