import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign } from "lucide-react";
import { BudgetManagementProps } from "./budget-management";
import { formatPrice } from "@/lib/formatValue";

const BudgetStats = ({ data, isLoading }: BudgetManagementProps) => {
  const totalBudget = data?.reduce?.((acc, cur) => acc + cur.limit, 0) ?? 0;
  const totalSpent = data?.reduce?.((acc, cur) => acc + cur.used, 0) ?? 0;
  const remainingBudget = totalBudget - totalSpent;

  return (
    <div className="grid lg:grid-cols-3 gap-4">
      <Card>
        <CardHeader className="flex justify-between items-center">
          <CardTitle className="text-neutral-600">Total Budget</CardTitle>
          <div className="bg-blue-100 rounded-md h-8 w-8 flex items-center justify-center">
            <DollarSign className="text-blue-900 text-base h-4 w-4" />
          </div>
        </CardHeader>
        <CardContent>
          <h1 className="text-slate-900 text-2xl font-semibold">
            Rp. {formatPrice(totalBudget)}
          </h1>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex justify-between items-center">
          <CardTitle className="text-neutral-600">Total Spent</CardTitle>
          <div className="bg-blue-100 rounded-md h-8 w-8 flex items-center justify-center">
            <DollarSign className="text-blue-900 text-base h-4 w-4" />
          </div>
        </CardHeader>
        <CardContent>
          <h1 className="text-slate-900 text-2xl font-semibold">
            Rp. {formatPrice(totalSpent)}
          </h1>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex justify-between items-center">
          <CardTitle className="text-neutral-600">Remaining Budget</CardTitle>
          <div className="bg-blue-100 rounded-md h-8 w-8 flex items-center justify-center">
            <DollarSign className="text-blue-900 text-base h-4 w-4" />
          </div>
        </CardHeader>
        <CardContent>
          <h1 className="text-slate-900 text-2xl font-semibold">
            Rp. {formatPrice(remainingBudget)}
          </h1>
        </CardContent>
      </Card>
    </div>
  );
};

export default BudgetStats;
