import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { MoreHorizontal } from "lucide-react";
import { dataItem } from "./goals-management";
import { formatPrice } from "@/lib/formatValue";
import { Card } from "@/components/ui/card";
import { calculateProgress } from "@/lib/calculateProgress";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import useDeleteGoals from "@/hooks/useDeleteGoals";

const GoalItem = ({
  id,
  currentAmount,
  priorityLevel,
  targetAmount,
  targetDate,
  title,
  type,
  description,
}: dataItem) => {
  const progress = calculateProgress(currentAmount, targetAmount);
  const remainingAmount = targetAmount - currentAmount;
  const { handleDelete } = useDeleteGoals();
  const icons: Record<string, string> = {
    Desire: "🛍️",
    Travel: "✈️",
    Savings: "💰",
    Emergency: "🛡️",
    Education: "🎓",
    Investment: "📈 ",
    Other: "📦",
  };

  return (
    <Card className=" px-4 mt-4">
      <div className="flex items-start">
        <div className="mr-4 mt-1">{icons[type]}</div>

        <div className="flex-1">
          <div className="flex justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-slate-900 lg:text-lg text-sm font-semibold line-clamp-2">
                {title}
              </h1>
              <Badge className="bg-green-100 text-xs lg:text-base text-green-800">
                Active
              </Badge>
              <Badge className="bg-red-100 text-xs lg:text-base text-red-800">
                {priorityLevel}
              </Badge>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <MoreHorizontal />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleDelete(id)}
                  className="text-red-600"
                >
                  Delete
                </DropdownMenuItem>
                <DropdownMenuItem>Tambah Progress</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div>
            <h1 className=" text-neutral-600 max-w-[520px] py-1 text-xs lg:text-base">
              {description}
            </h1>
          </div>

          <div className="flex gap-3 text-xs lg:text-sm">
            <p>{type}</p>
            <p>Rp. {formatPrice(Number(targetAmount))}</p>
          </div>
        </div>
      </div>

      <div className="pt-3 text-xs lg:text-sm text-neutral-600 ">
        <div className="flex justify-between">
          <p className="">
            Rp. {formatPrice(Number(currentAmount))} dari{" "}
            {formatPrice(Number(targetAmount))}
          </p>
          <p className="">{progress.toFixed(2)}%</p>
        </div>
        <div className="text-center">
          <Progress value={Number(progress)} className="h-3 my-2" />
        </div>
        <div className="flex justify-between">
          <p>Rp. {formatPrice(remainingAmount)} tersisa</p>
          <p>On Track</p>
        </div>
      </div>
    </Card>
  );
};

export default GoalItem;
