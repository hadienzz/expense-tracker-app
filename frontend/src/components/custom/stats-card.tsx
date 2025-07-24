import { ArrowDown, ArrowUp, DollarSign, Wallet } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const StatsCard = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle>Total Balance</CardTitle>
          <Wallet className="text-neutral-400 w-4 h-4" />
        </CardHeader>
        <CardContent>
          <h1 className="text-2xl font-bold">$12,546.00</h1>
          <p className="text-neutral-500 text-sm">+2.5% from last month</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex items-center justify-between">
          <CardTitle>Income</CardTitle>
          <ArrowUp className="w-4 h-4" />
        </CardHeader>
        <CardContent>
          <h1 className="text-2xl font-bold">$12,546.00</h1>
          <p className="text-neutral-500 text-sm">+2.5% from last month</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex items-center justify-between">
          <CardTitle>Total Balance</CardTitle>
          <ArrowDown className="w-4 h-4" />
        </CardHeader>
        <CardContent>
          <h1 className="text-2xl font-bold">$12,546.00</h1>
          <p className="text-neutral-500 text-sm">+2.5% from last month</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex items-center justify-between">
          <CardTitle>Total Balance</CardTitle>
          <DollarSign className="w-4 h-4" />
        </CardHeader>
        <CardContent>
          <h1 className="text-2xl font-bold">$12,546.00</h1>
          <p className="text-neutral-500 text-sm">+2.5% from last month</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatsCard;
