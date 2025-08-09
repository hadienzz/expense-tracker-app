"use client";

import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { MoreHorizontal } from "lucide-react";
import { dataItem } from "./goals-management";
import { formatPrice } from "@/lib/formatValue";
import { Card } from "@/components/ui/card";
import { calculateProgress } from "@/lib/calculateProgress";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import useDeleteGoals from "@/hooks/useDeleteGoals";
import DialogAddProgress from "./dialog-add-progress";
import useAddProgressGoals from "@/hooks/useAddProgressGoals";
import { formatDistanceToNow } from "date-fns";
import { id as localeId } from "date-fns/locale";
import useEditGoals from "@/hooks/useEditGoals";
import DialogEditGoals from "./dialog-edit-goals";

const GoalItem = ({
  id,
  currentAmount,
  priorityLevel,
  targetAmount,
  title,
  type,
  description,
  lastAddAt,
  status,
}: dataItem) => {
  const progress = calculateProgress(
    Number(currentAmount),
    Number(targetAmount)
  );
  const isComplete = progress >= 100;

  const remainingAmount = isComplete
    ? "Completed!"
    : formatPrice(Number(targetAmount) - Number(currentAmount));

  const { handleDelete } = useDeleteGoals();
  const { handleOpenModal, isOpen, handleClose, goalsInfo, formik } =
    useAddProgressGoals();
  const { editModalIsOpen, handleCloseEditModal, handleOpenEditModal } =
    useEditGoals();

  const icons: Record<string, string> = {
    Desire: "🛍️",
    Travel: "✈️",
    Savings: "💰",
    Emergency: "🛡️",
    Education: "🎓",
    Investment: "📈 ",
    Other: "📦",
  };

  const backgroundItem: Record<string, string> = {
    High: "bg-red-100 text-red-800",
    Medium: "bg-yellow-100 text-yellow-800",
    Low: "bg-green-100 text-green-800",
  };

  return (
    <>
      <Card className=" px-4 mt-4">
        <div className="flex items-start">
          <div className="mr-4 mt-1 text-xs">{icons[type]}</div>

          <div className="flex-1">
            <div className="flex flex-wrap md:items-center justify-between gap-2">
              {/* Kiri: Title */}
              <h1 className="text-slate-900 lg:text-lg text-sm font-semibold flex-1 min-w-[150px] break-words whitespace-normal">
                {title}
              </h1>

              {/* Kanan: Badge + MoreHorizontal */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <Badge className="bg-green-100 text-xs lg:text-base text-green-800">
                  {status}
                </Badge>
                <Badge
                  className={`${
                    backgroundItem[priorityLevel] || ""
                  } text-xs lg:text-base`}
                >
                  {priorityLevel}
                </Badge>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="p-1">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="text-xs lg:text-base">
                    <DropdownMenuItem onClick={() => handleOpenEditModal(id)}>
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleDelete(id)}
                      className="text-red-600"
                    >
                      Delete
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() =>
                        handleOpenModal(id, targetAmount, currentAmount)
                      }
                    >
                      Tambah Progress
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-3 text-xs lg:text-sm text-neutral-600 ">
          <div className="flex justify-between">
            <p className="">
              Rp. {formatPrice(Number(currentAmount))} dari{" "}
              {formatPrice(Number(targetAmount))}
            </p>
            <p className="">{progress.toFixed(2)}%</p>
          </div>
          <div className="text-center">
            <Progress value={Number(progress)} className="h-3 my-2" />
          </div>
          <div className="flex justify-between">
            <p>Rp. {remainingAmount} </p>
            <p>On Track</p>
          </div>
        </div>
      </Card>
      {isOpen ? (
        <DialogAddProgress
          isOpen={isOpen}
          onClose={handleClose}
          goalsInfo={goalsInfo}
          formik={formik}
        />
      ) : null}
      {editModalIsOpen ? (
        <DialogEditGoals
          isOpen={editModalIsOpen}
          onClose={handleCloseEditModal}
        />
      ) : null}
    </>
  );
};

export default GoalItem;
