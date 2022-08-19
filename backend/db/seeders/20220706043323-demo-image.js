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
        // SPOT 4 IMAGES
        {
          spotId: 4,
          imageableType: "Spot",
          url: "https://storage.googleapis.com/clio-images/20548.110376.jpg",
        },
        {
          spotId: 4,
          imageableType: "Spot",
          url: "https://storage.googleapis.com/clio-images/20548.42275.jpg",
        },
        {
          spotId: 4,
          imageableType: "Spot",
          url: "https://punchmagazine.com/wp-content/uploads/Robert-Siegel-4S0A3551-hanna-house-stanford-300-ppi-05-26-2020-Canon-EOS-7D-Mark-II-scaled.jpg",
        },
        {
          spotId: 4,
          imageableType: "Spot",
          url: "https://images.squarespace-cdn.com/content/v1/54e65d77e4b06d2d72135b6c/1591383204690-GLZHBSKTNTNGZKSVQXEZ/hanna-house-interior-living-2.jpg",
        },
        // SPOT 5 IMAGES
        {
          spotId: 5,
          imageableType: "Spot",
          url: "https://www.teachingbydesign.org/wp-content/uploads/2017/11/Frederick-C.-Robie-House-Living-Room-Photograph-by-James-Caulfield-1200x800.jpg",
        },
        {
          spotId: 5,
          imageableType: "Spot",
          url: "https://live.staticflickr.com/4021/4620553010_2e095bc818_b.jpg",
        },
        {
          spotId: 5,
          imageableType: "Spot",
          url: "https://i.pinimg.com/originals/2a/6e/91/2a6e91c869a1b617372a55649a9ca711.jpg",
        },
        {
          spotId: 5,
          imageableType: "Spot",
          url: "https://s.wsj.net/public/resources/images/OD-BJ001_ROBIE_M_20160112134838.jpg",
        },
        // SPOT 6 IMAGES
        {
          spotId: 6,
          imageableType: "Spot",
          url: "https://franklloydwright.org/wp-content/uploads/2017/01/carousel_interior.jpg",
        },
        {
          spotId: 6,
          imageableType: "Spot",
          url: "https://franklloydwright.org/wp-content/uploads/2017/01/carousel_night.jpg",
        },
        {
          spotId: 6,
          imageableType: "Spot",
          url: "https://franklloydwright.org/wp-content/uploads/2017/01/carousel_pavillion.jpg",
        },
        {
          spotId: 6,
          imageableType: "Spot",
          url: "https://www.phoenixmag.com/wp-content/uploads/2020/02/Taliesin-West_Front-evening-1_Photo-credit-Andrew-Pielage_copyright-Frank-Lloyd-Wright-Foundation.jpg",
        },
        // SPOT 7 IMAGES
        {
          spotId: 7,
          imageableType: "Spot",
          url: "https://www.visitpittsburgh.com/imager/s3_amazonaws_com/visit-pittsburgh/CMS/Fallingwater_082617_233TwilightTour_6c9106706e12d67d9e947a149142c7f3.JPG",
        },
        {
          spotId: 7,
          imageableType: "Spot",
          url: "https://www.visitpittsburgh.com/imager/files_idssasp_com/public/C32/048a7c25-af0f-4edb-9f53-43c4b4f8a7f1/2784a1f1-53fb-481a-9db0-5d2628e4f5cc_3cbc8dc32555fa4047c8bd463d1d5693.jpg",
        },
        {
          spotId: 7,
          imageableType: "Spot",
          url: "http://www.slate.com/content/dam/slideshows/arts/architecture/2011/09/06/falling-for-fallingwater/jcr%3Acontent/slideshow/5/images%252Fslides%252F6.Fallingwater_p062-063.jpg",
        },
        {
          spotId: 7,
          imageableType: "Spot",
          url: "https://waterlandlife.org/wp-content/uploads/2021/04/FW_East-Terrace-looking-through-living-room-Christopher-Little-courtesy-of-the-Western-Pennsylvania-Conservancy-web-700x700.jpg",
        },
        // SPOT 8 IMAGES
        {
          spotId: 8,
          imageableType: "Spot",
          url: "https://travel.usnews.com/images/Taliesin.jpg",
        },
        {
          spotId: 8,
          imageableType: "Spot",
          url: "https://media.architecturaldigest.com/photos/5af5c58a94fddd48f4c4cee4/master/pass/GettyImages-690508547.jpg",
        },
        {
          spotId: 8,
          imageableType: "Spot",
          url: "https://media.cntraveler.com/photos/54888f18860c74c1162c813d/16:9/w_2560,c_limit/frank-lloyd-wright-house-spring-green-wisconsin.jpg",
        },
        {
          spotId: 8,
          imageableType: "Spot",
          url: "https://www.wpr.org/sites/default/files/styles/resp_orig_custom_user_wide_1x/public/library/frank_lloyd_wright_world_heritage_007.jpg?itok=qDorNb0y",
        },
        // {
        //   spotId: 9,
        //   imageableType: "Spot",
        //   url: "https://cdn.vox-cdn.com/thumbor/htnKeS738au74492utWYN0sEA7o=/0x0:1000x667/1720x0/filters:focal(0x0:1000x667):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/4649661/02_2015_HOLLYHOCK2-86.0.jpg",
        // },
        // {
        //   spotId: 9,
        //   imageableType: "Spot",
        //   url: "https://images.squarespace-cdn.com/content/v1/5e30b4c769dcbf426b421101/1583522251871-D1AJAG8IKPQH9ZB5BU1V/02_2015_HOLLYHOCK2-54.jpg?format=1500w",
        // },
        // {
        //   spotId: 9,
        //   imageableType: "Spot",
        //   url: "https://images.squarespace-cdn.com/content/v1/5e30b4c769dcbf426b421101/1583522252559-0QREAPSHNCBWFZ6CYQO0/02_2015_HOLLYHOCK-145.jpg?format=1500w",
        // },
        // {
        //   spotId: 9,
        //   imageableType: "Spot",
        //   url: "https://images.squarespace-cdn.com/content/v1/5e30b4c769dcbf426b421101/1583522252829-XO4DWAPAFT225UB46TBR/02_2015_HOLLYHOCK-197.jpg?format=1500w",
        // },
        // // SPOT 2 IMAGES
        // {
        //   spotId: 10,
        //   imageableType: "Spot",
        //   url: "https://www.period-homes.com/.image/c_limit%2Ccs_srgb%2Cfl_progressive%2Ch_2000%2Cq_auto:good%2Cw_2000/MTUxMjQxMDQxMDYyNjY4MTEw/4-henrich_conservatory-interior.jpg",
        // },
        // {
        //   spotId: 10,
        //   imageableType: "Spot",
        //   url: "https://www.period-homes.com/.image/c_limit%2Ccs_srgb%2Cfl_progressive%2Ch_2000%2Cq_auto:good%2Cw_2000/MTUxMjQxMDIzNjE0MzYzNDcw/7-henrich_martin-house-reception-room.jpg",
        // },
        // {
        //   spotId: 10,
        //   imageableType: "Spot",
        //   url: "https://www.period-homes.com/.image/c_limit%2Ccs_srgb%2Cfl_progressive%2Ch_2000%2Cq_auto:good%2Cw_2000/MTUxMjQxMDQ0MDE1NDU4MTI2/kc_kratt_interior_3.jpg",
        // },
        // {
        //   spotId: 10,
        //   imageableType: "Spot",
        //   url: "https://martinhouse.org/wp-content/uploads/2021/03/landscaping.jpg",
        // },
        // // SPOT 3 IMAGES
        // {
        //   spotId: 11,
        //   imageableType: "Spot",
        //   url: "https://flwright.org/sites/default/files/detail/homeandstudio_tours_banner.jpg",
        // },
        // {
        //   spotId: 11,
        //   imageableType: "Spot",
        //   url: "https://flwright.org/sites/default/files/detail/homestudiobanner.jpg",
        // },
        // {
        //   spotId: 11,
        //   imageableType: "Spot",
        //   url: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/26000/26620-Frank-Lloyd-Wright-Home-And-Studio.jpg",
        // },
        // {
        //   spotId: 11,
        //   imageableType: "Spot",
        //   url: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/26000/26621-Frank-Lloyd-Wright-Home-And-Studio.jpg?impolicy=fcrop&w=1040&h=580&q=mediumHigh",
        // },
        // // SPOT 4 IMAGES
        // {
        //   spotId: 12,
        //   imageableType: "Spot",
        //   url: "https://storage.googleapis.com/clio-images/20548.110376.jpg",
        // },
        // {
        //   spotId: 12,
        //   imageableType: "Spot",
        //   url: "https://storage.googleapis.com/clio-images/20548.42275.jpg",
        // },
        // {
        //   spotId: 12,
        //   imageableType: "Spot",
        //   url: "https://punchmagazine.com/wp-content/uploads/Robert-Siegel-4S0A3551-hanna-house-stanford-300-ppi-05-26-2020-Canon-EOS-7D-Mark-II-scaled.jpg",
        // },
        // {
        //   spotId: 12,
        //   imageableType: "Spot",
        //   url: "https://images.squarespace-cdn.com/content/v1/54e65d77e4b06d2d72135b6c/1591383204690-GLZHBSKTNTNGZKSVQXEZ/hanna-house-interior-living-2.jpg",
        // },
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
