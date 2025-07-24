import { Wallet } from "lucide-react";
import React from "react";
import { NAV_ITEM } from "../../../contents/contents_data";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const NavItem = ({ icon, label, active }: NavItemProps) => {
  return (
    <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent">
      {icon}
      <span>{label}</span>
    </div>
  );
};

const Sidebar = () => {
  return (
    <aside className="hidden border-r bg-card h-screen w-64 p-4 md:flex flex-col">
      <div className="flex gap-2 px-2 items-center mb-8">
        <Wallet />
        <h1 className="text-lg font-medium">Expense Tracker</h1>
      </div>
      <div className="space-y-1">
        {NAV_ITEM.map((item, idx) => (
          <NavItem {...item} key={idx} />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
