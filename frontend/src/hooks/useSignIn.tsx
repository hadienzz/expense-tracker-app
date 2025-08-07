"use client";

import axiosInstance from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export interface SignInValue {
  email: string;
  password: string;
}

const useSignIn = () => {
  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationFn: async (values: SignInValue) => {
      try {
        const response = await axiosInstance.post("user/signin", values, {
          withCredentials: true,
        });
        toast.success("Redirecting...");
        router.push("/");
        return response.data;
      } catch (err) {
        console.error(err);
        return toast.error("Data tidak ditemukan");
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
