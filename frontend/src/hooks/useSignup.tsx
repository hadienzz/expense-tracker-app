"use client";

import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import validation from "./validation";

export interface SignUpFormValue {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const useSignup = () => {
  const { signUpValidationSchema } = validation();

  const { mutate } = useMutation({
    mutationFn: async (values: SignUpFormValue) => {
    
    },
  });

  const formik = useFormik<SignUpFormValue>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: signUpValidationSchema,
    onSubmit: (value) => {
      mutate(value);
      formik.resetForm()
    },
  });

  return formik;
};

export default useSignup;
