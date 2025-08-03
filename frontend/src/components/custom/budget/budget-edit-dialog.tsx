import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

import { EditBudgetValues } from "@/hooks/useEditBudget";
import { FormikProps } from "formik";

import React from "react";
import FormInput from "../shared/form-input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface BudgetEditDialogProps {
  open: boolean;
  onClose: () => void;
  categoryType: null | string;
  formik: FormikProps<EditBudgetValues>;
}

const BudgetEditDialog = ({
  open,
  onClose,
  categoryType,
  formik,
}: BudgetEditDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Budget</DialogTitle>
          <DialogDescription>
            Perbarui setelan budget kamu untuk {categoryType}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={formik.handleSubmit} className="space-y-3">
          <div className="grid gap-2">
            <Label>Category Name</Label>
            <div className="w-full border p-2 rounded-lg">{categoryType}</div>
          </div>
          <FormInput
            label="Budget Limit"
            type="number"
            name="limit"
            onChange={formik.handleChange}
            value={formik.values.limit}
            required
          />
          <Select
            defaultValue="80"
            value={`${formik.values.threshold}`}
            onValueChange={(value) =>
              formik.setFieldValue("threshold", Number(value))
            }
          >
            <Label className="mb-2">Alert Threshold (%)</Label>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="80% Recommended"></SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={"50"}>50% - Early Warning</SelectItem>
              <SelectItem value={"75"}>75% - Standard</SelectItem>
              <SelectItem value={"80"}>80% - Recommended</SelectItem>
              <SelectItem value={"90"}>90% - Late Warning</SelectItem>
              <SelectItem value={"100"}>100% - Only When Exceeded</SelectItem>
            </SelectContent>
          </Select>
          <Button className="w-full">Save</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BudgetEditDialog;
