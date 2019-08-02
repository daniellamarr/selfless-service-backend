module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    title: DataTypes.STRING,
    location: DataTypes.STRING,
    imageURL: DataTypes.STRING,
    rsvp: DataTypes.BOOL
  }, {});
  Event.associate = (models) => {
    // associations can be defined here
  };
  return Event;
};
