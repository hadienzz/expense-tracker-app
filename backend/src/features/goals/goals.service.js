const prisma = require("../../config/db");

const createGoalsService = async (body, user_id) => {
  const submittedData = { ...body, user_id };

  const result = await prisma.goals.create({
    data: {
      ...submittedData,
    },
  });
  return result;
};

const getGoalsService = async (user_id) => {
  const result = await prisma.goals.findMany({
    where: {
      user_id,
    },
  });
  const sanitized = result.map((item) => ({
    ...item,
    targetAmount: item?.targetAmount?.toString(),
    currentAmount: item?.currentAmount?.toString(),
  }));
  return sanitized;
};

const deleteGoalService = async (id) => {
  const result = await prisma.goals.delete({
    where: {
      id: Number(id),
    },
  });
  return result;
};

module.exports = { createGoalsService, getGoalsService, deleteGoalService };
