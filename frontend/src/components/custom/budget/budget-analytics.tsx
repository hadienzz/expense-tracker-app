import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const BudgetAnalytics = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Analisis Budget</CardTitle>
        <CardDescription className="text-sm">
          Tetap dalam jangkauan budget yang telah ditetapkan!
        </CardDescription>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
};

export default BudgetAnalytics;
