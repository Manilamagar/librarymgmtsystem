// src/components/Sidebar/Sidebar.jsx
import React from "react";
import {
  BookOpen,
  ClipboardList,
  Home,
  LogOut,
  PlusSquare,
  Repeat,
  FileMinus,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const navItems = [
    { name: "Dashboard", icon: <Home size={20} />, path: "/librariandashboard" },
    { name: "Daily Tasks", icon: <ClipboardList size={20} />, path: "/dailytasks" },

    { name: "Manage Books", icon: <BookOpen size={20} />, path: "/catalog/manage" },
    { name: "Add Books", icon: <PlusSquare size={20} />, path: "/displaybooks" },
    { name: "Weeding Tool", icon: <FileMinus size={20} />, path: "/catalog/weeding" },
    { name: "Checkout", icon: <Repeat size={20} />, path: "/checkout" },
    { name: "Returns", icon: <Repeat size={20} />, path: "/return" },
    { name: "Overdue Books", icon: <Repeat size={20} />, path: "/circulation/overdue" },
    { name: "Logout", icon: <LogOut size={20} />, path: "/" },
  ];

  return (
    <aside className="w-64 h-screen bg-indigo-900 text-gray-100 fixed top-0 left-0 shadow-lg flex flex-col">
      {/* Header */}
      <div className="p-6 text-2xl font-extrabold border-b border-indigo-700 text-indigo-300">
        Library Admin
      </div>

      {/* Navigation */}
      <nav className="flex-grow mt-6 space-y-2">
        {navItems.map(({ name, icon, path }) => (
          <NavLink
            to={path}
            key={name}
            className={({ isActive }) =>
              `flex items-center gap-4 px-6 py-3 text-lg font-medium transition 
               ${
                 isActive
                   ? "bg-indigo-600 text-white shadow-lg"
                   : "text-indigo-300 hover:bg-indigo-700 hover:text-white"
               } 
               rounded-lg transform hover:scale-105`
            }
          >
            <span className="text-indigo-300">{icon}</span>
            {name}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-6 border-t border-indigo-700 text-center text-sm text-indigo-400">
        &copy; 2025 Library System
      </div>
    </aside>
  );
};

export default Sidebar;
