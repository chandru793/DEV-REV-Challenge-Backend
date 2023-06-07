const express = require("express");
const router = express.Router();

const {
  createUser,
  loginUser,
  decodeUser,
} = require("../controllers/controllers");


router.route(`/signup`).post(createUser);
router.route(`/login`).post(loginUser);
router.route(`/decode`).post(decodeUser);

module.exports = router;