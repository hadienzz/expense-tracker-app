require("dotenv").config();

const authMiddleware = require("../../middleware/authMiddleware");
const express = require("express");
const {
  createTransaction,
  getTransaction,
  deleteTransaction,
  getSummaryTransaction,
} = require("./transaction.controller");
const router = express.Router();

router.post("/", authMiddleware, createTransaction);
router.get("/", authMiddleware, getTransaction);
router.delete("/:id", authMiddleware, deleteTransaction);
router.get("/summary", authMiddleware, getSummaryTransaction);

module.exports = router;
