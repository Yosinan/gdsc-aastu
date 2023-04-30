const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const color = require("colors");



// const userSchema = mongoose.Schema({
//   username: {
//     type: String,
//     required: true,
//     uniqure: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//     match: [
//       /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
//       "Please enter a valid email address",
//     ],
//   },
//   password: {
//     type: String,
//     required: true,
//   },
// });

// const User = mongoose.model("User", userSchema);


const hasher = async (req, res, next) => {
  const { password } = req.body;

  if (!password) {
    return res.status(400).send("Missing password key");
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    req.body.password = hash;
    next();
  } catch (err) {
    next(err.message);
  }
};


const verifyToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: "Missing authorization header" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = await jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid token" });
  }
};

require("dotenv").config();

const connectDB = async () => {
  const connect = await mongoose.connect(process.env.DB_URI, {
    useUnifiedTopology: true,
  });
  console.log(
    `MongoDB connected at: mongodb://${connect.connection.host}/${connect.connection.name}`
      .yellow.bold.italic
  );
};
connectDB();

const app = express();
app.use(express.json());
app.use(express.static("static"));

app.post("/signup", hasher, async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email) {
    return res.status(400).send("Missing signup info(username, email)");
  } else {
    const newUser = User({ email, username, password });
    console.log(newUser);
    const saved = await newUser.save();
    res.status(201).json(saved);
  }
});

app.post("/login", async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send("Missing Email or Password");
  }

  const user = await User.findOne({ email });
  const isMatch = await bcrypt.compare(password, user.password);
  if (isMatch) {
    const token = jwt.sign({ email }, process.env.JWT_SECRET_KEY, {
      expiresIn: "2m",
    });

    return res.status(200).json({ token });
  } else {
    return res.status(401).json({ error: "Incorrect password" });
  }
});

app.get("/protected", verifyToken, (req, res) => {
  return res.status(200).json({ msg: "Access granted" });
});
module.exports = app;
