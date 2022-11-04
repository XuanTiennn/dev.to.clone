const connect = require("./src/config/index");
const cors = require("cors");
const express = require("express");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const postRoute = require("./src/routes/post.route");
const tagRoute = require("./src/routes/tag.route");
const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use("/api", postRoute);
app.use("/api", tagRoute);

connect.connect();

if (process.env.MODE_ENV === "production") {
}

app.listen(port, () => {
  console.log("run from port:", port);
});