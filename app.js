const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./db/db");
const router = require("./routes/routes");
const jwt = require("jsonwebtoken");

const port = process.env.PORT || 8080;

//middlewares
app.use(express.json());
app.use(cors());
app.use("/api", router);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening at port ${port}`));
    console.log("DB connected");
  } catch (error) {
    console.log(error);
  }
};
start();