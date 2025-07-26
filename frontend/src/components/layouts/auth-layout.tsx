import { Wallet } from "lucide-react";
import React from "react";
import { BENEFIT_LIST } from "../../../contents/contents_data";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <main className=" min-h-screen w-screen flex">
      <section className="hidden lg:flex lg:flex-1 justify-center items-center bg-primary relative overflow-hidden text-white">
        <article className="flex flex-col justify-center px-12 py-24 text-primary-foreground relative z-10">
          <div className="flex items-center gap-2 mb-8">
            <Wallet className="w-8 h-8" />
            <h1 className="text-2xl font-semibold">Expense Tracker</h1>
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-4">
              Take control of your finances
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Track expenses, manage budgets, and achieve your financial goals
              with our intuitive expense tracking platform.
            </p>
            {BENEFIT_LIST.map(({ benefit }, idx) => (
              <div className="flex gap-2 items-center" key={idx}>
                <div className="w-2 h-2  bg-white rounded-full"></div>
                <h1 className="text-lg">{benefit}</h1>
              </div>
            ))}
          </div>
          <div className="absolute inset-0 opacity-10 -mt-20">
            <div className="absolute top-20 left-20 w-32 h-32 border border-primary-foreground rounded-full"></div>
            <div className="absolute top-40 right-32 w-24 h-24 border border-primary-foreground rounded-full"></div>
            <div className="absolute top-120 left-32 w-40 h-40 border border-primary-foreground rounded-full"></div>
          </div>
        </article>
      </section>
      <section className="flex flex-1 justify-center items-center relative overflow-hidden text-white bg-background">
        {children}
      </section>
    </main>
  );
};

export default AuthLayout;
