"use client";
import axiosInstance from "@/lib/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useFormik } from "formik";
import { useState } from "react";
import { toast } from "sonner";
import { number, string } from "yup";

export interface EditBudgetValues {
  limit: number;
  threshold: number;
}

const useEditBudget = () => {
  const [budgetId, setBudgetId] = useState<null | number>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [categoryType, setCategoryType] = useState<null | string>(null);
  const queryClient = useQueryClient();

  const handleOpenModal = (id: number, category: string) => {
    setBudgetId(id);
    setCategoryType(category);
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setBudgetId(null);
    setCategoryType(null);
    setModalIsOpen(false);
  };

  const { mutate, isPending } = useMutation({
    mutationFn: async (body: EditBudgetValues) => {
      if (body.limit <= 0) {
        return toast.error("Budget tidak boleh kurang daripada 0");
      }
      const response = await axiosInstance.patch(
        `/budgeting/${budgetId}`,
        body,
        {
          withCredentials: true,
        }
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["budget"] });
      handleCloseModal();
    },
  });

  const formik = useFormik({
    initialValues: {
      limit: 0,
      threshold: 80,
    },
    onSubmit: (values) => {
      mutate(values);
    },
  });

  return {
    handleOpenModal,
    modalIsOpen,
    handleCloseModal,
    categoryType,
    formik,
  };
};

export default useEditBudget;
