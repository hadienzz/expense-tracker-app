import React from "react";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const FormInput = ({ label, ...props }: FormInputProps) => {
  return (
    <div className="flex flex-col gap-3">
      <Label className="text-black">{label}</Label>
      <Input {...props} className="text-black h-11 w-full" />
    </div>
  );
};

export default FormInput;
