import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavBar from "../../Component/admin/AdminNavBar";
import AdminSidebar from "../../Component/admin/AdminSidebar";

function Layout() {
  return (
    <div>
      <AdminNavBar />

      <div className="flex">
        <AdminSidebar />
        <div className="flex-1 px-4 py-10 md:px-10 h-[calc (100vh-64px)] overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;