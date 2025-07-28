import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";
import BudgetProgressItem from "./budget-progress-item";
import DialogBudgeting from "./dialog-budgeting";

const BudgetProgress = () => {
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
        <h1 className="text-lg text-center text-neutral-500">Set Your Budget Now!</h1>
        {/* <BudgetProgressItem id={1} limit="400" category="Food" /> */}
        {/* <BudgetProgressItem id={2} limit="400" category="Transportation" /> */}
        {/* <BudgetProgressItem id={3} limit="400" category="Housing" /> */}
      </CardContent>
    </Card>
  );
};

export default BudgetProgress;
