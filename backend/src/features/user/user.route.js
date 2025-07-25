require("dotenv").config();
const express = require("express");
const { createUser, loginUser } = require("./user.controller");
const router = express.Router();

router.post("/", loginUser);
router.post("/", createUser);

module.exports = router;
