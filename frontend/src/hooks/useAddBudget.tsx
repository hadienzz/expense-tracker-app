import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useFormik } from "formik";
import { toast } from "sonner";
import validation from "./validation";
import axiosInstance from "@/lib/axios";

export interface FormBudgetValues {
  category: string;
  limit: number;
  threshold: number;
}

const useAddBudget = () => {
  const queryClient = useQueryClient();
  const { budgetingValidationSchema } = validation();

  const { mutate } = useMutation({
    mutationFn: async (body: FormBudgetValues) => {
      try {
        if (body.limit <= 0) {
          return toast.error("Limit tidak bisa 0 atau minus");
        }

        const response = await axiosInstance.post("/budgeting", body, {
          withCredentials: true,
        });
        toast.success(`Berhasil membuat budget ${body.category}`);
        return response.data;
      } catch (err) {
      return  toast.error(`Gagal membuat budget ${formik.values.category}`);
        console.error(err);
      }
    },
    mutationKey: ["budget"],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["budget"] });
    },
  });

  const formik = useFormik<FormBudgetValues>({
    initialValues: {
      category: "",
      limit: 0,
      threshold: 80,
    },
    validationSchema: budgetingValidationSchema,
    onSubmit: (values) => {
      mutate(values);
      formik.resetForm();
    },
  });

  return formik;
};

export default useAddBudget;
