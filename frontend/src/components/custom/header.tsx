import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, Search } from "lucide-react";
import DialogTransaction from "./dialog-transaction";

const Header = () => {
  return (
    <header className="border-b bg-card">
      <div className="flex items-center h-16 px-6">
        <div className="relative md:w-64 w-full">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search transactions..."
            className="w-full bg-background pl-8"
          />
        </div>
        <Button variant="outline" size="icon" className="mr-2 lg:mr-4">
          <Bell className="h-4 w-4" />
        </Button>
        <DialogTransaction>
          <Button className="lg:w-48 w-36">+ Add Transaction</Button>
        </DialogTransaction>
      </div>
    </header>
  );
};

export default Header;
