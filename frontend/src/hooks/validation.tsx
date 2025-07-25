import * as Yup from "yup";

const validation = () => {
  const today = new Date().toISOString().split("T")[0];

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    type: Yup.string().required("Type is required"),
    amount: Yup.string().required("Amount is required"),
    category: Yup.string().required("Category is required"),
    date: Yup.date()
      .max(today, "Date cannot be in the future")
      .required("Date is required"),
    notes: Yup.string(),
  });

  return {
    today,
    validationSchema,
  };
};

export default validation;
