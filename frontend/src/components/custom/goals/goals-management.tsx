"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DialogCreateGoals from "./dialog-create-goals";
import GoalItem from "./goal-item";

export interface dataItem {
  id: number;
  user_id: string;
  title: string;
  type: string;
  description?: string;
  currentAmount: number;
  targetAmount: number;
  targetDate: string;
  priorityLevel: string;
}

interface GoalsManagementProps {
  data: dataItem[];
  isLoading: boolean;
}

const GoalsManagement = ({ data, isLoading }: GoalsManagementProps) => {
  const safeData = Array.isArray(data) ? data : [];

  return (
    <Card>
      <CardHeader className="">
        <div className="flex items-center justify-between">
          <div className="grid gap-2">
            <CardTitle>Target Finansial Anda</CardTitle>
            <CardDescription>
              Pantau tujuan target keuangan Anda.
            </CardDescription>
          </div>
          <DialogCreateGoals>
            <div className="bg-neutral-900 text-white font-semibold w-fit h-fit px-3 py-2 rounded-lg">
              Tambah Target
            </div>
          </DialogCreateGoals>
        </div>
      </CardHeader>
      <CardContent>
        <Card>
          <CardContent className="w-full ">
            {safeData.length === 0 && (
              <div className="text-center">
                <h1 className="text-lg">Anda belum memasang target</h1>
                <p className="text-neutral-600">
                  Pasang target pencapaian anda untuk mengetahui progress
                </p>
              </div>
            )}
            {safeData.map((item, idx) => (
              <GoalItem {...item} key={idx} />
            ))}
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};

export default GoalsManagement;
