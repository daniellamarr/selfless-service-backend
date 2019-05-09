module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstname: DataTypes.STRING,
    surname: DataTypes.STRING,
    username: DataTypes.STRING,
    description: DataTypes.TEXT,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    password: DataTypes.STRING,
    address: DataTypes.TEXT,
    dob: DataTypes.DATE,
    role: DataTypes.INTEGER,
    status: DataTypes.ENUM('Active', 'Suspended', 'Blocked'),
    verified: DataTypes.BOOLEAN
  }, {});
  User.associate = (models) => {
    User.belongsTo(models.Role, {
      foreignKey: 'role',
    });
  };
  return User;
};
