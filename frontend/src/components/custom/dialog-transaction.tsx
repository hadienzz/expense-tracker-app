"use client";

import React from "react";
import { FormikProps } from "formik";
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "../ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";
import { Button } from "../ui/button";
import useForm, { FormValues } from "@/hooks/useForm";

interface AddTransactionDialogProps {
  children: React.ReactNode;
}

const expenseCategories = [
  { value: "food", label: "Food" },
  { value: "transport", label: "Transport" },
  { value: "entertainment", label: "Entertainment" },
  { value: "utilities", label: "Utilities" },
  { value: "housing", label: "Housing" },
  { value: "other", label: "Other" },
];

const incomeCategories = [
  { value: "salary", label: "Salary" },
  { value: "investment", label: "Investment" },
  { value: "freelance", label: "Freelance" },
  { value: "gift", label: "Gift" },
  { value: "other", label: "Other" },
];

interface TransactionFormFieldsProps {
  categories: { value: string; label: string }[];
  formik: FormikProps<FormValues>;
}

const TransactionFormFields = ({
  categories,
  formik,
}: TransactionFormFieldsProps) => (
  <div className="space-y-4 pt-4">
    <div className="grid gap-2">
      <Label>Title</Label>
      <Input
        required
        name="title"
        onChange={formik.handleChange}
        value={formik.values.title}
      />
    </div>

    <div className="grid gap-2">
      <Label>Amount</Label>
      <Input
        required
        type="number"
        name="amount"
        onChange={formik.handleChange}
        value={formik.values.amount}
      />
    </div>

    <div className="grid gap-2">
      <Label>Category</Label>
      <Select
        name="category"
        value={formik.values.category}
        onValueChange={(value) => formik.setFieldValue("category", value)}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select category" />
        </SelectTrigger>
        <SelectContent className="w-full bg-white">
          {categories.map((category) => (
            <SelectItem key={category.value} value={category.value}>
              {category.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>

    <div className="grid gap-2">
      <Label>Date</Label>
      <Input
        required
        type="date"
        name="date"
        onChange={formik.handleChange}
        value={formik.values.date}
      />
    </div>

    <div className="grid gap-2">
      <Label>Notes (Optional)</Label>
      <Input
        required
        name="notes"
        onChange={formik.handleChange}
        value={formik.values.notes}
      />
    </div>
  </div>
);

const DialogTransaction = ({ children }: AddTransactionDialogProps) => {
  const formik = useForm();
  return (
    <Dialog onOpenChange={(open) => !open && formik.resetForm()}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-h-[90vh] overflow-y-auto border bg-background">
        <DialogHeader>
          <DialogTitle>Add Transaction</DialogTitle>
          <DialogDescription>Create a new transaction record</DialogDescription>
        </DialogHeader>
        <form onSubmit={formik.handleSubmit}>
          <Tabs
            value={formik.values.type}
            onValueChange={(value) => {
              formik.setFieldValue("type", value);
              formik.resetForm({
                values: {
                  ...formik.initialValues,
                  type: value,
                },
              });
            }}
          >
            <TabsList className="w-full grid grid-cols-2">
              <TabsTrigger value="expense" className="cursor-pointer">
                Expense
              </TabsTrigger>
              <TabsTrigger value="income" className="cursor-pointer">
                Income
              </TabsTrigger>
            </TabsList>
            <TabsContent value="expense">
              <TransactionFormFields
                categories={expenseCategories}
                formik={formik}
              />
            </TabsContent>
            <TabsContent value="income">
              <TransactionFormFields
                categories={incomeCategories}
                formik={formik}
              />
            </TabsContent>
          </Tabs>
          <DialogFooter>
            <div className="pt-4 flex w-full items-center gap-4">
              <Button className="flex-1">Save</Button>
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DialogTransaction;
