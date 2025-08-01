import { TrendingUp } from "lucide-react";
import DashboardLayout from "../../layouts/dashboard-layout";
import React, { JSX } from "react";

interface AnalyticHeaderProps {
  title: string;
  icon: JSX.Element;
}

const AnalyticsHeader = ({ title, icon }: AnalyticHeaderProps) => {
  return (
    <div className="flex items-center gap-2 border-b bg-card w-full px-6">
      {icon}
      <h1 className="text-xl text-slate-900 font-bold">{title}</h1>
    </div>
  );
};

export default AnalyticsHeader;
