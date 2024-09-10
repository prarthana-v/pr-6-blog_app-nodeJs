const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const con = await mongoose.connect(
      "mongodb+srv://pdvaghani:pdvaghani@cluster0.quhpv.mongodb.net/myblogapp"
    );
    console.log(`MongoDB Connected: ${con.connection.host}`);
  } catch (error) {
    console.log(error);
    return false;
  }
};

module.exports = connectDB;
