"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import { Form } from "../../ui/form";
import FormInput from "./form-input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { Button } from "../../ui/button";
import useAddBudget, { FormBudgetValues } from "@/hooks/useAddBudget";
import { FormikProps } from "formik";
import { Label } from "@/components/ui/label";

interface DialogBudgetingProps {
  children: React.ReactNode;
}

const DialogBudgeting = ({ children }: DialogBudgetingProps) => {
  const formik: FormikProps<FormBudgetValues> = useAddBudget();

  return (
    <Dialog onOpenChange={(open) => !open!! && formik.resetForm()}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Budget</DialogTitle>
          <DialogDescription>Create your own budget</DialogDescription>
        </DialogHeader>
        <form className="grid gap-4" onSubmit={formik.handleSubmit}>
          <Select
            value={formik.values.category}
            onValueChange={(value) => formik.setFieldValue("category", value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="Food">Food</SelectItem>
              <SelectItem value="Transport">Transport</SelectItem>
              <SelectItem value="Entertainment">Entertainment</SelectItem>
              <SelectItem value="Utilities">Utilities</SelectItem>
              <SelectItem value="Housing">Housing</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>

          <FormInput
            label="Budget Limit"
            placeholder="e.g 200000"
            name="limit"
            onChange={formik.handleChange}
            value={formik.values.limit}
            type="number"
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
          <Button>Save</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DialogBudgeting;
