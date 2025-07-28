import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import { toast } from "sonner";
import validation from "./validation";

export interface FormBudgetValues {
  category: string;
  limit: number;
}

const useAddBudget = () => {
  const { budgetingValidationSchema } = validation();

  const { mutate } = useMutation({
    mutationFn: async (body: FormBudgetValues) => {
      try {
      } catch (err) {
        toast.error(`Gagal membuat budget ${formik.values.category}`);
        console.error(err);
      }
    },
    mutationKey: ["budget", "transaction"],
  });

  const formik = useFormik<FormBudgetValues>({
    initialValues: {
      category: "",
      limit: 0,
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
