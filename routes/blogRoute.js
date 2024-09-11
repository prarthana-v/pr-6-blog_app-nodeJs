const express = require("express");
const routes = express.Router();
const path = require("path");
const multer = require("multer");

const {
  addblog,
  deleteblog,
  updateblog,
  add,
  update,
} = require("../controllers/BlogController");

const st = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${Math.round(
      Math.random() * 1000000
    )}${path.extname(file.originalname)}`;
    cb(null, uniqueName);
  },
});

const uploadFile = multer({ storage: st }).single("image");

routes.get("/addblog", add);
routes.post("/addblog", uploadFile, addblog);
// routes.get("/viewblog", viewblog);
routes.get("/deleteblog", deleteblog);
routes.get("/updateblog", update);
routes.post("/updateblog", uploadFile, updateblog);

module.exports = routes;
