import axiosInstance from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

const useGetTransactionSummary = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["budget"],
    queryFn: async () => {
      try {
        const response = await axiosInstance.get("/transaction/summary", {
          withCredentials: true,
        });
        return response.data;
      } catch (err) {
        console.error(err);
        toast.error("Gagal mendapatkan data summary");
      }
    },
  });

  return {
    data,
    isLoading,
  };
};

export default useGetTransactionSummary;
