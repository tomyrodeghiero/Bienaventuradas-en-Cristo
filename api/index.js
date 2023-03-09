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

mongoose.connect(
  "mongodb+srv://blog:blog-rest-api@cluster0.xih2rrz.mongodb.net/?retryWrites=true&w=majority"
);

app.get("/api/test", async (req, res) => {
  mongoose.connect(
    "mongodb+srv://blog:blog-rest-api@cluster0.xih2rrz.mongodb.net/?retryWrites=true&w=majority"
  );
  res.json(await Post.find());
});

// app.post("/register", async (req, res) => {
//   const { username, password } = req.body;
//   try {
//     const userDoc = await UserModel.create({
//       username,
//       password: bcrypt.hashSync(password, salt),
//     });
//     res.json(userDoc);
//   } catch (e) {
//     console.log(e);
//     res.status(400).json(e);
//   }
// });

// app.post("/login", async (req, res) => {
//   const { username, password } = req.body;
//   const userDoc = await User.findOne({ username: username });

//   if (userDoc && userDoc.password) {
//     const passOk = bcrypt.compareSync(password, userDoc.password);
//     if (passOk) {
//       // logged in
//       jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
//         if (err) throw err;
//         res.cookie("token", token).json({
//           id: userDoc._id,
//           username,
//         });
//       });
//     }
//   } else {
//     res.status(400).json("wrong credentials");
//   }
// });

// app.get("/profile", (req, res) => {
//   const token = req.cookies.token;

//   if (!token) {
//     return res.status(401).json({ message: "No token provided" });
//   }

//   jwt.verify(token, secret, {}, (err, info) => {
//     if (err) throw err;
//     res.json(info);
//   });
// });

// app.post("/logout", (req, res) => {
//   res.cookie("token", "").json("okay");
// });

// app.get("/post", async (req, res) => {
//   res.json(
//     await Post.find()
//       .populate("author", ["username"])
//       .sort({ createdAt: -1 })
//       .limit(20)
//   );
// });

// app.get("/post/:id", async (req, res) => {
//   const { id } = req.params;
//   const postDoc = await Post.findById(id).populate("author", ["username"]);
//   res.json(postDoc);
// });

app.listen(4000);
