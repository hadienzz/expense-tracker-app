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
import TransactionItem from "./transactions-item";
import { TRANSACTION_ITEM } from "../../../contents/contents_data";

const TransactionList = () => {
  return (
    <Card>
      <CardHeader className="lg:flex flex-row items-center justify-between">
        <div className="grid gap-2">
          <CardTitle className="text-xl md:text-2xl">Recent Transactions</CardTitle>
          <CardDescription className="text-sm md:text-base">You have 12 transactions this month</CardDescription>
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
        <div className="mt-4 flex flex-col gap-4">
          {TRANSACTION_ITEM.map((item,idx) => (
            <TransactionItem {...item} key={idx} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionList;
