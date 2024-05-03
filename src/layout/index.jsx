import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <div className="flex h-screen overflow-auto">
        {/* Hieii */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main className="h-[100%] bg-[#F6F8FA] dark:bg-[#1A222C]">
            <div className="h-auto mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 bg-[#F6F8FA] dark:bg-[#1A222C] ">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
