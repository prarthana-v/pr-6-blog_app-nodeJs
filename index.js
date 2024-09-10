const express = require("express");
const app = express();
const port = 8000;
const path = require("path");
const connectDB = require("./config/db");
connectDB();

const cookie = require("cookie-parser");
app.use(cookie());

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded());
app.set("view engine", "ejs");
app.use("/", require("./routes/indexRoute"));

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return false;
  }
  console.log(`server is running on ${port}`);
});
// const express = require("express");
// const app = express();
// const port = 8000;

// const connectDB = require("./config/db");

// // Add error handling for connectDB()
// connectDB().catch((err) => {
//   console.error("Error connecting to database:", err);
//   process.exit(1);
// });

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json()); // Add JSON parser middleware

// app.use("/api/blogs", require("./routes/indexRoute"));

// // Add route for root URL
// app.get("/", (req, res) => {
//   res.send("Welcome to the API");
// });

// // Add 404 error handling
// app.use((req, res, next) => {
//   res.status(404).send("Not Found");
// });

// // Add global error handling
// app.use((err, req, res, next) => {
//   console.error("Error:", err);
//   res.status(500).send("Internal Server Error");
// });

// app.listen(port, (err) => {
//   if (err) {
//     console.error("Error starting server:", err);
//     return false;
//   }
//   console.log(`Server is running on ${port}`);
//   return true;
// });
