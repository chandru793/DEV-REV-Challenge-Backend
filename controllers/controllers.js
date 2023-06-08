const Users = require("../model/UserSchema");
const Books = require("../model/BookSchema");
const Lend = require("../model/LendSchema");
const asyncWrapper = require("../middleware/async");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

//SignUp
const createUser = async (req, res) => {
  console.log(req.body);
  try {
    const newpassword = await bcrypt.hash(req.body.password, 10);
    await Users.create({
      name: req.body.name,
      email: req.body.email,
      password: newpassword,
    });
    res.status(201).json({ status: "ok" });
    console.log("Create Profile");
  } catch (err) {
    console.log(err);
    res.json({ status: "error", error: "Duplicate email" });
  }
};

//login
const loginUser = asyncWrapper(async (req, res) => {
  const user = await Users.findOne({
    email: req.body.email,
  });

  if (!user) {
    return res.status(401).json({ status: "error", error: "Invalid input" });
  }

  const isPasswordvalid = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (user && isPasswordvalid) {
    const token = jwt.sign(
      {
        name: user.name,
        email: user.email,
      },
      `secret123`
    );
    console.log("User Found");
    return res.json({ status: "ok", user: token, name: user.name });
  } else {
    console.log("User Not found");
    return res.json({ status: "error", user: false });
  }
  res.json({ status: "ok" });
});

//Decode
const decodeUser = asyncWrapper(async (req, res) => {
  try {
    const token = req.body.token;
    const user = jwt.decode(req.body.token);
    console.log("User Decode success");
    res.status(200).json({ user: user });
  } catch (error) {
    console.log("user error");
    res.json({ status: "error" });
  }
});

//get all books
const getAllBooks = asyncWrapper(async (req, res) => {
  const books = await Books.find({});
  res.status(200).json({ books });
  console.log("Get All Books");
});

//create book
const createBook = asyncWrapper(async (req, res) => {
  const books = await Books.create(req.body);
  res.status(201).json({ books });
  console.log("Create Book");
});

//lend book
const lendBook = asyncWrapper(async (req, res) => {
  const details = await Lend.create(req.body);
  res.status(201).json({ details });
  console.log("lend book");
});

//get lend books
const getLendBooks = asyncWrapper(async (req, res) => {
  const books = await Lend.find({});
  res.status(200).json({ books });
  console.log("Get All Lend Books");
});

//delete lend books
const deleteLendBook = asyncWrapper(async (req, res) => {
  const { id: LendID } = req.params;
  const LendBook = await Lend.findOneAndDelete({ _id: LendID });
  if (!LendBook) {
    return res.status(404).json({ msg: `No task found with id :${LendID}` });
  }
  res.status(200).json({ LendBook });
  console.log("Delete Task");
});

module.exports = {
  createUser,
  loginUser,
  decodeUser,
  createBook,
  getAllBooks,
  lendBook,
  getLendBooks,
  deleteLendBook,
};
