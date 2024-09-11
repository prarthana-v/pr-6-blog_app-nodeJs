const userModel = require("../models/UserModel");
const BlogModel = require("../models/BlogModel");

const login = (req, res) => {
  if (req.cookies["auth"]) {
    return res.redirect("/dashboard");
  }
  return res.render("login");
};

const register = (req, res) => {
  return res.render("register");
};

const dashboard = async (req, res) => {
  if (!req.cookies["auth"]) {
    return res.redirect("/");
  }

  try {
    const blogs = await BlogModel.find({});
    console.log(blogs);
    return res.render("dash", {
      blogs: blogs,
    });
  } catch (error) {
    console.log("dashborad", error);
    return false;
  }
};

// const dashboard = (req, res) => {

//   return res.render("dashboard");
// };

const registerUser = async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, password } = req.body;
    await userModel.create({
      name: name,
      email: email,
      password: password,
    });

    return res.redirect("/");
  } catch (error) {
    console.log(error);
    return false;
  }
};

const loginUser = async (req, res) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;

    const user = await userModel.findOne({ email: email });

    if (!user) {
      console.log("Invalid Email or password");
      return res.redirect("/");
    }
    res.cookie("auth", user);
    return res.redirect("/dashboard");
  } catch (error) {
    console.log(error);
    return false;
  }
};

const logout = async (req, res) => {
  res.clearCookie("auth");
  return res.redirect("/");
};
module.exports = {
  login,
  register,
  registerUser,
  loginUser,
  dashboard,
  logout,
};
