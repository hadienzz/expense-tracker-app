"use client";

import BudgetAnalytics from "@/components/custom/budget/budget-analytics";
import BudgetManagement from "@/components/custom/budget/budget-management";
import BudgetStats from "@/components/custom/budget/budget-stats";
import AnalyticsLayout from "@/components/layouts/analytics-layout";
import useGetBudget from "@/hooks/useGetBudget";
import { BookOpen } from "lucide-react";

const BudgetPage = () => {
  const { data, isLoading } = useGetBudget();
  return (
    <AnalyticsLayout title={"Budget Management"} icon={<BookOpen />}>
      <div className="grid gap-6 lg:grid-cols-12">
        <div className="col-span-12 ">
          <BudgetStats data={data ?? []} isLoading={isLoading} />
        </div>
        <div className="lg:col-span-8 col-span-12">
          <BudgetManagement data={data ?? []} isLoading={isLoading} />
        </div>
        <div className="lg:col-span-4">
          <BudgetAnalytics />
        </div>
      </div>
    </AnalyticsLayout>
  );
};

export default BudgetPage;
