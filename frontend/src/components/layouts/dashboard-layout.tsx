import React from "react";
import Sidebar from "../custom/sidebar";
import Header from "../custom/header";

const DashboardLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="flex bg-background">
      <div>
        <Sidebar />
      </div>
      <div className="flex-1">
        <div>
          <Header />
        </div>
        <main className="px-6">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
