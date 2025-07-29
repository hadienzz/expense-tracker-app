"use client";

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
import useGetTransaction from "@/hooks/useGetTransaction";
import useDelete from "@/hooks/useDelete";

const TransactionList = () => {
  const { data, isLoading } = useGetTransaction();
  const { handleDelete } = useDelete();

  return (
    <Card>
      <CardHeader className="lg:flex flex-row items-center justify-between">
        <div className="grid gap-2">
          <CardTitle className="text-xl md:text-2xl">
            Recent Transactions
          </CardTitle>
          <CardDescription className="text-sm md:text-base">
            You have {data?.length} transactions this month
          </CardDescription>
        </div>
        <div className="flex items-center text-sm md:text-base">
          <Button variant={"outline"}>
            <Filter />
            <h1 className="">Filter</h1>
          </Button>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent className="">
              <SelectItem value="all">All Transactions</SelectItem>
              <SelectItem value="Income">Income</SelectItem>
              <SelectItem value="Expense">Expense</SelectItem>
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
              className="w-full bg-background pl-8 text-sm md:text-base"
            />
          </div>
        </div>
        <div className="mt-4 flex flex-col-reverse gap-4">
          {isLoading!! && <h1>Fetching data...</h1>}
          {!isLoading!! &&
            data.map((item: any) => (
              <TransactionItem
                {...item}
                key={item.id}
                handleDelete={handleDelete}
              />
            ))}
          {!isLoading!! && data.length === 0 && (
            <div>
              <h1 className="text-center text-neutral-400">
                Kamu belum membuat transaksi
              </h1>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionList;
