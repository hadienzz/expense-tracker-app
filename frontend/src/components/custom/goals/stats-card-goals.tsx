import { DollarSign, Target, TrendingUp } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { formatPrice } from "@/lib/formatValue";
import { dataItem } from "./goals-management";

interface StatsCardGoalsProps {
  data: dataItem[];
  isLoading: boolean;
}

const StatsCardGoals = ({ data, isLoading }: StatsCardGoalsProps) => {
  const safeData = Array.isArray(data) ? data : [];
  const totalGoalsValue = safeData?.reduce(
    (acc, goal) => acc + Number(goal.targetAmount),
    0
  );

  const totalSaved = safeData?.reduce(
    (acc, goal) => acc + Number(goal.currentAmount),
    0
  );

  return (
    <div className="grid lg:grid-cols-3 gap-4">
      <Card>
        <CardHeader className="flex justify-between items-center">
          <CardTitle className="text-neutral-600">Total Goals Value</CardTitle>
          <div className="bg-blue-100 rounded-md h-8 w-8 flex items-center justify-center">
            <DollarSign className="text-blue-900 text-base h-4 w-4" />
          </div>
        </CardHeader>
        <CardContent>
          <h1 className="text-slate-900 text-2xl font-semibold">
            Rp. {formatPrice(totalGoalsValue)}
          </h1>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex justify-between items-center">
          <CardTitle className="text-neutral-600">Total Saved</CardTitle>
          <div className="bg-green-100 rounded-md h-8 w-8 flex items-center justify-center">
            <TrendingUp className="text-green-900 text-base h-4 w-4" />
          </div>
        </CardHeader>
        <CardContent>
          <h1 className="text-slate-900 text-2xl font-semibold">
            Rp. {formatPrice(totalSaved)}
          </h1>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex justify-between items-center">
          <CardTitle className="text-neutral-600">Active Goals</CardTitle>
          <div className="bg-purple-100 rounded-md h-8 w-8 flex items-center justify-center">
            <Target className="text-purple-900 text-base h-4 w-4" />
          </div>
        </CardHeader>
        <CardContent>
          <h1 className="text-slate-900 text-2xl font-semibold">
            {safeData?.length}
          </h1>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatsCardGoals;
