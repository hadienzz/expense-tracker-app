const {
  createTransactionService,
  getTransactionService,
  deleteTransactionService,
  getSummaryService,
} = require("./transaction.service");

const createTransaction = async (req, res) => {
  const data = req.body;
  const { user_id } = req.user;

  try {
    const result = await createTransactionService(data, user_id);
    return res.status(200).json({ message: `Transaksi Baru barhasil dibuat` });
  } catch (err) {
    console.error(err);
    return res.status(400).json({ message: "Gagal membuat transaksi" });
  }
};

const getTransaction = async (req, res) => {
  const { user_id } = req.user;
  try {
    const result = await getTransactionService(user_id);
    return res.status(200).json(result);
  } catch (err) {
    console.error(err);
    return res.status(400).json({ message: "Gagal mendapatkan transaksi" });
  }
};

const deleteTransaction = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await deleteTransactionService(id);
    return res
      .status(200)
      .json({ message: `Berhasil menghapus transaksi dengan id: ${id}` });
  } catch (err) {
    console.error(err);
    return res.status(400).json({ message: "Gagal menghapus transaksi" });
  }
};

const getSummaryTransaction = async (req, res) => {
  const { user_id } = req.user;
  try {
    const result = await getSummaryService(user_id);

    return res.status(200).json(result);
  } catch (err) {
    console.error(err);
    return res.status(400).json({ message: "Gagal mendapatkan summary" });
  }
};



module.exports = {
  createTransaction,
  getTransaction,
  deleteTransaction,
  getSummaryTransaction,
};
