import { Card, CardHeader } from "../ui/card";

const ExpenseAnalytics = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-slate-900 font-medium text-lg">
              Expense Analytics
            </h1>
            <p className="text-neutral-600">
              Comprehensive breakdown of your spending patterns
            </p>
          </div>
          <div>
            <h1>Rp. AMOUNT Total</h1>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default ExpenseAnalytics;
