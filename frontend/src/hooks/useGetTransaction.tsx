'use client'

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetTransaction = () => {
  const { data, isLoading } = useQuery({
    queryFn: async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/transaction",
          { withCredentials: true }
        );
        return response.data;
      } catch (err) {
        console.error(err);
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
