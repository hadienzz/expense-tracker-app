require("dotenv").config();
const express = require("express");
const { createUser, loginUser } = require("./user.controller");
const router = express.Router();

router.post("/signin", loginUser);
router.post("/signup", createUser);

module.exports = router;
