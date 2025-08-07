import { TabsContent } from "@/components/ui/tabs";
import FormInput from "../shared/form-input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "@/components/ui/select";
import { FormikProps } from "formik";
import { FormikGoalsValue } from "@/hooks/useAddGoals";

interface BasicInfoGoals {
  formik: FormikProps<FormikGoalsValue>;
}

const BasicInfoGoals = ({ formik }: BasicInfoGoals) => {
  const goalTypes = [
    {
      value: "Savings",
      label: "💰 Savings Goal",
      description: "General savings target",
    },
    {
      value: "Emergency",
      label: "🛡️ Emergency Fund",
      description: "Financial safety net",
    },
    {
      value: "Desire",
      label: "🛍️ Desire Purchase",
      description: "Something you want to buy",
    },
    {
      value: "Travel",
      label: "✈️ Travel Goal",
      description: "Vacation or trip planning",
    },
    {
      value: "Education",
      label: "🎓 Education Fund",
      description: "Learning and development",
    },
    {
      value: "Investment",
      label: "📈 Investment Goal",
      description: "Building investment portfolio",
    },
    {
      value: "Other",
      label: "📦 Other Goal",
      description: "Custom financial goal",
    },
  ];

  return (
    <TabsContent value="info" className="mt-2 space-y-3">
      <FormInput
        label="Goal Title"
        name="title"
        onChange={formik.handleChange}
        value={formik.values.title}
      />
      <Select
        name="type"
        value={formik.values.type}
        onValueChange={(value) => formik.setFieldValue("type", value)}
      >
        <Label>Goal Type</Label>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select goal type" />
        </SelectTrigger>
        <SelectContent className="w-full">
          {goalTypes.map((type) => (
            <SelectItem key={type.value} value={type.value}>
              <div>
                <div className="font-medium">{type.label}</div>
                <div className="text-xs text-slate-500">{type.description}</div>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
        <FormInput
          label="Description (optional)"
          name="description"
          onChange={formik.handleChange}
          value={formik.values.description}
        />
      </Select>
    </TabsContent>
  );
};

export default BasicInfoGoals;
