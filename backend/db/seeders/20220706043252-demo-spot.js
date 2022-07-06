'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Spots",
      [
        {
          userId: 1,
          address: "4800 Hollywood Blvd",
          city: "Los Angeles",
          state: "California",
          country: "USA",
          lat: 34.10025929155542,
          lng: -118.29453545969307,
          name: "Hollyhock House",
          description:
            "The iconic Frank Lloyd Wright home is open for a limited time to overnight guests - come take in the views and architecture of LA's UNESCO World Heritage site!",
          price: 3000,
        },
        {
          userId: 2,
          address: "125 Jewett",
          city: "Buffalo",
          state: "New York",
          country: "USA",
          lat: 42.93627207354969,
          lng: -78.84793099149458,
          name: "Martin House",
          description:
            "One of Frank Lloyd Wright's most important works, this quintessential Prairie house is now accepting select overnight guests - come take in the views of the magnficent landscape and historic architecture!",
          price: 8000,
        },
        {
          userId: 3,
          address: "951 Chicago AVe",
          city: "Oak Park",
          state: "Illinois",
          country: "USA",
          lat: 41.894279810000654,
          lng: -87.79955252732101,
          name: "Frank Lloyd Wright Home & Studio",
          description:
            "Frank Lloyd Wright's first peronsal home and studio is opening its doors for a limited time to select overnight guests - come and experience the birthplace of Wright's vision for a new American architecture.",
          price: 5000,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete("Spots", null, {});
  },
};
