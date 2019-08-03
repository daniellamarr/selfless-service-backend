module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    title: DataTypes.STRING,
    location: DataTypes.STRING,
    imageURL: DataTypes.STRING,
<<<<<<< HEAD
    rsvp: DataTypes.BOOLEAN
=======
    rsvp: DataTypes.BOOL
>>>>>>> e7063c7e23de85a89e8040336b7a36ec0be29944
  }, {});
  Event.associate = (models) => {
    // associations can be defined here
  };
  return Event;
};
