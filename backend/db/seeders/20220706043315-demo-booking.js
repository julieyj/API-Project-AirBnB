'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Bookings",
      [
        {
          spotId: 2,
          userId: 1,
          startDate: new Date("2022-07-16"),
          endDate: new Date("2022-07-17"),
        },
        {
          spotId: 3,
          userId: 2,
          startDate: new Date("2022-07-16"),
          endDate: new Date("2022-07-17"),
        },
        {
          spotId: 1,
          userId: 3,
          startDate: new Date("2022-07-16"),
          endDate: new Date("2022-07-17"),
        },
        {
          spotId: 1,
          userId: 2,
          startDate: new Date("2022-07-03"),
          endDate: new Date("2022-07-05"),
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete("Bookings", null, {});
  },
};
