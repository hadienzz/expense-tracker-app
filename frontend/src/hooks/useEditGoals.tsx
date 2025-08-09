"use client";

import axiosInstance from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import { useState } from "react";
import { toast } from "sonner";

interface EditGoalsProps {
  title: string;
  description: string;
  targetAmount: string;
  currentAmount: string;
  targetDate: string;
  priorityLevel: string;
}

const useEditGoals = () => {
  const [goalsId, setGoalsId] = useState<null | number>(null);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);

  const handleOpenEditModal = (id: number) => {
    setGoalsId(id);
    setEditModalIsOpen(true);
  };

  const handleCloseEditModal = () => {
    setGoalsId(null);
    setEditModalIsOpen(false);
  };

  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      // const response = await axiosInstance.post
    },
    onError: (err) => {
      console.error(err);
      toast.error("Gagal mengedit target");
    },
    onSuccess: () => {},
  });
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      targetAmount: "",
      currentAmount: "",
      targetDate: "",
      priorityLevel: "",
    },
    onSubmit: () => {},
  });

  return {
    goalsId,
    editModalIsOpen,
    handleOpenEditModal,
    handleCloseEditModal,
  };
};

export default useEditGoals;
