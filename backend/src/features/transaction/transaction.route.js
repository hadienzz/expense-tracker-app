require("dotenv").config();

const authMiddleware = require("../../middleware/authMiddleware");
const express = require("express");
const {
  createTransaction,
  getTransaction,
  deleteTransaction,
} = require("./transaction.controller");
const router = express.Router();

router.post("/", authMiddleware, createTransaction);
router.get("/", authMiddleware, getTransaction);
router.delete("/:id", authMiddleware, deleteTransaction);

module.exports = router;
