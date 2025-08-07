'use client'

import React, { JSX } from "react";
import Sidebar from "../custom/shared/sidebar";
import AnalyticsHeader from "../custom/analytics/analytics-header";

interface AnalyticsLayoutProps {
  children: React.ReactNode;
  icon: JSX.Element;
  title: string;
}

const AnalyticsLayout = ({ children, icon, title }: AnalyticsLayoutProps) => {
  return (
    <main className="flex overflow-hidden">
      <div>
        <Sidebar />
      </div>
      <div className="flex-1 py-4 ">
        <AnalyticsHeader icon={icon} title={title} />
        <main className="p-6">{children}</main>
      </div>
    </main>
  );
};

export default AnalyticsLayout;
