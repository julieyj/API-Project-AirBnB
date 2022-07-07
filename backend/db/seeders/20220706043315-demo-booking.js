'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Bookings",
      [
        {
          spotId: 2,
          userId: 1,
          startDate: "2022-07-16",
          endDate: "2022-07-17",
        },
        {
          spotId: 3,
          userId: 2,
          startDate: "2022-07-16",
          endDate: "2022-07-17",
        },
        {
          spotId: 1,
          userId: 3,
          startDate: "2022-07-16",
          endDate: "2022-07-17",
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete("Bookings", null, {});
  },
};
