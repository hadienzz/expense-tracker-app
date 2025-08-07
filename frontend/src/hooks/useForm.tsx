"use client";

import { useFormik } from "formik";
import validation from "./validation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import axiosInstance from "@/lib/axios";
export interface FormValues {
  title: string;
  type: string;
  amount: string;
  category: string;
  date: string;
  notes: string;
}

const useForm = () => {
  const queryClient = useQueryClient();
  const { transactionValidationSchema } = validation();

  const { mutate, isPending } = useMutation({
    mutationFn: async (values: FormValues) => {
      try {
        const response = await axiosInstance.post("/transaction", values, {
          withCredentials: true,
        });
        toast.success("Data berhasil disimpan");

        return response.data;
      } catch (err) {
        return toast.error("Gagal menyimpan data");
        console.error(err);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["transaction"] });
      queryClient.invalidateQueries({ queryKey: ["budget"] });
      formik.resetForm();
    },
  });

  const formik = useFormik<FormValues>({
    initialValues: {
      title: "",
      type: "",
      category: "",
      amount: "",
      date: "",
      notes: "",
    },
    validationSchema: transactionValidationSchema,
    onSubmit: (values) => {
      mutate(values);
    },
  });

  return {
    formik,
    isPending,
  };
};

export default useForm;
