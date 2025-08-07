import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { dataItem } from "./budget-management";
import { AlertTriangle, Bell, CheckCircle, Clock } from "lucide-react";
import { formatPrice } from "@/lib/formatValue";
import { formatDistanceToNow } from "date-fns";
import { id as localeId } from "date-fns/locale";

const BudgetAnalyticsItem = ({
  id,
  budget,
  category,
  limit,
  over,
  progress,
  used,
  lastTransactionAt,
}: dataItem) => {
  const generateContent = (type: string) => {
    switch (type) {
      case "Lebih":
        return `Anda terlalu impulsif dalam menggunakan keuangan anda di ${category}`;
      case "Normal": {
        `Kategori ${category} masih dalam ambang batas wajar, gunakan dengan bijak!`;
      }
      default:
        return `Kategori ${category} masih sangat aman dengan penggunaan sebesar ${progress}%`;
    }
  };

  const generateType = (progress: number) => {
    switch (true) {
      case progress <= 50:
        return "Aman";
      case progress <= 90:
        return "Normal";
      case progress >= 100:
        return "Lebih";
      default:
        return "";
    }
  };

  const getItemColor = (type: string) => {
    switch (type) {
      case "Lebih":
        return "bg-red-50 border-red-200";
      case "Aman":
        return "bg-green-50 border-green-200";
      case "Normal":
        return "bg-blue-50 border-blue-200";
      default:
        return "bg-gray-50 bg-gray-200";
    }
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case "Lebih":
        return <AlertTriangle className="h-4 w-4 text-red-500" />;
      case "Aman":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "Normal":
        return <Clock className="h-4 w-4 text-blue-500" />;
      default:
        return <Bell className="h-4 w-4 text-gray-500" />;
    }
  };

  return (
    <Card className={`${getItemColor(generateType(progress))}`}>
      <CardHeader className="flex items-start justify-between">
        <div className="flex items-center gap-x-4">
          <div>{getAlertIcon(generateType(progress))}</div>
          <div className="text-sm font-semibold">{category}</div>
        </div>
        <Badge
          className={`${
            generateType(progress) === "Lebih"
              ? "bg-red-100 text-red-600 border border-red-300"
              : generateType(progress) === "Normal"
              ? "bg-blue-100 text-blue-600 border border-blue-300"
              : generateType(progress) === "Aman"
              ? "bg-green-100 text-green-600 border border-green-300"
              : "bg-gray-100 text-gray-600 border border-gray-300"
          }`}
        >
          {generateType(progress)}
        </Badge>
      </CardHeader>
      <CardContent className="">
        <div>
          <h1 className="text-sm text-neutral-600 -mt-3">
            {generateContent(generateType(progress))}
          </h1>
        </div>
        <div className="flex items-center justify-between pt-4">
          <h1 className="text-sm text-neutral-600">
            Rp. {formatPrice(used)} dari {formatPrice(limit)}
          </h1>
          <p className="text-xs text-neutral-600">
            {lastTransactionAt
              ? formatDistanceToNow(lastTransactionAt, {
                  addSuffix: true,
                  locale: localeId,
                })
              : null}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BudgetAnalyticsItem;
