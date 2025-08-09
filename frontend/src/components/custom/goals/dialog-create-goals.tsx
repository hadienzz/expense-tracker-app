"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React, { JSX, useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BasicInfoGoals from "./basic-info-goals";
import DetailInfoGoals from "./detail-info-goals";
import useAddGoals, { FormikGoalsValue } from "@/hooks/useAddGoals";
import { FormikProps } from "formik";

interface DialogCreateGoalsProps {
  children: JSX.Element;
}

const DialogCreateGoals = ({ children }: DialogCreateGoalsProps) => {
  const formik: FormikProps<FormikGoalsValue> = useAddGoals();

  return (
    <Dialog onOpenChange={(isOpen) => !isOpen && formik.resetForm()}>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="bg-background ">
        <DialogHeader>
          <DialogTitle>Buat Target Baru</DialogTitle>
          <DialogDescription>Tetapkan target keuangan baru</DialogDescription>
        </DialogHeader>
        <form onSubmit={formik.handleSubmit}>
          <Tabs defaultValue="basic" className="space-y-4">
            <TabsList className="w-full grid grid-cols-2">
              <TabsTrigger value="info">Basic Info</TabsTrigger>
              <TabsTrigger value="details">Details & Timeline</TabsTrigger>
            </TabsList>

            <BasicInfoGoals formik={formik} />
            <DetailInfoGoals formik={formik} />
          </Tabs>
        </form>
      </DialogContent>
    </Dialog>
  );
};
export default DialogCreateGoals;
