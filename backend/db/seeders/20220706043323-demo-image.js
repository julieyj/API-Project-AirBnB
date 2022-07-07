'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Images",
      [
        {
          spotId: 1,
          imageableType: "Spot",
          url: "https://cdn.vox-cdn.com/thumbor/DOPbz_C-mTvI2JEN69UzVovm2tA=/0x0:3600x1712/920x613/filters:focal(1512x914:2088x1490):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/64687543/Hollyhock_House_ext_Photo_by_Joshua_White.0.jpg",
        },
        {
          spotId: 2,
          imageableType: "Spot",
          url: "https://franklloydwright.org/wp-content/uploads/2021/01/MartinHouse024-1440x640.jpg",
        },
        {
          spotId: 3,
          imageableType: "Spot",
          url: "https://s3.amazonaws.com/architecture-org/files/modules/frank-lloyd-wright-home-and-studio-eric-allix-roge.jpg",
        },
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
