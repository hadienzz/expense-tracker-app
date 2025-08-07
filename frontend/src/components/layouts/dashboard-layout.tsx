'use client'

import React, { useEffect } from "react";
import Sidebar from "../custom/shared/sidebar";
import Header from "../custom/shared/header";
import { useRouter } from "next/navigation";

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
