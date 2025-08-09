import axiosInstance from "@/lib/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useFormik } from "formik";
import { useState } from "react";
import { toast } from "sonner";

export interface FormikProgressGoals {
  addProgress: string;
}

const useAddProgressGoals = () => {
  type goalsInfo = {
    targetAmount: string | null;
    currentAmount: string | null;
  };

  const queryClient = useQueryClient();
  const [isOpen, setIsOpen] = useState(false);
  const [goalsId, setGoalsId] = useState<null | number>(null);
  const [goalsInfo, setGoalsInfo] = useState<goalsInfo>({
    targetAmount: null,
    currentAmount: null,
  });

  const handleOpenModal = (
    id: number,
    targetAmount: string,
    currentAmount: string
  ) => {
    setIsOpen(true);
    setGoalsId(id);
    setGoalsInfo((prevState) => ({
      ...prevState,
      targetAmount,
      currentAmount,
    }));
  };

  const handleClose = () => {
    setIsOpen(false);
    setGoalsId(null);
    setGoalsInfo((prevState) => ({
      ...prevState,
      targetAmount: null,
      currentAmount: null,
    }));
  };

  const { mutate, isPending } = useMutation({
    mutationFn: async (body: FormikProgressGoals) => {
      try {
        const response = await axiosInstance.patch(`/goals/${goalsId}`, body, {
          withCredentials: true,
        });
        return response.data;
      } catch (err) {
        console.error(err);
        toast.error("Gagal menambah progress target");
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["goals"] });
      toast.success("Berhasil Menambah progress target");
      handleClose();
    },
  });

  const formik = useFormik({
    initialValues: {
      addProgress: "",
    },
    onSubmit: (value) => {
      mutate(value);
    },
  });

  return {
    formik,
    isOpen,
    handleOpenModal,
    handleClose,
    goalsInfo,
  };
};

export default useAddProgressGoals;
