import axiosInstance from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

const useGetBudget = () => {
  const { data, isLoading } = useQuery({
    queryFn: async () => {
      try {
        const response = await axiosInstance.get("/budgeting", {
          withCredentials: true,
        });

        return response.data;
      } catch (err) {
        console.error(err);
        toast.error("Gagal mendapatkan budget");
      }
    },
    queryKey: ["budget"],
  });

  return { data, isLoading };
};

export default useGetBudget;
