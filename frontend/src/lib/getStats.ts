const getStats = (data: any) => {
  const incomeTotal = data
    ?.filter((item: any) => item.type === "Income")
    .reduce((acc: any, cur: any) => acc + cur.amount, 0);

  const expenseTotal = data
    ?.filter((item: any) => item.type === "Expense")
    .reduce((acc: any, cur: any) => acc + cur.amount, 0);

  const totalBalance = incomeTotal - expenseTotal;

  return { incomeTotal, expenseTotal, totalBalance };
};

export default getStats;
