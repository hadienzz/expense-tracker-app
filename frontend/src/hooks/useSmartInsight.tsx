"use client";

import getStats from "@/lib/getStats";
import useGetTransaction from "./useGetTransaction";

const useSmartInsight = () => {
  const { data, isLoading } = useGetTransaction();
  const { expenseTotal, incomeTotal, totalBalance } = getStats(data);

  const percentageUsed = ((expenseTotal / incomeTotal) * 100).toFixed(1);
  console.log(percentageUsed);
  return [
    `Kamu menghabiskan total Rp${expenseTotal.toLocaleString()} bulan ini.`,
    `Kamu mendapatkan penghasilan sebesar Rp${incomeTotal.toLocaleString()}.`,
    `Kamu menggunakan ${percentageUsed}% dari pendapatanmu.`,
  ];
};

export default useSmartInsight;
