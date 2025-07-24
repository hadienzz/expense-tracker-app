import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import { Filter, Search } from "lucide-react";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectContent,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const TransactionList = () => {
  return (
    <Card>
      <CardHeader className="lg:flex flex-row items-center justify-between">
        <div className="grid gap-2">
          <CardTitle className="text-2xl">Recent Transactions</CardTitle>
          <CardDescription>You have 12 transactions this month</CardDescription>
        </div>
        <div className="flex items-center">
          <Button variant={"outline"}>
            <Filter />
            <h1>Filter</h1>
          </Button>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Transactions</SelectItem>
              <SelectItem value="income">Income</SelectItem>
              <SelectItem value="expense">Expense</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div>
          <div className="relative flex items-center">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search transactions..."
              className="w-full bg-background pl-8"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionList;
