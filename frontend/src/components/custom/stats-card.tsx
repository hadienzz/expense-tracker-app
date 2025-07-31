import { ArrowDown, ArrowUp, DollarSign, Wallet } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { formatPrice } from "@/lib/formatValue";
import getStats from "@/lib/getStats";

interface Transaction {
  id: string;
  user_id: string;
  title: string;
  amount: number;
  type: "Income" | "Expense";
  currency: string;
  date: string;
  notes: string;
  category: string;
  createdAt: string;
}

interface StatsCardProps {
  data: Transaction[];
  isLoading: boolean;
}

// interface

const StatsCard = ({ data, isLoading }: StatsCardProps) => {
  const { incomeTotal, expenseTotal, totalBalance } = getStats(data);

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm md:text-base">Total Balance</CardTitle>
          <Wallet className="text-neutral-400 w-4 h-4" />
        </CardHeader>
        <CardContent>
          <h1 className="text-lg md:text-2xl font-bold ">
            Rp. {formatPrice(totalBalance)}
          </h1>
          <p className="text-neutral-500 text-xs md:text-sm">
            +2.5% from last month
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex items-center justify-between">
          <CardTitle className="text-sm md:text-base ">Income</CardTitle>
          <ArrowUp className="w-4 h-4" />
        </CardHeader>
        <CardContent>
          <h1 className="text-lg md:text-2xl font-bold text-emerald-600">
            Rp. {formatPrice(incomeTotal)}
          </h1>
          <p className="text-neutral-500 text-xs md:text-sm">
            +2.5% from last month
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex items-center justify-between">
          <CardTitle className="text-sm md:text-base">Expense</CardTitle>
          <ArrowDown className="w-4 h-4" />
        </CardHeader>
        <CardContent>
          <h1 className="text-lg md:text-2xl font-bold text-rose-600">
            Rp {formatPrice(expenseTotal)}
          </h1>
          <p className="text-neutral-500 text-xs md:text-sm">
            +2.5% from last month
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex items-center justify-between">
          <CardTitle className="text-sm md:text-base">Savings</CardTitle>
          <DollarSign className="w-4 h-4" />
        </CardHeader>
        <CardContent>
          <h1 className="text-lg md:text-2xl font-bold text-yellow-600">
            $12,546.00
          </h1>
          <p className="text-neutral-500 text-xs md:text-sm">
            +2.5% from last month
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatsCard;
