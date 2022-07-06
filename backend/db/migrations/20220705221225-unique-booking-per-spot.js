'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.addIndex(
    'Bookings',
    ['spotId', 'startDate', 'endDate'],
    {
      unique: true
    }
   )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeIndex(
      'Bookings',
      ['spotId', 'startDate', 'endDate']
    );
  }
};
