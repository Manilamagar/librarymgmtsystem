// src/components/Layout/LayoutWrapper.jsx

import { useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";


const LayoutWrapper = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar toggleSidebar={() => setSidebarOpen(true)} />
      <Sidebar isOpen={sidebarOpen} closeSidebar={() => setSidebarOpen(false)} />
      <main className="flex-grow pt-20 pb-12">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default LayoutWrapper;