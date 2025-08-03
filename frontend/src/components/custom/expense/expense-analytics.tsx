import { Card, CardContent, CardHeader } from "../../ui/card";
import { Tabs, TabsList, TabsTrigger } from "../../ui/tabs";
import { chartOptions } from "../../../lib/chart";
import { formatPrice } from "@/lib/formatValue";
import SummaryInsight from "../../custom/analytics/summary-insight";
import TabsBreakdown from "../../custom/analytics/tabs-breakdown";

interface TransactionSummaryItem {
  category: string;
  total: number;
}
interface BudgetSummary {
  transactionSummary: TransactionSummaryItem[];
  // Tambahkan properti lain kalau diperlukan
}

interface ExpenseAnalyticsProps {
  data: BudgetSummary | undefined;
  isLoading: boolean;
}

const ExpenseAnalytics = ({ data, isLoading }: ExpenseAnalyticsProps) => {
  const totalExpense = data?.transactionSummary?.reduce(
    (acc: any, cur: any) => acc + cur.total,
    0
  );

  const chartData = {
    labels: data?.transactionSummary?.map((item: any) => item.category),
    datasets: [
      {
        label: "Pengeluaran",
        data: data?.transactionSummary?.map((item: any) => item.total),
        backgroundColor: [
          "#f87171",
          "#fb923c",
          "#facc15",
          "#34d399",
          "#60a5fa",
          "#a78bfa",
          "#f472b6",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between ">
          <div>
            <h1 className="text-slate-900 font-medium text-lg">
              Analisis Pengeluaran
            </h1>
            <p className="text-neutral-600">
              Rincian lengkap pola pengeluaran Anda
            </p>
          </div>
          <div>
            <h1>Rp. {formatPrice(totalExpense)} Total</h1>
          </div>
        </div>
        <CardContent className="">
          <Tabs defaultValue="breakdown">
            <TabsList className="w-full grid grid-cols-2">
              <TabsTrigger value="breakdown">Category Breakdown</TabsTrigger>
              <TabsTrigger value="insight">Key Insight</TabsTrigger>
            </TabsList>

            {data?.transactionSummary?.length === 0 && (
              <div className="text-center pt-8 w-full ">
                <h1 className="text-slate-900 font-semibold text-xl">
                  Kamu Belum Membuat transaksi apapun
                </h1>
                <p className="text-slate-600 text-lg">
                  Buat Transaksi untuk melihat pengeluaran kamu
                </p>
              </div>
            )}

            <TabsBreakdown
              chartData={chartData}
              chartOptions={chartOptions}
              isLoading={isLoading}
              transactionSummary={data?.transactionSummary ?? []}
              totalExpense={totalExpense}
            />
            <SummaryInsight
              transactionData={data?.transactionSummary ?? []}
              isLoading={isLoading}
            />
          </Tabs>
        </CardContent>
      </CardHeader>
    </Card>
  );
};

export default ExpenseAnalytics;
