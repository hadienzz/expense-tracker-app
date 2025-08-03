const {
  createBudgetingService,
  getBudgetingService,
  deleteBudgetService,
  editBudgetService,
} = require("./budgeting.service");

const createBudgeting = (req, res) => {
  const { category, limit, threshold } = req.body;
  const { user_id } = req.user;
  try {
    const result = createBudgetingService(category, limit, threshold, user_id);

    return res.status(201).json({ message: "Berhasil membuat budget" });
  } catch (err) {
    console.error(err);
    return res.status(400).json({ message: "Gagal membuat budget" });
  }
};

const getBudgeting = async (req, res) => {
  const { user_id } = req.user;

  try {
    const result = await getBudgetingService(user_id);

    return res.status(200).json(result);
  } catch (err) {
    console.error(err);
    return res.status(400).json({ message: "Gagal mencari budget" });
  }
};

const deleteBudget = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await deleteBudgetService(id);
    return res.status(200).json({ message: "Berhasil menghapus budget" });
  } catch (err) {
    console.error(err);
    return res.status(400).json({ message: "Gagal menghapus budget" });
  }
};

const editBudget = async (req, res) => {
  const { id } = req.params;
  const { limit, threshold } = req.body;
  try {
    const result = await editBudgetService(id, limit, threshold);
    return res.status(204).json({ Message: "Update success" });
  } catch (err) {
    console.error(err);
    return res.status(400).json({ message: "Gagal mengupdate budget" });
  }
};

module.exports = {
  createBudgeting,
  getBudgeting,
  deleteBudget,
  editBudget,
};
