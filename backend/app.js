const express = require("express");
const app = express();
const errorMidleware = require("./middlewares/error");
const cookieParser = require("cookie-parser");
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config({ path: path.join(__dirname, "config/config.env") });

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.set("trust proxy", true);
 

const auth = require("./routes/auth");
const gang = require("./routes/gang");
const usergang = require("./routes/userGang");

const chat = require("./routes/chat");
const review = require("./routes/review");

app.use("/api/v1", auth);
app.use("/api/v1/", chat);
app.use("/api/v1", gang);
app.use("/api/v1", usergang);
app.use("/api/v1/", review);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
  });
}

//DB_LOCAL_URI=mongodb+srv://pradeep:qJzT-aKB649Pn_.@narikootam.j9cqh4k.mongodb.net/Narikootam?retryWrites=true&w=majority

// DB_LOCAL_URI=mongodb://127.0.0.1:27017/Narikootam

app.use(errorMidleware);

module.exports = app;
