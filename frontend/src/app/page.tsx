import Header from "@/components/custom/header";
import DashboardLayout from "@/components/layouts/dashboard-layout";
import Sidebar from "@/components/custom/sidebar";
import StatsCard from "@/components/custom/stats-card";
import TransactionList from "@/components/custom/transaction-list";
import BudgetProgress from "@/components/custom/expense-chart";

const App = () => {
  return (
    <DashboardLayout>
      <div className="grid gap-6">
        <StatsCard />
      </div>
      <div className="grid grid-cols-3 mt-6 gap-4">
        <div className="col-span-3 lg:col-span-2">
          <TransactionList />
        </div>
        <div className="col-span-3 lg:col-span-1  ">
          <BudgetProgress />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default App;
