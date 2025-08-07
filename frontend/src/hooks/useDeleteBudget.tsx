"use client";

import axiosInstance from "@/lib/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const useDeleteBudget = () => {
  const queryClient = useQueryClient();
  const { mutate: handleDeleteBudget, isPending } = useMutation({
    mutationFn: async (id: any) => {
      try {
        const response = axiosInstance.delete(`/budgeting/${id}`, {
          withCredentials: true,
        });

        return response;
      } catch (err) {
        console.error(err);
        toast.error("Gagal menghapus budget");
      }
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["budget"] });
      return toast.success("Berhasil menghapus budget");
    },
  });

  return {
    handleDeleteBudget,
    isPending,
  };
};

export default useDeleteBudget;
