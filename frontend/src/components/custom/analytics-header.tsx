import { TrendingUp } from "lucide-react";
import DashboardLayout from "../layouts/dashboard-layout";

const AnalyticsHeader = () => {
  return (
    <div className="flex items-center gap-2 border-b bg-card w-full px-6">
      <TrendingUp className="text-blue-600 w-8 h-8" />
      <h1 className="text-xl text-slate-900 font-bold">Analytics Dashboard</h1>
    </div>
  );
};

export default AnalyticsHeader;
