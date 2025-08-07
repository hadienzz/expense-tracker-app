"use client";

import axiosInstance from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

const useGetGoals = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["goals"],
    queryFn: async () => {
      try {
        const response = await axiosInstance.get("/goals", {
          withCredentials: true,
        });

        return response.data;
      } catch (err) {
        console.error(err);
        return toast.error("Gagal mendapatkan target");
      }
    },
  });
  return {
    data,
    isLoading,
  };
};

export default useGetGoals;
