const blogModel = require("../models/BlogModel");

const addblog = async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const blog = await blogModel.create({
      title: title,
      content: content,
      author: author,
    });
    return res.status(200).send({
      success: true,
      message: "Blog added successfully",
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error,
    });
  }
};

const viewblog = async (req, res) => {
  try {
    const blogs = await blogModel.find({}); // Use blogModel instead of user

    if (blogs.length === 0) {
      return res.status(404).send({
        success: false,
        message: "No blogs found",
      });
    }
    console.log("blogs", blogs);
    return res.status(200).send({
      success: true,
      message: "blog founded ",
      blogs,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};

const deleteblog = async (req, res) => {
  try {
    const id = req.query.id;
    console.log(id);
    const blog = await blogModel.findByIdAndDelete(id);

    return res.status(200).send({
      success: true,
      message: "Blog deleted successfully",
      blog,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};

const updateblog = async (req, res) => {
  try {
    console.log(req.body);
    const { _id, title, content, author } = req.body;
    const updated = await blogModel.findByIdAndUpdate(_id, {
      title: title,
      content: content,
      author: author,
    });
    return res.status(200).send({
      success: true,
      message: "user updated successfully",
      updated,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error,
    });
  }
};

module.exports = {
  addblog,
  viewblog,
  deleteblog,
  updateblog,
};
