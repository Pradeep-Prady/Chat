const express = require("express");
const app = express();
const errorMiddleware = require("./middlewares/error")
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const path = require("path");

dotenv.config({ path: path.join(__dirname, "config/config.env") });

app.use(express.json());
app.use(cookieParser());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));


const auth = require("./routes/auth");
const chat = require("./routes/chat");

app.use("/chat/v1/", auth);
app.use("/chat/v1/", chat);


if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/build")));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
    });
  }
  

app.use(errorMiddleware)

module.exports = app;
