import BudgetManagement from "@/components/custom/budget/budget-management";
import AnalyticsLayout from "@/components/layouts/analytics-layout";
import { BookOpen } from "lucide-react";

const BudgetPage = () => {
  return (
    <AnalyticsLayout title={"Budget Management"} icon={<BookOpen />}>
      <div className="grid gap-6 lg:grid-cols-12">
        <div className="col-span-8">
          <BudgetManagement />
        </div>
      </div>
    </AnalyticsLayout>
  );
};

export default BudgetPage;
