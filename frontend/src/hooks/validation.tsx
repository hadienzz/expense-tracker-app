import * as Yup from "yup";

const validation = () => {
  const today = new Date().toISOString().split("T")[0];

  const transactionValidationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    type: Yup.string().required("Type is required"),
    amount: Yup.string().required("Amount is required"),
    category: Yup.string().required("Category is required"),
    date: Yup.date()
      .max(today, "Date cannot be in the future")
      .required("Date is required"),
    notes: Yup.string(),
  });

  const signUpValidationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name Is Required"),
    lastName: Yup.string(),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Password must match")
      .required("Confirm your password"),
  });

  const budgetingValidationSchema = Yup.object().shape({
    category: Yup.string().required("Category is required"),
    limit: Yup.number().required("limit is required"),
  });

  return {
    today,
    transactionValidationSchema,
    signUpValidationSchema,
    budgetingValidationSchema,
  };
};

export default validation;
