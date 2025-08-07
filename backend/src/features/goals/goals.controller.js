const {
  createGoalsService,
  getGoalsService,
  deleteGoalService,
} = require("./goals.service");

const createGoals = (req, res) => {
  const body = req.body;
  const { user_id } = req.user;
  try {
    const result = createGoalsService(body, user_id);
    return res.status(201).json({ message: "Berhasil membuat target baru" });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Gagal membuat target" });
  }
};

const getGoals = async (req, res) => {
  const { user_id } = req.user;
  try {
    const result = await getGoalsService(user_id);
    return res.status(200).json(result);
  } catch (err) {
    console.error(err);
    return res.status(400).json({ message: "Gagal membuat target baru" });
  }
};

const deleteGoals = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await deleteGoalService(id);
    return res.status(200).json({ message: "Berhasil menghapus target" });
  } catch (err) {
    console.error(err);
    return res.status(400).json({ message: "Gagal menghapus target" });
  }
};

module.exports = { createGoals, getGoals, deleteGoals };
