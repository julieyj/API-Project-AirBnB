'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Images",
      [
        {
          spotId: 1,
          imageableType: "Spot",
          url: "https://cdn.vox-cdn.com/thumbor/htnKeS738au74492utWYN0sEA7o=/0x0:1000x667/1720x0/filters:focal(0x0:1000x667):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/4649661/02_2015_HOLLYHOCK2-86.0.jpg",
        },
        {
          spotId: 1,
          imageableType: "Spot",
          url: "https://images.squarespace-cdn.com/content/v1/5e30b4c769dcbf426b421101/1583522251871-D1AJAG8IKPQH9ZB5BU1V/02_2015_HOLLYHOCK2-54.jpg?format=1500w",
        },
        {
          spotId: 1,
          imageableType: "Spot",
          url: "https://images.squarespace-cdn.com/content/v1/5e30b4c769dcbf426b421101/1583522252559-0QREAPSHNCBWFZ6CYQO0/02_2015_HOLLYHOCK-145.jpg?format=1500w",
        },
        {
          spotId: 1,
          imageableType: "Spot",
          url: "https://images.squarespace-cdn.com/content/v1/5e30b4c769dcbf426b421101/1583522252829-XO4DWAPAFT225UB46TBR/02_2015_HOLLYHOCK-197.jpg?format=1500w",
        },
        // SPOT 2 IMAGES
        {
          spotId: 2,
          imageableType: "Spot",
          url: "https://www.period-homes.com/.image/c_limit%2Ccs_srgb%2Cfl_progressive%2Ch_2000%2Cq_auto:good%2Cw_2000/MTUxMjQxMDQxMDYyNjY4MTEw/4-henrich_conservatory-interior.jpg",
        },
        {
          spotId: 2,
          imageableType: "Spot",
          url: "https://www.period-homes.com/.image/c_limit%2Ccs_srgb%2Cfl_progressive%2Ch_2000%2Cq_auto:good%2Cw_2000/MTUxMjQxMDIzNjE0MzYzNDcw/7-henrich_martin-house-reception-room.jpg",
        },
        {
          spotId: 2,
          imageableType: "Spot",
          url: "https://www.period-homes.com/.image/c_limit%2Ccs_srgb%2Cfl_progressive%2Ch_2000%2Cq_auto:good%2Cw_2000/MTUxMjQxMDQ0MDE1NDU4MTI2/kc_kratt_interior_3.jpg",
        },
        {
          spotId: 2,
          imageableType: "Spot",
          url: "https://martinhouse.org/wp-content/uploads/2021/03/landscaping.jpg",
        },
        // SPOT 3 IMAGES
        {
          spotId: 3,
          imageableType: "Spot",
          url: "https://flwright.org/sites/default/files/detail/homeandstudio_tours_banner.jpg",
        },
        {
          spotId: 3,
          imageableType: "Spot",
          url: "https://flwright.org/sites/default/files/detail/homestudiobanner.jpg",
        },
        {
          spotId: 3,
          imageableType: "Spot",
          url: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/26000/26620-Frank-Lloyd-Wright-Home-And-Studio.jpg",
        },
        {
          spotId: 3,
          imageableType: "Spot",
          url: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/26000/26621-Frank-Lloyd-Wright-Home-And-Studio.jpg?impolicy=fcrop&w=1040&h=580&q=mediumHigh",
        },
        //REVIEW IMAGES
        {
          reviewId: 1,
          imageableType: "Review",
          url: "https://cdn.vox-cdn.com/uploads/chorus_asset/file/18288174/Hollyhock_House_main_Photo_by_Joshua_White.jpg",
        },
        {
          reviewId: 2,
          imageableType: "Review",
          url: "https://franklloydwright.org/wp-content/uploads/2021/01/MartinHouse022-1024x684.jpg",
        },
        {
          reviewId: 3,
          imageableType: "Review",
          url: "https://www.terraamericanart.org/wp-content/uploads/2015/08/AACL_Only_Wright_Frank_Lloyd_Wright_Home_and_Studio_Playroom_1889-1898_Blessing_FLWT-814x1024-814x1024.jpg",
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete("Images", null, {});
  },
};
