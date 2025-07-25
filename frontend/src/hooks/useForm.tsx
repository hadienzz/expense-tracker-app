'use client'

import { useFormik } from "formik";
import validation from "./validation";
import { useMutation } from "@tanstack/react-query";

export interface FormValues {
  title: string;
  type: string;
  amount: string;
  category: string;
  date: string;
  notes: string;
}

const useForm = () => {
  const { validationSchema } = validation();

  const { mutate, isPending } = useMutation({});

  const formik = useFormik<FormValues>({
    initialValues: {
      title: "",
      type: "",
      category: "",
      amount: "",
      date: "",
      notes: "",
    },
    validationSchema,
    onSubmit: (values) => {},
  });

  return formik;
};

export default useForm;
