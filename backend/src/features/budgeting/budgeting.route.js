require("dotenv").config();

const authMiddleware = require("../../middleware/authMiddleware");
const express = require("express");
const {
  createBudgeting,
  getBudgeting,
  deleteBudget,
  editBudget,
} = require("./budgeting.controller");
const router = express.Router();

router.post("/", authMiddleware, createBudgeting);
router.get("/", authMiddleware, getBudgeting);
router.delete("/:id", authMiddleware, deleteBudget);
router.patch("/:id", authMiddleware, editBudget);
module.exports = router;
