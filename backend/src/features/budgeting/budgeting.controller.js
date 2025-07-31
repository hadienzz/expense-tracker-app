const {
  createBudgetingService,
  getBudgetingService,
} = require("./budgeting.service");

const createBudgeting = (req, res) => {
  const { category, limit } = req.body;
  const { user_id } = req.user;
  try {
    const result = createBudgetingService(category, limit, user_id);

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

module.exports = {
  createBudgeting,
  getBudgeting,
};
