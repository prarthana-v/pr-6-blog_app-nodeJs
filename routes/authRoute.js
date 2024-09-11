const express = require("express");
const routes = express.Router();

const {
  login,
  register,
  registerUser,
  dashboard,
  loginUser,
  logout,
  dash,
} = require("../controllers/AuthController");

routes.get("/", login);
routes.post("/loginUser", loginUser);
routes.get("/register", register);
routes.post("/registerUser", registerUser);
// routes.get("/dashboard", dashboard);
routes.get("/logout", logout);

routes.get("/dashboard", dashboard);

module.exports = routes;
