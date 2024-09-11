const blogModel = require("../models/BlogModel");
const fs = require("fs");
const path = require("path");

const add = (req, res) => {
  return res.render("add");
};

const addblog = async (req, res) => {
  try {
    // console.log(req.body);

    // console.log(req.file);
    // console.log(req.file.path);

    const { title, content, author } = req.body;
    const blog = await blogModel.create({
      title: title,
      content: content,
      author: author,
      image: req.file.path,
    });
    return res.redirect("/dashboard");
  } catch (error) {
    console.log("addblog", error);
    return false;
  }
};

const deleteblog = async (req, res) => {
  try {
    const id = req.query.id;
    // old image delete
    const blog = await blogModel.findById(id);
    if (!blog) console.log("movie not founded");

    // delete image
    if (blog.image) {
      fs.unlinkSync(blog.image);
    }
    // console.log(req.query);
    // delete blog
    await blogModel.findByIdAndDelete(id);

    return res.redirect("/dashboard");
  } catch (error) {
    console.log("deleteblog", error);
    return false;
  }
};

const update = async (req, res) => {
  try {
    const id = req.query.id;
    // console.log(id);

    const blog = await blogModel.findById(id);
    // console.log(blog);

    if (!blog) {
      console.log("blog not found");
      return false;
    }

    return res.render("edit", {
      blog: blog,
    });
  } catch (error) {
    console.log("updateblog", error);
    return false;
  }
};

const updateblog = async (req, res) => {
  // console.log(req.body);
  // console.log(req.file);

  const image = req.file ? req.file.path : req.body.existingImage;
  try {
    const { _id, title, content, author } = req.body;

    const blog = await blogModel.findById(_id);

    if (req.file && blog.image) {
      fs.unlinkSync(blog.image);
      console.log("OLD IMAGE DELETED");
    }

    const updated = await blogModel.findByIdAndUpdate(_id, {
      title: title,
      content: content,
      author: author,
      image: image,
    });
    return res.redirect("/dashboard");
  } catch (error) {
    console.log("updateblog", error);
    return false;
  }
};

module.exports = {
  add,
  addblog,
  deleteblog,
  update,
  updateblog,
};
