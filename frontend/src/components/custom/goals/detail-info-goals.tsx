import { TabsContent } from "@/components/ui/tabs";
import FormInput from "../shared/form-input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { FormikProps } from "formik";
import { FormikGoalsValue } from "@/hooks/useAddGoals";

interface DetailInfoGoalsProps {
  formik: FormikProps<FormikGoalsValue>;
}

const DetailInfoGoals = ({ formik }: DetailInfoGoalsProps) => {
  return (
    <TabsContent value="details" className="">
      <div className="grid grid-cols-2 gap-4 mt-4">
        <FormInput
          type="number"
          label="Target Amount"
          onChange={formik.handleChange}
          value={formik.values.targetAmount}
          name="targetAmount"
          required
          placeholder="0"
        />
        <FormInput
          type="number"
          label="Current Amount"
          onChange={formik.handleChange}
          value={formik.values.currentAmount}
          name="currentAmount"
          placeholder="0"
          required
        />
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4 ">
        <FormInput
          label="Target date (optional)"
          type="date"
          name="targetDate"
          value={formik.values.targetDate}
          onChange={formik.handleChange}
        />
        <Select
          name="priorityLevel"
          value={formik.values.priorityLevel}
          onValueChange={(value) =>
            formik.setFieldValue("priorityLevel", value)
          }
        >
          <SelectGroup>
            <SelectLabel className="text-sm font-medium text-black -mt-1">
              Priority Level
            </SelectLabel>
            <SelectTrigger className="w-full">
              <SelectValue
                placeholder="🟡 Medium Priority"
                className="placeholder:text-black"
              />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="High">🔴 High Priority</SelectItem>
              <SelectItem value="Medium">🟡 Medium Priority</SelectItem>
              <SelectItem value="Low">🟢 Low Priority</SelectItem>
            </SelectContent>
          </SelectGroup>
        </Select>
      </div>
      <div className="w-full flex items-center justify-end mt-4">
        <Button type="submit" className="w-24">
          Save
        </Button>
      </div>
    </TabsContent>
  );
};

export default DetailInfoGoals;
