"use client";

import AnalyticsLayout from "@/components/custom/analytics-layout";
import ExpenseAnalytics from "@/components/custom/expense-analytics";
import IncomeAnalytics from "@/components/custom/income-analytics";
import useGetBudgetSummary from "@/hooks/useGetBudgetSummary";

const AnalyticPage = () => {
  const { data, isLoading } = useGetBudgetSummary();
  return (
    <AnalyticsLayout>
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
