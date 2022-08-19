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
          address: "951 Chicago Ave",
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
          lat: 37.416199384729076,
          lng: -122.16322037705322,
          name: "The Hanna-Honeycomb House",
          description:
            "The long-term collaboration between the Hannas and Wright resulted in an unprecedented design: a house based on hexagonal geometry, with no right angles in the floor plan.",
          price: 7000,
          previewImage:
            "https://franklloydwright.org/wp-content/uploads/2017/02/Hanna-House-exterior-1440x640.jpg",
        },
        {
          userId: 1,
          address: "5757 South Woodlawn Ave",
          city: "Chicago",
          state: "Illinois",
          country: "USA",
          lat: 41.78991777115571,
          lng: -87.59524712789805,
          name: "Frederick C. Robie House",
          description:
            "Come visit The Robie House, a U.S. National Historic Landmark, now on the campus of the University of Chicago in the South Side neighborhood of Hyde Park in Chicago, Illinois.",
          price: 2500,
          previewImage: "https://media.timeout.com/images/105683549/image.jpg",
        },
        {
          userId: 2,
          address: "12621 N. Frank Lloyd Wright Blvd.",
          city: "Scottsdale",
          state: "Arizona",
          country: "USA",
          lat: 33.606439562200656,
          lng: -111.84484107969402,
          name: "Taliesin West",
          description:
            "Taliesin West is a UNESCO World Heritage site and National Historic Landmark nestled in the desert foothills of the McDowell Mountains in Scottsdale, Arizona.",
          price: 9000,
          previewImage:
            "https://franklloydwright.org/wp-content/uploads/2017/02/Taliesin-West-Sunset-185.jpg",
        },
        {
          userId: 3,
          address: "1491 Mill Run Rd.",
          city: "Mill Run",
          state: "Pennsylvania",
          country: "USA",
          lat: 39.90635795482071,
          lng: -79.46727267397812,
          name: "Fallingwater",
          description:
            "Frank Lloyd Wright's first peronsal home and studio is opening its doors for a limited time to select overnight guests - come and experience the birthplace of Wright's vision for a new American architecture.",
          price: 9000,
          previewImage:
            "https://franklloydwright.org/wp-content/uploads/2017/02/fallingwater.jpg",
        },
        {
          userId: 1,
          address: "5481 Country Rd. C",
          city: "Spring Green",
          state: "Wisconsin",
          country: "USA",
          lat: 43.1411919880234,
          lng: -90.06908646557675,
          name: "Taliesin East",
          description:
            "Taliesin is the home, studio, school, and 800-acre agricultural estate built on Wright's favorite boyhood hill in the Wisconsin River valley homesteaded by his Welsh grandparents.",
          price: 10000,
          previewImage:
            "https://archive.jsonline.com/Services/image.ashx?domain=www.jsonline.com&file=b9941522z.1_20130628144030_000_gu31b8m2.1-0.jpg&resize=660*495",
        },
        // {
        //   userId: 1,
        //   address: "4800 Hollywood Blvd",
        //   city: "Los Angeles",
        //   state: "California",
        //   country: "USA",
        //   lat: 34.10025929155542,
        //   lng: -118.29453545969307,
        //   name: "Hollyhock House",
        //   description:
        //     "The iconic Frank Lloyd Wright home is open for a limited time to overnight guests - come take in the views and architecture of LA's UNESCO World Heritage site!",
        //   price: 3000,
        //   previewImage:
        //     "https://cdn.vox-cdn.com/thumbor/DOPbz_C-mTvI2JEN69UzVovm2tA=/0x0:3600x1712/920x613/filters:focal(1512x914:2088x1490):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/64687543/Hollyhock_House_ext_Photo_by_Joshua_White.0.jpg",
        // },
        // {
        //   userId: 2,
        //   address: "125 Jewett",
        //   city: "Buffalo",
        //   state: "New York",
        //   country: "USA",
        //   lat: 42.93627207354969,
        //   lng: -78.84793099149458,
        //   name: "Martin House",
        //   description:
        //     "One of Frank Lloyd Wright's most important works, this quintessential Prairie house is now accepting select overnight guests - come take in the views of the magnficent landscape and historic architecture!",
        //   price: 8000,
        //   previewImage:
        //     "https://franklloydwright.org/wp-content/uploads/2021/01/MartinHouse024-1440x640.jpg",
        // },
        // {
        //   userId: 3,
        //   address: "951 Chicago Ave",
        //   city: "Oak Park",
        //   state: "Illinois",
        //   country: "USA",
        //   lat: 41.894279810000654,
        //   lng: -87.79955252732101,
        //   name: "Frank Lloyd Wright Home & Studio",
        //   description:
        //     "Frank Lloyd Wright's first peronsal home and studio is opening its doors for a limited time to select overnight guests - come and experience the birthplace of Wright's vision for a new American architecture.",
        //   price: 5000,
        //   previewImage:
        //     "https://s3.amazonaws.com/architecture-org/files/modules/frank-lloyd-wright-home-and-studio-eric-allix-roge.jpg",
        // },
        // {
        //   userId: 1,
        //   address: "737 Frenchmans Road",
        //   city: "Stanford",
        //   state: "California",
        //   country: "USA",
        //   lat: 41.894279810000654,
        //   lng: -87.79955252732101,
        //   name: "The Hanna-Honeycomb House",
        //   description:
        //     "The long-term collaboration between the Hannas and Wright resulted in an unprecedented design: a house based on hexagonal geometry, with no right angles in the floor plan.",
        //   price: 7000,
        //   previewImage:
        //     "https://franklloydwright.org/wp-content/uploads/2017/02/Hanna-House-exterior-1440x640.jpg",
        // },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete("Spots", null, {});
  },
};
