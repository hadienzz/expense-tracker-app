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

type TransactionItem = {
  title: string;
  createdAt: string;
  type: string;
  amount: string;
};

export const TRANSACTION_ITEM: TransactionItem[] = [
  {
    title: "Salary",
    createdAt: "Today, 12.30 PM",
    type: "Income",
    amount: "2,500.00",
  },
  {
    title: "Grocery Shopping",
    createdAt: "Jul 20, 2023",
    type: "Food",
    amount: "-2,500.00",
  },
  {
    title: "Netflix Subscription",
    createdAt: "Jul 20, 2023",
    type: "Entertainment",
    amount: "-14.99",
  },
];

type BenefitList = {
  benefit: string;
};

export const BENEFIT_LIST: BenefitList[] = [
  {
    benefit: "Real-time expense tracking",
  },
  {
    benefit: "Multi-currency support",
  },
  {
    benefit: "Detailed analytics & reports",
  },
];
