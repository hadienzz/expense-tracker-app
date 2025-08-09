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

const addProgressGoalsService = async (id, addProgress) => {
  const goalId = Number(id);

  const selectedGoal = await prisma.goals.findUnique({
    where: {
      id: goalId,
    },
    select: { currentAmount: true, lastAddAt: true },
  });

  if (!selectedGoal) {
    throw new Error("Goal not found");
  }
  const updatedCurrentAmount = Number(selectedGoal.currentAmount) + addProgress;
  const result = await prisma.goals.update({
    where: { id: goalId },
    data: { currentAmount: updatedCurrentAmount, lastAddAt: new Date() },
  });
  return result;
};

module.exports = {
  createGoalsService,
  getGoalsService,
  deleteGoalService,
  addProgressGoalsService,
};
