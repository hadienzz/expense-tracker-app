"use client";

import AuthHeader from "@/components/custom/shared/auth-header";
import FormInput from "@/components/custom/shared/form-input";
import AuthLayout from "@/components/layouts/auth-layout";
import { Button } from "@/components/ui/button";
import useSignIn, { SignInValue } from "@/hooks/useSignIn";
import { FormikProps } from "formik";

const LoginPage = () => {
  const formik: FormikProps<SignInValue> = useSignIn();

  return (
    <AuthLayout>
      <div className="w-1/2">
        <AuthHeader
          title="Welcome back"
          text="Sign in to your account to continue"
        />
        <form action="" className="grid gap-4" onSubmit={formik.handleSubmit}>
          <FormInput
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            label="Email"
            placeholder="Enter your email"
            required
          />
          <FormInput
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            label="Password"
            type="password"
            placeholder="Enter your password"
            required
          />

          <Button>Sign in</Button>
        </form>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
