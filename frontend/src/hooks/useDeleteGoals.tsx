import axiosInstance from "@/lib/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const useDeleteGoals = () => {
  const queryClient = useQueryClient();
  const { mutate: handleDelete, isPending } = useMutation({
    mutationFn: async (id: number) => {
      try {
        const response = await axiosInstance.delete(`/goals/${id}`, {
          withCredentials: true,
        });
        toast.success("Berhasil menghapus target");
        return response.data;
      } catch (err) {
        console.error(err);
        return toast.error("Gagal menghapus target");
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["goals"] });
    },
  });
  return {
    handleDelete,
  };
};

export default useDeleteGoals;
