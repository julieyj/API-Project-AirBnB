'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addIndex(
      'Reviews',
      ['userId', 'spotId'],
      {
        unique: true
      }
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeIndex(
      'Reviews',
      ['userId', 'spotId']
    );
  }
};
