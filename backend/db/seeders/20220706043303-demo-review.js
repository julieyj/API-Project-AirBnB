'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Reviews",
      [
        {
          userId: 1,
          spotId: 2,
          review: "Absolutely breathtaking - can I move in?!",
          stars: 5,
        },
        {
          userId: 2,
          spotId: 3,
          review: "The home was both quaint and stunning.",
          stars: 4,
        },
        {
          userId: 3,
          spotId: 1,
          review:
            "I loved the views of the city and the architecture was amazing - one star off for the crowds and noise from visitors at Barnsdall Park.",
          stars: 4,
        },
        {
          userId: 1,
          spotId: 3,
          review: "Absolutely breathtaking - can I move in?!",
          stars: 5,
        },
        {
          userId: 2,
          spotId: 1,
          review: "The home was both quaint and stunning.",
          stars: 4,
        },
        {
          userId: 3,
          spotId: 2,
          review:
            "I loved the views of the city and the architecture was amazing - one star off for the crowds and noise from visitors at Barnsdall Park.",
          stars: 4,
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete("Reviews", null, {});
  },
};
