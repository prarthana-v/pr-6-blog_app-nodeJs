const express = require("express");
const routes = express.Router();

routes.use("/", require("../routes/blogRoute"));
routes.use("/", require("../routes/authRoute"));

module.exports = routes;
