import {
  CreditCard,
  Home,
  BarChart4,
  Calendar,
  PieChart,
  Settings,
} from "lucide-react";
import { JSX } from "react";

type NavItem = {
  icon: JSX.Element;
  label: string;
};

export const NAV_ITEM: NavItem[] = [
  { icon: <Home className="w-4 h-4" />, label: "Dashboard" },
  { icon: <CreditCard className="w-4 h-4" />, label: "Transactions" },
  { icon: <BarChart4 className="w-4 h-4" />, label: "Analytics" },
  { icon: <Calendar className="w-4 h-4" />, label: "Budget" },
  { icon: <PieChart className="w-4 h-4" />, label: "Reports" },
  { icon: <Settings className="w-4 h-4" />, label: "Settings" },
];
