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

  const updateBudget = await prisma.budget.updateMany({
    where: {
      user_id,
      category: submitData.category,
    },
    data: {
      lastTransactionAt: new Date(),
    },
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
  const transactionSummary = transaction.map((item) => ({
    category: item.category,
    total: item._sum.amount || 0,
  }));

  const income = await prisma.transaction.groupBy({
    by: ["category"],
    where: {
      user_id,
      type: "Income",
    },
    _sum: { amount: true },
  });

  const incomeSummary = income.map((item) => ({
    category: item.category,
    total: item._sum.amount || 0,
  }));

  return { transactionSummary, incomeSummary };
};

module.exports = {
  createTransactionService,
  getTransactionService,
  deleteTransactionService,
  getSummaryService,
};
