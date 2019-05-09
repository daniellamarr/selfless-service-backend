module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    firstname: {
      allowNull: false,
      type: Sequelize.STRING
    },
    surname: {
      allowNull: false,
      type: Sequelize.STRING
    },
    username: {
      allowNull: false,
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.TEXT
    },
    email: {
      type: Sequelize.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your email address'
      },
      unique: {
        args: true,
        msg: 'Email already exists'
      },
      validate: {
        isEmail: {
          args: true,
          msg: 'Please enter a valid email address'
        },
      },
    },
    phoneNumber: {
      allowNull: false,
      type: Sequelize.STRING
    },
    password: {
      allowNull: false,
      type: Sequelize.STRING
    },
    address: {
      type: Sequelize.TEXT
    },
    dob: {
      allowNull: false,
      type: Sequelize.DATE
    },
    role: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'Roles',
        key: 'id',
        as: 'role',
      }
    },
    status: {
      allowNull: false,
      type: Sequelize.ENUM,
      values: ['Active', 'Suspended', 'Blocked']
    },
    verified: {
      allowNull: false,
      type: Sequelize.BOOLEAN
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
  down: queryInterface => queryInterface.dropTable('Users')
};
