import React from "react";
import Sidebar from "./sidebar";
import AnalyticsHeader from "./analytics-header";
interface AnalyticsLayoutProps {
  children: React.ReactNode;
}

const AnalyticsLayout = ({ children }: AnalyticsLayoutProps) => {
  return (
    <main className="flex overflow-hidden">
      <div>
        <Sidebar />
      </div>
      <div className="flex-1 py-4 ">
        <AnalyticsHeader />
        <main className="p-6">{children}</main>
      </div>
    </main>
  );
};

export default AnalyticsLayout;
