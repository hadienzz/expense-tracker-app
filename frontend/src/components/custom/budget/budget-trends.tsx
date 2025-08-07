import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BudgetManagementProps } from "./budget-management";

// Chart.js imports - Fixed registration
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { array } from "yup";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const BudgetTrends = ({ data, isLoading }: BudgetManagementProps) => {
  const safeData = Array.isArray(data) ? data : [];

  const chartData = {
    labels: safeData.map((item) => item.category),
    datasets: [
      {
        label: "Budget",
        data: safeData.map((item) => item.budget),
        backgroundColor: "#93C5FD",
        borderRadius: 6,
      },
      {
        label: "Spent",
        data: safeData.map((item) => item.used),
        backgroundColor: "#3B82F6",
        borderRadius: 6,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value: any) => "Rp. " + value.toLocaleString(),
        },
      },
    },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Budget Trends</CardTitle>
        <CardDescription>Lacak budget Anda dari waktu ke waktu</CardDescription>
      </CardHeader>
      <CardContent>
        {!isLoading && safeData && (
          <div className="h-[350px]">
            <Bar data={chartData} options={chartOptions} />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default BudgetTrends;
