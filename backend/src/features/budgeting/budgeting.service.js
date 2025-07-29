const prisma = require("../../config/db");

const createBudgetingService = async (category, limit, user_id) => {
  const result = await prisma.budget.create({
    data: {
      category,
      limit,
      user_id,
    },
  });

  return result;
};

const getBudgetingService = async (user_id) => {
  const budgets = await prisma.budget.findMany({
    where: {
      user_id,
    },
  });

  const transaction = await prisma.transaction.groupBy({
    by: ["category"],
    where: {
      user_id,
      type: "Expense",
    },
    _sum: { amount: true },
  });

  const progress = budgets.map((budget) => {
    const matched = transaction.find((t) => t.category === budget.category);
    const used = matched?._sum?.amount ?? 0;
    return {
      id: budget.id,
      category: budget.category,
      budget: budget.limit,
      used,
      limit: budget.limit,
      over: used > budget.limit,
      progress: (used / budget.limit) * 100,
    };
  });
  return progress;
};

module.exports = { createBudgetingService, getBudgetingService };
