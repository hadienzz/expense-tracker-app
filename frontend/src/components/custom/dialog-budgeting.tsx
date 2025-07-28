"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Form } from "../ui/form";
import FormInput from "./form-input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import useAddBudget, { FormBudgetValues } from "@/hooks/useAddBudget";
import { FormikProps } from "formik";

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
          <Button>Save</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DialogBudgeting;
