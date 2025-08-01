import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign } from "lucide-react";

const BudgetStats = () => {
  return (
    <div className="grid grid-cols-3">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <CardTitle>Total Budget</CardTitle>
            <div className="bg-blue-100 rounded-md h-8 w-8 flex items-center justify-center">
              <DollarSign className="text-blue-900 text-base h-4 w-4" />
            </div>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};

export default BudgetStats;
