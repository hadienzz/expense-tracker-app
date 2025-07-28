"use client";

import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import validation from "./validation";
import axios from "axios";
import { toast } from "sonner";

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
    mutationFn: async (values: Omit<SignUpFormValue, "confirmPassword">) => {
      try {
        const { email, firstName, lastName, password } = values;
        console.log(values);
        const response = await axios.post(
          "http://localhost:3001/api/user/signup",
          { email, firstName, lastName, password }
        );
        toast.success("Berhasil membuat akun");
        console.log(response)
        return response.data;
      } catch (err) {
        toast.error("Gagal membuat akun");
        console.error(err);
      }
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
      const { confirmPassword, ...dataTosend } = value;
      mutate(dataTosend);
      formik.resetForm();
    },
  });

  return formik;
};

export default useSignup;
