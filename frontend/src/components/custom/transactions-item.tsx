import { ArrowDown, ArrowUp, MoreHorizontal } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { formatPrice } from "@/lib/formatValue";

interface transactionItemProps {
  title: string;
  amount: string;
  createdAt: string;
  type: string;
  date: string;
  id: number;
  handleDelete: (id: number) => void;
}

const TransactionItem = ({
  title,
  amount,
  createdAt,
  type,
  date,
  id,
  handleDelete,
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
          <h1 className="font-medium md:text-lg text-sm line-clamp-1">
            {title}
          </h1>
          <p className="text-neutral-600 text-xs md:text-base">{date}</p>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <Badge
          variant={"outline"}
          className="bg-background rounded-xl text-xs md:text-base"
        >
          {type}
        </Badge>
        <div
          className={`text-xs md:text-base ${
            type === "Income" ? "text-emerald-600" : "text-rose-600"
          }`}
        >
          {/* {formatprice} */}
          Rp. {formatPrice(Number(amount))}
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <MoreHorizontal />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>View Detail</DropdownMenuItem>
            <DropdownMenuItem
              className="text-red-600"
              onClick={() => handleDelete(id)}
            >
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default TransactionItem;
