"use client";

import DashboardLayout from "@/components/layouts/dashboard-layout";
import StatsCard from "@/components/custom/expense/stats-card";
import TransactionList from "@/components/custom/expense/transaction-list";
import BudgetProgress from "@/components/custom/budget/budget-progress";
import useGetTransaction from "@/hooks/useGetTransaction";

const App = () => {
  const { data, isLoading } = useGetTransaction();
  return (
    <DashboardLayout>
      <div className="grid gap-6">
        <StatsCard data={data} isLoading={isLoading} />
      </div>
      <div className="grid grid-cols-3 mt-6 gap-4">
        <div className="col-span-3 lg:col-span-2">
          <TransactionList data={data} isLoading={isLoading} />
        </div>
        <div className="col-span-3 lg:col-span-1">
          <BudgetProgress />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default App;
