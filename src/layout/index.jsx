import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <div className="flex h-screen overflow-hidden">
        {/* Hieii */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main className="h-[100%]">
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 bg-[#F6F8FA] dark:bg-[#1A222C] h-[100%] overflow-hidden">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
