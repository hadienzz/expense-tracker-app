import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";
import { formatPrice } from "@/lib/formatValue";
import { MoreHorizontal } from "lucide-react";
import BudgetEditDialog from "./budget-edit-dialog";
import useEditBudget from "@/hooks/useEditBudget";
import useDeleteBudget from "@/hooks/useDeleteBudget";
import { formatDistanceToNow } from "date-fns";
import { id as localeId } from "date-fns/locale";

interface BudgetItemProps {
  budget: number;
  category: string;
  id: number;
  limit: number;
  over: boolean;
  progress: number;
  used: number;
  threshold: number;
  lastTransactionAt: string;
}
const BudgetItem = ({
  budget,
  category,
  id,
  limit,
  over,
  progress,
  used,
  threshold,
  lastTransactionAt,
}: BudgetItemProps) => {
  const {
    handleOpenModal,
    handleCloseModal,
    modalIsOpen,
    categoryType,
    formik,
  } = useEditBudget();

  const { handleDeleteBudget, isPending } = useDeleteBudget();

  const icons: any = {
    Food: "🍔",
    Transport: "🚗",
    Entertainment: "🎬",
    Utilites: "⚡",
    Housing: "🏡",
    Other: "🔮",
  };

  return (
    <>
      <Card>
        <CardHeader className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div>
              <h1 className="text-xl">{icons[category]}</h1>
            </div>
            <div>
              <h1>{category}</h1>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Badge
              className={`${
                over
                  ? "bg-red-100 text-red-600"
                  : progress >= 90
                  ? "bg-yellow-100 text-yellow-600"
                  : "bg-green-100 text-green-600"
              }`}
            >
              {over
                ? "Over Budget"
                : progress >= 90
                ? "Mendekati Batas"
                : "On Track"}
            </Badge>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <MoreHorizontal />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => handleOpenModal(id, category)}>
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleDeleteBudget(id)}>
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center">
            <p>
              Rp. {formatPrice(used)} Dari {formatPrice(limit)}
            </p>
            <p className={`${over ? "text-red-600" : ""}`}>
              {progress}% Terpakai
            </p>
          </div>
          <div className="py-2">
            <Progress value={progress} className="h-3" />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <p className="text-neutral-600 text-sm">
                Tersisa {formatPrice(budget - used)}
              </p>
              <div>•</div>
              <p className="text-neutral-600 text-sm">
                {lastTransactionAt
                  ? formatDistanceToNow(new Date(lastTransactionAt), {
                      locale: localeId,
                      addSuffix: true,
                    })
                  : null}
              </p>
            </div>
            <div className="flex flex-col gap-2 text-center">
              <p
                className={`${
                  over ? "text-red-600" : "text-emerald-600"
                } text-sm`}
              >
                {over ? "Kelebihan Batas ⚠️" : "Dalam Batasan ✅"}
              </p>
              <p className="text-xs text-neutral-600">
                Pengingat: {threshold}%
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      {modalIsOpen && (
        <BudgetEditDialog
          formik={formik}
          open={modalIsOpen}
          onClose={handleCloseModal}
          categoryType={categoryType}
        />
      )}
    </>
  );
};

export default BudgetItem;
