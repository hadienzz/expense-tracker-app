"use client";

import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/lib/axios";
import { useRouter } from "next/navigation";

const useGetTransaction = () => {
  const router = useRouter();

  const { data, isLoading } = useQuery({
    queryFn: async () => {
      try {
        const response = await axiosInstance.get("/transaction", {
          withCredentials: true,
        });
        return response.data;
      } catch (err: any) {
        console.error(err);
        if (err.response?.status === 401) {
          router.push("/login");
        }
      }
    },

    queryKey: ["transaction"],
  });

  return {
    data,
    isLoading,
  };
};

export default useGetTransaction;
