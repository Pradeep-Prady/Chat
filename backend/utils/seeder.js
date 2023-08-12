const User = require("../models/userModel");

const user = [
  {
    name: "Admin",
    email: "pradeepprady005@gmail.com",
    password: "986532",
  },
];
const dotenv = require("dotenv");
const connectDatabase = require("../config/database");
dotenv.config({ path: "backend/config/config.env" });

connectDatabase();

const seedAdmin = async () => {
  try {
    await User.insertMany(user);
    console.log("Admin Inserted");
  } catch (err) {
    console.log(err.message);
  }
  process.exit();
};
seedAdmin();
