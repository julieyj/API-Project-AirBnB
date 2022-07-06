'use strict';
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "demo@user.io",
          firstName: "Demo",
          lastName: "Lition",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "user1@user.io",
          firstName: "Fake",
          lastName: "UserOne",
          hashedPassword: bcrypt.hashSync("password2"),
        },
        {
          email: "user2@user.io",
          firstName: "Fake",
          lastName: "UserTwo",
          hashedPassword: bcrypt.hashSync("password3"),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      "Users",
      {
        email: { [Op.in]: ["demo@user.io", "user1@user.io", "user2@user.io"] },
      },
      {}
    );
  },
};

// fetch("/api/users", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "XSRF-TOKEN": `<value of XSRF-TOKEN cookie>`,
//   },
//   body: JSON.stringify({
//     email: "spidey@spider.man",
//     firstName: "Spidey",
//     password: "password",
//   }),
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data));


  // fetch("/api/users", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     "XSRF-TOKEN": `6wJLJnOd-nT_7OMVlo1brRlN7q77paXqeUZo`,
  //   },
  //   body: JSON.stringify({
  //     email: "spidey@spider.man",
  //     firstName: "Spidey",
  //     lastName: "Man",
  //     password: "password",
  //   }),
  // })
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));
