import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { dataItem } from "./budget-management";
import BudgetAnalyticsItem from "./budget-analytics-item";

interface BudgetAnalyticsProps {
  data: dataItem[];
  isLoading: boolean;
}

const BudgetAnalytics = ({ data, isLoading }: BudgetAnalyticsProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Analisis Budget</CardTitle>
        <CardDescription className="text-sm">
          Tetap dalam jangkauan budget yang telah ditetapkan!
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-3">
        {Array.isArray(data) && !isLoading!!
          ? data?.map((item, idx) => (
              <BudgetAnalyticsItem {...item} key={idx} />
            ))
          : null}
      </CardContent>
    </Card>
  );
};

export default BudgetAnalytics;
