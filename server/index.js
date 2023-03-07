const express = require("express");
const cors = require("cors");
const { default: mongoose, Schema } = require("mongoose");
mongoose.set("strictQuery", false);
const UserModel = require("./models/User");
const User = require("./models/User");
const Post = require("./models/Post");
const bcrypt = require("bcryptjs");
const app = express();
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
// const multer = require("multer");
// const uploadMiddleware = multer({ dest: "uploads/" });
const fs = require("fs");

const salt = bcrypt.genSaltSync(10);
const secret = "qiweoqwjoe123";

app.use(
  cors({
    credentials: true,
    origin: [
      "http://localhost:3000",
      "http://localhost:4173",
      "http://localhost:5173",
      "https://blog-v1-digf.onrender.com",
      "https://bienaventuradas-en-cristo.vercel.app",
      "https://blog-frontend-v2.onrender.com",
      "https://bienaventuradas-en-cristo-rest-api.vercel.app",
      "https://blog-project-red-seven.vercel.app",
    ],
  })
);
app.use(express.json());
app.use(cookieParser());
app.use("/api/uploads", express.static(__dirname + "/uploads"));

mongoose.connect(
  "mongodb+srv://blog:blog-rest-api@cluster0.xih2rrz.mongodb.net/?retryWrites=true&w=majority"
);

app.get("/post", async (req, res) => {
  res.json(
    await Post.find()
      .populate("author", ["username"])
      .sort({ createdAt: -1 })
      .limit(20)
  );
});

app.get("/post/:id", async (req, res) => {
  const { id } = req.params;
  const postDoc = await Post.findById(id).populate("author", ["username"]);
  res.json(postDoc);
});

app.listen(4000);
