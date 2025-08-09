import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { formatPrice } from "@/lib/formatValue";
import FormInput from "../shared/form-input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectLabel,
  SelectGroup,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

interface DialogEditGoalsProps {
  isOpen: boolean;
  onClose: () => void;
}

const DialogEditGoals = ({ isOpen, onClose }: DialogEditGoalsProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Target</DialogTitle>
          <DialogDescription>Edit dan perbarui targetmu!</DialogDescription>
        </DialogHeader>

        <form className="space-y-4">
          <FormInput label="Judul Target" name="title" />
          <FormInput label="Deskripsi" name="description" />
          <div className="grid grid-cols-2 gap-2">
            <FormInput label="Nominal Target" name="targetAmount" />
            <FormInput label="Nominal Saat Ini" name="currentAmount" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <FormInput label="Target Date" type="date" name="targetDate" />
            <Select name="priorityLevel">
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
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DialogEditGoals;
