"use client";

import axios from "axios";
import { useFormik } from "formik";
import validation from "./validation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

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
        const response = await axios.post(
          "http://localhost:3001/api/transaction",
          values,
          { withCredentials: true }
        );
        toast.success("Data berhasil disimpan");
        queryClient.invalidateQueries({ queryKey: ["transaction"] });

        return response.data;
      } catch (err) {
        toast.error("Gagal menyimpan data");

        console.error(err);
      }
    },
    onSuccess: () => {
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
