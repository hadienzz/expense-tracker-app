import { Doughnut } from "react-chartjs-2";
import { TabsContent } from "../../ui/tabs";
import { ChartData, ChartOptions } from "chart.js";
import CategoryBreakdownItem from "./category-breakdown-item";

interface TransactionSummaryItem {
  category: string;
  total: number;
}

interface TabsBreakdownProps {
  isLoading: boolean;
  chartData: any;
  chartOptions: any;
  transactionSummary: TransactionSummaryItem[];
  totalExpense: number;
}

const TabsBreakdown = ({
  chartData,
  chartOptions,
  isLoading,
  transactionSummary,
  totalExpense,
}: TabsBreakdownProps) => {
  return (
    <TabsContent value="breakdown">
      <article className="grid gap-6 lg:grid-cols-2 pt-4">
        {transactionSummary.length === 0 && (
          <div className="text-center pt-8">
            <h1 className="text-slate-900 font-semibold text-xl">
              Kamu Belum Membuat transaksi apapun
            </h1>
            <p className="text-slate-600 text-lg">
              Buat Transaksi untuk melihat pengeluaran kamu
            </p>
          </div>
        )}

        {transactionSummary.length > 0 && (
          <>
            <div>
              {!isLoading && (
                <Doughnut
                  data={chartData}
                  options={chartOptions}
                  className="w-[100px] h-[200px] xl:h-[200px] xl:w-[400px]"
                />
              )}
            </div>

            <div>
              <h1 className="font-bold text-slate-900 text-xl">
                Category Breakdown
              </h1>
              <div>
                {!isLoading &&
                  transactionSummary.map((item, idx) => (
                    <CategoryBreakdownItem
                      {...item}
                      backgroundColor={
                        chartData.datasets[0].backgroundColor[idx]
                      }
                      totalTransaction={totalExpense}
                      key={idx}
                    />
                  ))}
              </div>
            </div>
          </>
        )}
      </article>
    </TabsContent>
  );
};

export default TabsBreakdown;
