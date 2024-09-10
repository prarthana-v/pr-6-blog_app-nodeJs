const express = require("express");
const routes = express.Router();

const {
  addblog,
  viewblog,
  deleteblog,
  updateblog,
} = require("../controllers/CrudController");

routes.post("/addblog", addblog);
routes.get("/viewblog", viewblog);
routes.delete("/deleteblog", deleteblog);
routes.put("/updateblog", updateblog);

module.exports = routes;
