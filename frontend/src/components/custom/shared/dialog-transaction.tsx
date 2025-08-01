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
} from "../../ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../ui/tabs";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../../ui/select";
import { Button } from "../../ui/button";
import useForm, { FormValues } from "@/hooks/useForm";
import FormInput from "./form-input";

interface AddTransactionDialogProps {
  children: React.ReactNode;
}

const expenseCategories = [
  { value: "Food", label: "Food" },
  { value: "Transport", label: "Transport" },
  { value: "Entertainment", label: "Entertainment" },
  { value: "Utilities", label: "Utilities" },
  { value: "Housing", label: "Housing" },
  { value: "Other", label: "Other" },
];

const incomeCategories = [
  { value: "Salary", label: "Salary" },
  { value: "Investment", label: "Investment" },
  { value: "Freelance", label: "Freelance" },
  { value: "Gift", label: "Gift" },
  { value: "Other", label: "Other" },
];

interface TransactionFormFieldsProps {
  categories: { value: string; label: string }[];
  formik: FormikProps<FormValues>;
}

interface SavingsFormFields {
  formik: FormikProps<FormValues>;
}

const SavingsFormFields = ({ formik }: SavingsFormFields) => {
  return (
    <div className="space-y-4">
      <FormInput
        label="Title"
        required
        name="title"
        value={formik.values.title}
        onChange={formik.handleChange}
      />
      <FormInput
        label="Amount"
        type="number"
        required
        name="amount"
        value={formik.values.amount}
        onChange={formik.handleChange}
      />
      <FormInput
        label="Date"
        name="date"
        type="date"
        required
        value={formik.values.date}
        onChange={formik.handleChange}
      />
      <FormInput
        label="Notes (Optional)"
        name="notes"
        value={formik.values.notes}
        onChange={formik.handleChange}
      />
    </div>
  );
};

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
      <FormInput
        required
        label="Date"
        type="date"
        name="date"
        onChange={formik.handleChange}
        value={formik.values.date}
      />
    </div>

    <div className="grid gap-2">
      <FormInput
        label="Notes (Optional)"
        type="text"
        name="notes"
        onChange={formik.handleChange}
        value={formik.values.notes}
      />
    </div>
  </div>
);

const DialogTransaction = ({ children }: AddTransactionDialogProps) => {
  const { formik } = useForm();
  return (
    <Dialog onOpenChange={(open) => !open && formik.resetForm()}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-h-[90vh] overflow-y-auto border bg-background">
        <DialogHeader>
          <DialogTitle>
            Tambah{" "}
            {formik.values.type === "Expense"
              ? "Pengeluaran"
              : formik.values.type === "Income"
              ? "Pemasukan"
              : "Tabungan"}
          </DialogTitle>
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
            <TabsList className="w-full grid grid-cols-3">
              <TabsTrigger value="Expense" className="cursor-pointer">
                Pengeluaran
              </TabsTrigger>
              <TabsTrigger value="Income" className="cursor-pointer">
                Pemasukan
              </TabsTrigger>
              <TabsTrigger value="Savings" className="cursor-pointer">
                Tabungan
              </TabsTrigger>
            </TabsList>
            <TabsContent value="Expense">
              <TransactionFormFields
                categories={expenseCategories}
                formik={formik}
              />
            </TabsContent>
            <TabsContent value="Income">
              <TransactionFormFields
                categories={incomeCategories}
                formik={formik}
              />
            </TabsContent>
            <TabsContent value="Savings">
              <SavingsFormFields formik={formik} />
            </TabsContent>
          </Tabs>
          <DialogFooter>
            <div className="pt-4 flex w-full items-center gap-4">
              <Button className="flex-1" type="submit">
                Save
              </Button>
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DialogTransaction;
