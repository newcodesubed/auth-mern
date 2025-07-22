const User = require("../models/user");
const { hashPassword, comparePassword } = require("../helpers/auth");

const test = (req, res) => {
  res.json("test is working");
};

//Register End point
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    //Check if name was entered
    if (!name) {
      return res.json({ error: "Please enter a username" });
    }
    //Check if password is good
    if (!password || password.length < 6) {
      return res.json({
        error: "password is required and should be at least 6 character long",
      });
    }
    //Check email
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({ error: "Email already exist" });
    }

    const hashedPassword = await hashPassword(password);
    //Create user in database
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};

//Login Endpoint
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    //Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ error: "User not found" });
    }

    //Check if password match
    const match = await comparePassword(password, user.password);
    if (match) {
      res.json("password match");
    }
    if (!match) {
      res.json({ error: "passwords do not match" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  test,
  registerUser,
  loginUser,
};
