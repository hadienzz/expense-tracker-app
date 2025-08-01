import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import BudgetStats from "./budget-stats";

const BudgetManagement = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-slate-900">
          Budget Management
        </CardTitle>
        <CardDescription className="text-neutral-600">
          Atur pengeluaran anda sesuai kebutuhan!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <BudgetStats />
      </CardContent>
    </Card>
  );
};

export default BudgetManagement;
