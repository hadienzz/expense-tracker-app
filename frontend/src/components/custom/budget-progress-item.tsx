import { Progress } from "../ui/progress";

interface BudgetProgressItemProps {
  id: number;
  category: string;
  limit: string;
}

const BudgetProgressItem = ({
  id,
  category,
  limit,
}: BudgetProgressItemProps) => {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="font-semibold">{category}</h1>
        <p className="text-neutral-600">$450 / ${limit}</p>
      </div>
      <div className="my-1">
        <Progress value={75} />
      </div>
      <div className="flex justify-between text-neutral-600">
        <h1 className="text-xs ">75% used</h1>
        <p className="text-xs ">$20% remaining</p>
      </div>
    </div>
  );
};

export default BudgetProgressItem;
