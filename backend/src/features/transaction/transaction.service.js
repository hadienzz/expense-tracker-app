const prisma = require("../../config/db");

const createTransactionService = async (data, user_id) => {
  const submitData = {
    ...data,
    user_id,
    amount: parseFloat(data.amount),
    currency: "IDR",
  };
  const result = await prisma.transaction.create({
    data: submitData,
  });
  return result;
};

const getTransactionService = async (user_id) => {
  const result = await prisma.transaction.findMany({
    where: {
      user_id,
    },
  });
  return result;
};

const deleteTransactionService = async (id) => {
  const result = await prisma.transaction.delete({
    where: {
      id: parseFloat(id),
    },
  });
  return result;
};

const getSummaryService = async (user_id) => {
  const transaction = await prisma.transaction.groupBy({
    by: ["category"],
    where: {
      user_id,
      type: "Expense",
    },
    _sum: { amount: true },
  });
  const result = transaction.map((item) => ({
    category: item.category,
    total: item._sum.amount || 0,
  }));

  return result;
};

module.exports = {
  createTransactionService,
  getTransactionService,
  deleteTransactionService,
  getSummaryService,
};
