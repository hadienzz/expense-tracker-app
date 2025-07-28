"use client";

import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useFormik } from "formik";
import { toast } from "sonner";

export interface SignInValue {
  email: string;
  password: string;
}

const useSignIn = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: async (values: SignInValue) => {
      try {
        const response = await axios.post(
          "http://localhost:3001/api/user/signin",
          values,
          { withCredentials: true }
        );
        toast.success("Redirecting...");
        return response.data;
      } catch (err) {
        console.error(err);
        toast.error("Data tidak ditemukan");
      }
    },
  });

  const formik = useFormik<SignInValue>({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      mutate(values);
    },
  });

  return formik;
};

export default useSignIn;
