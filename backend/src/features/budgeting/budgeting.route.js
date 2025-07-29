require("dotenv").config();

const authMiddleware = require("../../middleware/authMiddleware");
const express = require("express");
const { createBudgeting, getBudgeting } = require("./budgeting.controller");
const router = express.Router();

router.post("/", authMiddleware, createBudgeting);
router.get("/", authMiddleware, getBudgeting);

module.exports = router;
