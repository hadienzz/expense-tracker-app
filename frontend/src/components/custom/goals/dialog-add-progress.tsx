"use client";

import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import React from "react";
import FormInput from "../shared/form-input";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/formatValue";
import { FormikProps } from "formik";
import { FormikProgressGoals } from "@/hooks/useAddProgressGoals";

type goalsInfo = {
  currentAmount: string | null;
  targetAmount: string | null;
};

interface DialogAddProgressProps {
  isOpen: boolean;
  onClose: () => void;
  goalsInfo: goalsInfo;
  formik: FormikProps<FormikProgressGoals>;
}

const DialogAddProgress = ({
  isOpen,
  onClose,
  goalsInfo,
  formik,
}: DialogAddProgressProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Tambah Progress</DialogTitle>
          <DialogDescription>
            Terus tambahkan progress agar keinginanmu tercapai!
          </DialogDescription>
        </DialogHeader>

        <div className="flex items-center justify-between">
          <div className="grid gap-2">
            <h1>Sekarang</h1>
            <Badge variant={"outline"} className="py-1 px-2 text-base">
              {formatPrice(Number(goalsInfo.currentAmount))}
            </Badge>
          </div>
          <div className="grid gap-2">
            <h1>Target</h1>
            <Badge variant={"outline"} className="py-1 px-2 text-base">
              {formatPrice(Number(goalsInfo.targetAmount))}
            </Badge>
          </div>
        </div>
        <form className="flex flex-col gap-6" onSubmit={formik.handleSubmit}>
          <FormInput
            label="Tambah Progress Target"
            placeholder="3.000"
            type="number"
            name="addProgress"
            onChange={formik.handleChange}
            value={formik.values.addProgress}
            required
          />
          <Button>Save</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DialogAddProgress;
