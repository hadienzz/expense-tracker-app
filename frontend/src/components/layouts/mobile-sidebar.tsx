import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Wallet } from "lucide-react";

interface MobileSidebarProps {
  children: React.ReactElement;
}
const MobileSidebar = ({ children }: MobileSidebarProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <div className="flex">
            <Wallet />
            <SheetTitle>Expense Tracker</SheetTitle>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
