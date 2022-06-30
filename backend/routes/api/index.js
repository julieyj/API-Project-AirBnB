const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const { restoreUser } = require("../../utils/auth.js");

router.use(restoreUser);

router.use("/session", sessionRouter);

router.use("/users", usersRouter);

router.post("/test", function (req, res) {
  res.json({ requestBody: req.body });
});

// TEST ROUTE : GET /api/set-token-cookie
// const { setTokenCookie } = require('../../utils/auth.js');
// const { User } = require('../../db/models');
// router.get('/set-token-cookie', async (_req, res) => {
//   const user = await User.findOne({
//       where: {
//         username: 'Demo-lition'
//       }
//     });
//   setTokenCookie(res, user);
//   return res.json({ user });
// });

// GET /api/restore-user

// router.use(restoreUser);

// router.get(
  //   '/restore-user',
  //   (req, res) => {
    //     return res.json(req.user);
    //   }
    // );

    // GET /api/require-auth
    // const { requireAuth } = require('../../utils/auth.js');
    // router.get(
      //   '/require-auth',
      //   requireAuth,
      //   (req, res) => {
        //     return res.json(req.user);
        //   }
        // );


module.exports = router;


// fetch("/api/users", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "XSRF-TOKEN": `G35XDYDi-hq_MoNNoSOhYteDk_QwcKf7y9KA`,
//   },
//   body: JSON.stringify({
//     email: "spidey@spider.man",
//     username: "Spidey",
//     password: "password",
//   }),
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data));
