import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import BudgetItem from "./budget-item";
import DialogBudgeting from "../shared/dialog-budgeting";

interface dataItem {
  budget: number;
  category: string;
  id: number;
  limit: number;
  over: boolean;
  progress: number;
  used: number;
}

export interface BudgetManagementProps {
  data: dataItem[];
  isLoading: boolean;
}

const BudgetManagement = ({ data, isLoading }: BudgetManagementProps) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-semibold text-slate-900">
              Budget Management
            </CardTitle>
            <CardDescription className="text-neutral-600">
              Atur pengeluaran anda sesuai kebutuhan!
            </CardDescription>
          </div>
          <div>
            <DialogBudgeting>
              <Button>Tambah Budget</Button>
            </DialogBudgeting>
          </div>
        </div>
      </CardHeader>
      <CardContent className="grid gap-4">
        {isLoading!! && (
          <div className="w-full text-center font-semibold text-2xl">
            <h1>Loading...</h1>
          </div>
        )}
        {!isLoading!! &&
          Array.isArray(data) &&
          data?.map((item: any) => <BudgetItem key={item?.id} {...item} />)}
      </CardContent>
    </Card>
  );
};

export default BudgetManagement;
