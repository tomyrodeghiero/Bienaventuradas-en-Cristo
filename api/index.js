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
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;
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
      "http://127.0.0.1:5173",
    ],
  })
);
app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static(__dirname + "/uploads"));

mongoose.connect(
  "mongodb+srv://blog:blog-rest-api@cluster0.xih2rrz.mongodb.net/?retryWrites=true&w=majority"
);

// GET
app.get("/api/post", async (req, res) => {
  res.json(await Post.find());
});

app.get("/api/post/:id", async (req, res) => {
  const { id } = req.params;
  const postDoc = await Post.findById(id).populate("author", ["username"]);
  res.json(postDoc);
});

app.get("/api/profile", (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  jwt.verify(token, secret, {}, (err, info) => {
    if (err) throw err;
    res.json(info);
  });
});

cloudinary.config({
  cloud_name: "deqspgsn4",
  api_key: "791472898121285",
  api_secret: "bylWI1EMDWHoEcBpwAi-OEIjQWg",
  secure: true,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "uploads",
    allowed_formats: ["jpg", "png", "jpeg", "gif"],
  },
});

const uploadMiddleware = multer({ storage });

app.post("/api/post", uploadMiddleware.single("file"), async (req, res) => {
  try {
    const { title, summary, content } = req.body;

    const result = await cloudinary.uploader.upload(req.file.path);

    const postDoc = await Post.create({
      title,
      summary,
      content,
      cover: result.secure_url,
      author: req.cookies.token
        ? jwt.verify(req.cookies.token, secret).id
        : undefined,
    });

    res.status(200).json(postDoc);
  } catch (error) {
    console.log("Error", error);

    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Invalid token" });
    }

    res.status(500).json({ message: "Server error" });
  }
});

app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.findOne({ username: username });

  if (userDoc && userDoc.password) {
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      // logged in
      jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
        if (err) throw err;
        res.cookie("token", token).json({
          id: userDoc._id,
          username,
        });
      });
    }
  } else {
    res.status(400).json("wrong credentials");
  }
});

app.post("/api/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await UserModel.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
});

app.post("/api/logout", (req, res) => {
  res.cookie("token", "").json("okay");
});

// Listen port
app.listen(4000);

// app.post("/post", uploadMiddleware.single("file"), async (req, res) => {
//   try {
//     const { originalname, path } = req.file;
//     const parts = originalname.split(".");
//     const ext = parts[parts.length - 1];
//     const newPath = path + "." + ext;
//     fs.renameSync(path, newPath);

//     const { token } = req.cookies;

//     if (!token) {
//       return res.status(401).json({ message: "No token provided" });
//     }

//     jwt.verify(token, secret, {}, async (err, info) => {
//       if (err) throw err;

//       const { title, summary, content } = req.body;
//       const postDoc = await Post.create({
//         title,
//         summary,
//         content,
//         cover: newPath,
//         author: info.id,
//       });
//       res.json(postDoc);
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// });

// app.put(
//   "/post",
//   (req, res, next) => {
//     const { token } = req.cookies;
//     if (!token) {
//       res.status(401).json({ message: "Unauthorized" });
//     } else {
//       next();
//     }
//   },
//   uploadMiddleware.single("file"),
//   async (req, res) => {
//     res.json(req.file);
//   }
// );

// app.get("/post", async (req, res) => {
//   res.json(
//     await Post.find()
//       .populate("author", ["username"])
//       .sort({ createdAt: -1 })
//       .limit(20)
//   );
// });
