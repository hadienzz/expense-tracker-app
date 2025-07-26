const prisma = require("../../config/db");

const createTransactionService = async (data) => {
  // console.log(data);
  const submitData = {
    ...data,
    amount: parseFloat(data.amount),
    user_id: "apaajabebas",
    currency: "IDR",
  };
  const result = await prisma.transaction.create({
    data: submitData,
  });
  return result;
};

const getTransactionService = async (userId) => {
  const result = await prisma.transaction.findMany({
    where: {
      user_id: userId,
    },
  });
  return result;
};

module.exports = { createTransactionService, getTransactionService };
