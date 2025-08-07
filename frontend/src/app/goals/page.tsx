"use client";

import GoalsManagement from "@/components/custom/goals/goals-management";
import StatsCardGoals from "@/components/custom/goals/stats-card-goals";
import AnalyticsLayout from "@/components/layouts/analytics-layout";
import useGetGoals from "@/hooks/useGetGoals";
import { Target } from "lucide-react";

const GoalPage = () => {
  const { data, isLoading } = useGetGoals();
  return (
    <AnalyticsLayout
      icon={<Target className="text-purple-500" />}
      title="Financial Goals"
    >
      <div className="grid grid-cols-12 ">
        <div className="col-span-12">
          <StatsCardGoals data={data ?? []} isLoading={isLoading} />
        </div>
        <div className="lg:col-span-8 col-span-12 mt-6">
          <GoalsManagement data={data ?? []} isLoading={isLoading} />
        </div>
      </div>
    </AnalyticsLayout>
  );
};

export default GoalPage;
