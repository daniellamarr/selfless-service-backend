module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Events', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    title: {
      type: Sequelize.STRING
    },
    location: {
      type: Sequelize.STRING
    },
    imageURL: {
      type: Sequelize.STRING
    },
    rsvp: {
<<<<<<< HEAD
      type: Sequelize.BOOLEAN
=======
      type: Sequelize.BOOL
>>>>>>> e7063c7e23de85a89e8040336b7a36ec0be29944
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }),
  down: queryInterface => queryInterface.dropTable('Events')
};
