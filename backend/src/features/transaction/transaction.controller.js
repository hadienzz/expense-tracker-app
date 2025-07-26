const {
  createTransactionService,
  getTransactionService,
} = require("./transaction.service");

const createTransaction = async (req, res) => {
  const data = req.body;
  try {
    const result = await createTransactionService(data);
    return res.status(200).json({ message: `Transaksi Baru barhasil dibuat` });
  } catch (err) {
    console.error(err)
    return res.status(400).json({ message: "Internal server error" });
  }
};

const getTransaction = async (req, res) => {
  try {
    const { userId } = req.body;
    const result = await getTransactionService(userId);
    return res.status(200).json({ result });
  } catch (err) {
    console.error(err);
    return res.status(400).json({ message: "Internal server Error" });
  }
};

module.exports = { createTransaction, getTransaction };
