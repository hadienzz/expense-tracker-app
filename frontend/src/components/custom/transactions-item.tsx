import { ArrowDown, ArrowUp } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";

interface transactionItemProps {
  title: string;
  amount: string;
  createdAt: string;
  type: string;
}

const TransactionItem = ({
  title,
  amount,
  createdAt,
  type,
}: transactionItemProps) => {
  return (
    <div className="flex items-center justify-between bg-background border rounded-lg p-3">
      <div className={`flex items-center gap-4`}>
        <div
          className={`${
            type === "Income" ? "bg-emerald-100" : "bg-rose-100"
          } rounded-full p-1 md:p-2`}
        >
          {type === "Income" ? (
            <ArrowUp className="text-emerald-600 h-4 w-4 md:h-5 md:w-5" />
          ) : (
            <ArrowDown className="text-rose-600 h-4 w-4 md:h-5 md:w-5" />
          )}
        </div>
        <div>
          <h1 className="font-medium md:text-lg text-sm line-clamp-1">{title}</h1>
          <p className="text-neutral-600 text-xs md:text-base">{createdAt}</p>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <Badge variant={"outline"} className="bg-background rounded-xl text-xs md:text-base">
          {type}
        </Badge>
        <div className="text-xs md:text-base">${amount}</div>
        {/* <div>SETTING</div> */}
      </div>
    </div>
  );
};

export default TransactionItem;
