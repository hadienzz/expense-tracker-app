const express = require("express");
const {
  createGoals,
  getGoals,
  deleteGoals,
  addProgressGoals,
} = require("./goals.controller");
const router = express.Router();
const authMiddleware = require("../../middleware/authMiddleware");

router.post("/", authMiddleware, createGoals);
router.get("/", authMiddleware, getGoals);
router.delete("/:id", authMiddleware, deleteGoals);
router.patch("/:id", authMiddleware, addProgressGoals);

module.exports = router;
