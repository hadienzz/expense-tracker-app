"use client";

import useGetBudget from "@/hooks/useGetBudget";
import { Button } from "../../ui/button";
import { Card, CardContent, CardHeader } from "../../ui/card";
import BudgetProgressItem from "./budget-progress-item";
import DialogBudgeting from "../shared/dialog-budgeting";

const BudgetProgress = () => {
  const { data, isLoading } = useGetBudget();
  return (
    <Card className="">
      <CardHeader className="text-center">
        <h1 className="text-2xl font-semibold">Budget Progress</h1>
        <p className="text-neutral-500">Track your spending limits</p>
      </CardHeader>
      <CardContent className="grid gap-2">
        <DialogBudgeting>
          <Button>+ Add Budget</Button>
        </DialogBudgeting>
        {!isLoading && data?.length === 0 && (
          <h1 className="text-lg text-center text-neutral-500">
            Set Your Budget Now!
          </h1>
        )}
        {isLoading && <p>Loading...</p>}
        {!isLoading &&
          Array.isArray(data) &&
          data.map((item: any, idx: number) => (
            <BudgetProgressItem {...item} key={idx} />
          ))}
      </CardContent>
    </Card>
  );
};

export default BudgetProgress;
