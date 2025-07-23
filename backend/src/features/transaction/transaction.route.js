require("dotenv").config();

const express = require("express");
const { createTransaction, getTransaction } = require("./transaction.controller");
const router = express.Router();

router.post("/", createTransaction);
router.get("/", getTransaction);

module.exports = router;
