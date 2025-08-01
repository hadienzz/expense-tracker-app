"use client";

import AuthHeader from "@/components/custom/shared/auth-header";
import FormInput from "@/components/custom/shared/form-input";
import AuthLayout from "@/components/layouts/auth-layout";
import { Button } from "@/components/ui/button";
import useSignup, { SignUpFormValue } from "@/hooks/useSignup";
import { FormikProps } from "formik";

const SignUpPage = () => {
  const formik: FormikProps<SignUpFormValue> = useSignup();

  return (
    <AuthLayout>
      <article>
        <AuthHeader
          title="Create your account"
          text="Start tracking your expenses today"
        />
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
          <div className="flex gap-2">
            <FormInput
              label="First Name"
              name="firstName"
              placeholder="Enter your first name"
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
            <FormInput
              label="Last Name"
              name="lastName"
              placeholder="Enter your last name"
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
          </div>
          <div className="mt-6 flex flex-col gap-4">
            <FormInput
              label="Email Address"
              name="email"
              placeholder="Enter your email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <FormInput
              type="password"
              label="Password"
              name="password"
              placeholder="Create a password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <FormInput
              type="password"
              label="Confirm Password"
              name="confirmPassword"
              placeholder="Confirm your password"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
            />
            <Button className="flex-1">Create Account</Button>
          </div>
        </form>
      </article>
    </AuthLayout>
  );
};
export default SignUpPage;
