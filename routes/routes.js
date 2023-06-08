const express = require("express");
const router = express.Router();

const {
  createUser,
  loginUser,
  decodeUser,
  createBook,
  getAllBooks,
  lendBook,
  getLendBooks,
  deleteLendBook
} = require("../controllers/controllers");


router.route(`/signup`).post(createUser);
router.route(`/login`).post(loginUser);
router.route(`/decode`).post(decodeUser);
router.route('/books').post(createBook).get(getAllBooks);
router.route('/lend').post(lendBook).get(getLendBooks);
router.route('/lend/:id').delete(deleteLendBook);

module.exports = router;