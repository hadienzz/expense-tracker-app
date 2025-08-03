"use client";

import { TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader } from "../../ui/card";
import { Doughnut } from "react-chartjs-2";
import { formatPrice } from "@/lib/formatValue";
import { chartOptions } from "@/lib/chart";
import CategoryBreakdownItem from "./category-breakdown-item";

interface TransactionSummaryItem {
  category: string;
  total: number;
}
interface IncomeSummary {
  incomeSummary: TransactionSummaryItem[];
}

interface IncomeAnalyticsProps {
  data: IncomeSummary | undefined;
  isLoading: boolean;
}

const IncomeAnalytics = ({ data, isLoading }: IncomeAnalyticsProps) => {
  const totalIncome = data?.incomeSummary?.reduce(
    (acc: any, cur: any) => acc + cur.total,
    0
  );

  const chartData = {
    labels: data?.incomeSummary?.map((item: any) => item.category),
    datasets: [
      {
        label: "Pemasukan",
        data: data?.incomeSummary?.map((item: any) => item.total),
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
      <div className="">
        <CardHeader>
          <div className=" flex justify-center items-center gap-2">
            <TrendingUp className="text-green-600 w-6 h-6" />
            <h1 className="text-slate-800 font-medium text-lg lg:text-2xl">Pendapatan</h1>
          </div>
        </CardHeader>
        <p className="text-center">Rincian aliran pendapatan Anda</p>
        <CardContent className="">
          <article className="">
            {isLoading!! && (
              <div>
                <h1>Fetching data...</h1>
              </div>
            )}
            {totalIncome === 0 ? (
              <div className="text-center pt-4">
                <h1 className="text-base ">Kamu belum mempunyai pemasukan</h1>
                <p className="text-sm lg:text-base">
                  Silahkan melakukan transaksi untuk melihat visual data
                  pemasukan
                </p>
              </div>
            ) : null}
            <h1 className="text-green-600 text-2xl text-center py-6 ">
              Rp. {formatPrice(totalIncome)}
            </h1>
            <div className="">
              {!isLoading!! && totalIncome >= 0 && (
                <Doughnut data={chartData} options={chartOptions} />
              )}
            </div>
            {data?.incomeSummary?.map((item, idx) => (
              <CategoryBreakdownItem
                totalTransaction={totalIncome}
                {...item}
                key={idx}
                backgroundColor={chartData.datasets[0].backgroundColor[idx]}
              />
            ))}
          </article>
        </CardContent>
      </div>
    </Card>
  );
};

export default IncomeAnalytics;
