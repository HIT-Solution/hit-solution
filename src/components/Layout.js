import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      {/* DashboardSidebar */}

      <Sidebar />

      {/* main Content  */}

      <main className="ml-64 w-full bg-gray-100 h-screen p-6 overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default Layout;
