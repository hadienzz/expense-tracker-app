require("dotenv").config();
const express = require("express");
const { createUser, getUser } = require("./user.controller");
const router = express.Router();

router.get("/", getUser);
router.post("/", createUser);

module.exports = router;
