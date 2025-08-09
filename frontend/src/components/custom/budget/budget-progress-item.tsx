import { Activity, TriangleAlert } from "lucide-react";
import { Progress } from "../../ui/progress";
import { formatPrice } from "@/lib/formatValue";

interface BudgetProgressItemProps {
  category: string;
  limit: string;
  over: boolean;
  progress: number;
  used: number;
}

const BudgetProgressItem = ({
  category,
  limit,
  over,
  progress,
  used,
}: BudgetProgressItemProps) => {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="font-semibold">{category}</h1>
        <p className="text-neutral-600">
          Rp. {formatPrice(used)} / Rp. {formatPrice(Number(limit))}
        </p>
      </div>
      <div className="my-2">
        <Progress value={progress} />
      </div>
      <div className="flex justify-between items-center text-neutral-600">
        <h1 className="text-xs ">{progress}% used</h1>
        {over ? (
          <TriangleAlert className={"text-red-600"} />
        ) : (
          <Activity className="text-green-600" />
        )}
      </div>
    </div>
  );
};

export default BudgetProgressItem;
