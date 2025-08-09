import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, Hamburger, Search } from "lucide-react";
import DialogTransaction from "./dialog-transaction";
import MobileSidebar from "@/components/layouts/mobile-sidebar";

const Header = () => {
  return (
    <header className="border-b bg-card">
      <div className="flex items-center h-16 px-6 gap-2">
        <div className="relative md:w-64 w-full">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search transactions..."
            className="w-full bg-background pl-8"
          />
        </div>
        <DialogTransaction>
          <Button className="lg:w-48 w-32 text-sm ">+ Add Transaction</Button>
        </DialogTransaction>
        <MobileSidebar>
          <Hamburger className="" />
        </MobileSidebar>
      </div>
    </header>
  );
};

export default Header;
