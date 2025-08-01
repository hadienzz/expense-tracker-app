"use client";

import AnalyticsLayout from "@/components/layouts/analytics-layout";
import ExpenseAnalytics from "@/components/custom/expense/expense-analytics";
import IncomeAnalytics from "@/components/custom/analytics/income-analytics";
import useGetBudgetSummary from "@/hooks/useGetBudgetSummary";
import { TrendingUp } from "lucide-react";

const AnalyticPage = () => {
  const { data, isLoading } = useGetBudgetSummary();
  return (
    <AnalyticsLayout
      icon={<TrendingUp className="text-blue-600 w-8 h-8" />}
      title={"Analytics Dashboard"}
    >
      <div className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-8 space-y-6">
          <ExpenseAnalytics data={data} isLoading={isLoading} />
        </div>
        <div className="lg:col-span-4 ">
          <IncomeAnalytics data={data} isLoading={isLoading} />
        </div>
      </div>
    </AnalyticsLayout>
  );
};

export default AnalyticPage;
