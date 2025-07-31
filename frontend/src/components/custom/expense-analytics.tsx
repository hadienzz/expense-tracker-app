import useGetBudgetSummary from "@/hooks/useGetBudgetSummary";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

import { Bar, Doughnut, Line } from "react-chartjs-2";
import CategoryBreakdownItem from "./category-breakdown-item";
import { doughnutOptions, chartOptions } from "../../lib/chart";
import { formatPrice } from "@/lib/formatValue";

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
          "#F87171", // Red
          "#60A5FA", // Blue
          "#34D399", // Green
          "#FBBF24", // Yellow
          "#A78BFA", // Purple
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
              Expense Analytics
            </h1>
            <p className="text-neutral-600">
              Comprehensive breakdown of your spending patterns
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

            <TabsContent value="breakdown">
              <article className="grid gap-6 lg:grid-cols-2 pt-4">
                {data?.transactionSummary?.length === 0 && (
                  <div className="text-center pt-8">
                    <h1 className="text-slate-900 font-semibold text-xl">
                      Kamu Belum Membuat transaksi apapun
                    </h1>
                    <p className="text-slate-600 text-lg">
                      Buat Transaksi untuk melihat pengeluaran kamu
                    </p>
                  </div>
                )}

                <div className="">
                  {!isLoading!! && (
                    <Doughnut
                      data={chartData}
                      options={chartOptions}
                      className="w-[100px]  h-[200px] xl:h-[200px] xl:w-[400px] "
                    />
                  )}
                </div>
                <div className="space-y- ">
                  <h1 className="font-bold text-slate-900 text-xl">
                    Category Breakdown
                  </h1>
                  <div className="">
                    {!isLoading &&
                      data?.transactionSummary?.map((item: any, idx: any) => (
                        <CategoryBreakdownItem
                          {...item}
                          totalTransaction={totalExpense}
                          backgroundColor={
                            chartData.datasets[0].backgroundColor[idx]
                          }
                          key={idx}
                        />
                      ))}
                  </div>
                </div>
              </article>
            </TabsContent>
            <TabsContent value="insight">
              <section className="grid grid-cols-2 place-items-center gap-4">
                <div className="bg-blue-100 p-1 text-justify rounded-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos, doloremque? Ab omnis, consequuntur vel voluptas
                  corporis, tenetur magnam hic ratione inventore aut provident
                  adipisci ipsum molestias iure repellendus asperiores rem?
                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos, doloremque? Ab omnis, consequuntur vel voluptas
                  corporis, tenetur magnam hic ratione inventore aut provident
                  adipisci ipsum molestias iure repellendus asperiores rem?
                </div>
                <div className="text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos, doloremque? Ab omnis, consequuntur vel voluptas
                  corporis, tenetur magnam hic ratione inventore aut provident
                  adipisci ipsum molestias iure repellendus asperiores rem?
                </div>
              </section>
            </TabsContent>
          </Tabs>
        </CardContent>
      </CardHeader>
    </Card>
  );
};

export default ExpenseAnalytics;
