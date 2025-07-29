
import React from 'react';
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = ({ children, showSidebar = true }) => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar on the left */}
      {showSidebar && <Sidebar />}

      {/* Main content (Navbar on top) */}
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
