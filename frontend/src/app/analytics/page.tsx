import AnalyticsHeader from "@/components/custom/analytics-header";
import AnalyticsLayout from "@/components/custom/analytics-layout";
import ExpenseAnalytics from "@/components/custom/expense-analytics";
import Sidebar from "@/components/custom/sidebar";
import DashboardLayout from "@/components/layouts/dashboard-layout";

const AnalyticPage = () => {
  return (
    <AnalyticsLayout>
      <div className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-8 space-y-6">
          <ExpenseAnalytics />
        </div>
      </div>
    </AnalyticsLayout>
  );
};

export default AnalyticPage;
