import axiosInstance from "@/lib/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const useDelete = () => {
  const queryClient = useQueryClient();
  const { mutate: handleDelete } = useMutation({
    mutationFn: async (id: number) => {
      try {
        const response = await axiosInstance.delete(`/transaction/${id}`, {
          withCredentials: true,
        });
        toast.success("Berhasil menghapus data transaksi");
        return response.data;
      } catch (err) {
        console.error(err);
        toast.error("Gagal menghapus data transaksi");
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["transaction"] });
      queryClient.invalidateQueries({ queryKey: ["budget"] });
    },
  });

  return {
    handleDelete,
  };
};

export default useDelete;
