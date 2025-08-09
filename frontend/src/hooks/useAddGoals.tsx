"use client";

import axiosInstance from "@/lib/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useFormik } from "formik";
import { toast } from "sonner";

export interface FormikGoalsValue {
  title: string;
  type: string;
  description: string;
  targetAmount: string;
  currentAmount: string;
  targetDate: string;
  priorityLevel: string;
}

const useAddGoals = () => {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: async (body: FormikGoalsValue) => {
      try {
        const response = await axiosInstance.post("/goals", body, {
          withCredentials: true,
        });
        console.log(body);
        toast.success("Berhasil membuat goals baru");

        return response.data;
      } catch (err) {
        console.error(err);
        return toast.error("Gagal membuat goals baru");
      }
    },

    onSuccess: () => {
      formik.resetForm();
      queryClient.invalidateQueries({ queryKey: ["goals"] });
    },
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      type: "",
      description: "",
      targetAmount: "",
      currentAmount: "",
      targetDate: "",
      priorityLevel: "Medium",
    },
    onSubmit: (value) => {
      mutate(value);
    },
  });
  return formik;
};

export default useAddGoals;
