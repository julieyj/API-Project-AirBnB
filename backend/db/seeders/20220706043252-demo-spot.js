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
          previewImage:
            "https://cdn.vox-cdn.com/thumbor/DOPbz_C-mTvI2JEN69UzVovm2tA=/0x0:3600x1712/920x613/filters:focal(1512x914:2088x1490):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/64687543/Hollyhock_House_ext_Photo_by_Joshua_White.0.jpg",
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
          previewImage:
            "https://franklloydwright.org/wp-content/uploads/2021/01/MartinHouse024-1440x640.jpg",
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
          previewImage:
            "https://s3.amazonaws.com/architecture-org/files/modules/frank-lloyd-wright-home-and-studio-eric-allix-roge.jpg",
        },
        {
          userId: 1,
          address: "737 Frenchmans Road",
          city: "Stanford",
          state: "California",
          country: "USA",
          lat: 41.894279810000654,
          lng: -87.79955252732101,
          name: "The Hanna-Honeycomb House",
          description:
            "The long-term collaboration between the Hannas and Wright resulted in an unprecedented design: a house based on hexagonal geometry, with no right angles in the floor plan.",
          price: 7000,
          previewImage:
            "https://franklloydwright.org/wp-content/uploads/2017/02/Hanna-House-exterior-1440x640.jpg",
        },
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
          previewImage:
            "https://cdn.vox-cdn.com/thumbor/DOPbz_C-mTvI2JEN69UzVovm2tA=/0x0:3600x1712/920x613/filters:focal(1512x914:2088x1490):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/64687543/Hollyhock_House_ext_Photo_by_Joshua_White.0.jpg",
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
          previewImage:
            "https://franklloydwright.org/wp-content/uploads/2021/01/MartinHouse024-1440x640.jpg",
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
          previewImage:
            "https://s3.amazonaws.com/architecture-org/files/modules/frank-lloyd-wright-home-and-studio-eric-allix-roge.jpg",
        },
        {
          userId: 1,
          address: "737 Frenchmans Road",
          city: "Stanford",
          state: "California",
          country: "USA",
          lat: 41.894279810000654,
          lng: -87.79955252732101,
          name: "The Hanna-Honeycomb House",
          description:
            "The long-term collaboration between the Hannas and Wright resulted in an unprecedented design: a house based on hexagonal geometry, with no right angles in the floor plan.",
          price: 7000,
          previewImage:
            "https://franklloydwright.org/wp-content/uploads/2017/02/Hanna-House-exterior-1440x640.jpg",
        },
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
          previewImage:
            "https://cdn.vox-cdn.com/thumbor/DOPbz_C-mTvI2JEN69UzVovm2tA=/0x0:3600x1712/920x613/filters:focal(1512x914:2088x1490):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/64687543/Hollyhock_House_ext_Photo_by_Joshua_White.0.jpg",
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
          previewImage:
            "https://franklloydwright.org/wp-content/uploads/2021/01/MartinHouse024-1440x640.jpg",
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
          previewImage:
            "https://s3.amazonaws.com/architecture-org/files/modules/frank-lloyd-wright-home-and-studio-eric-allix-roge.jpg",
        },
        {
          userId: 1,
          address: "737 Frenchmans Road",
          city: "Stanford",
          state: "California",
          country: "USA",
          lat: 41.894279810000654,
          lng: -87.79955252732101,
          name: "The Hanna-Honeycomb House",
          description:
            "The long-term collaboration between the Hannas and Wright resulted in an unprecedented design: a house based on hexagonal geometry, with no right angles in the floor plan.",
          price: 7000,
          previewImage:
            "https://franklloydwright.org/wp-content/uploads/2017/02/Hanna-House-exterior-1440x640.jpg",
        },
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
          previewImage:
            "https://cdn.vox-cdn.com/thumbor/DOPbz_C-mTvI2JEN69UzVovm2tA=/0x0:3600x1712/920x613/filters:focal(1512x914:2088x1490):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/64687543/Hollyhock_House_ext_Photo_by_Joshua_White.0.jpg",
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
          previewImage:
            "https://franklloydwright.org/wp-content/uploads/2021/01/MartinHouse024-1440x640.jpg",
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
          previewImage:
            "https://s3.amazonaws.com/architecture-org/files/modules/frank-lloyd-wright-home-and-studio-eric-allix-roge.jpg",
        },
        {
          userId: 1,
          address: "737 Frenchmans Road",
          city: "Stanford",
          state: "California",
          country: "USA",
          lat: 41.894279810000654,
          lng: -87.79955252732101,
          name: "The Hanna-Honeycomb House",
          description:
            "The long-term collaboration between the Hannas and Wright resulted in an unprecedented design: a house based on hexagonal geometry, with no right angles in the floor plan.",
          price: 7000,
          previewImage:
            "https://franklloydwright.org/wp-content/uploads/2017/02/Hanna-House-exterior-1440x640.jpg",
        },
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
          previewImage:
            "https://cdn.vox-cdn.com/thumbor/DOPbz_C-mTvI2JEN69UzVovm2tA=/0x0:3600x1712/920x613/filters:focal(1512x914:2088x1490):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/64687543/Hollyhock_House_ext_Photo_by_Joshua_White.0.jpg",
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
          previewImage:
            "https://franklloydwright.org/wp-content/uploads/2021/01/MartinHouse024-1440x640.jpg",
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
          previewImage:
            "https://s3.amazonaws.com/architecture-org/files/modules/frank-lloyd-wright-home-and-studio-eric-allix-roge.jpg",
        },
        {
          userId: 1,
          address: "737 Frenchmans Road",
          city: "Stanford",
          state: "California",
          country: "USA",
          lat: 41.894279810000654,
          lng: -87.79955252732101,
          name: "The Hanna-Honeycomb House",
          description:
            "The long-term collaboration between the Hannas and Wright resulted in an unprecedented design: a house based on hexagonal geometry, with no right angles in the floor plan.",
          price: 7000,
          previewImage:
            "https://franklloydwright.org/wp-content/uploads/2017/02/Hanna-House-exterior-1440x640.jpg",
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete("Spots", null, {});
  },
};
