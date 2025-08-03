import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";

const BudgetAnalyticsItem = () => {
  return (
    <Card>
      <CardHeader>
        <div>Icon</div>
        <div>Title</div>
        <Badge>Status</Badge>
      </CardHeader>
    </Card>
  );
};

export default BudgetAnalyticsItem;
