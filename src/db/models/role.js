
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    title: DataTypes.STRING
  }, {});
  Role.associate = (models) => {
    Role.hasMany(models.User, {
      foreignKey: 'role',
    });
  };
  return Role;
};
