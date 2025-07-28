require("dotenv").config();
const jwt = require("jsonwebtoken");

const setAuthCookie = (res, token) => {
  res.cookie("token", token, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
  });
};

const generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1d" });
};

module.exports = { setAuthCookie, generateToken };
