import React from "react";
import {
  Home,
  Users,
  Settings,
  Book,
  FileBarChart2,
  ShieldCheck,
  MessageCircle,
  History,
  DollarSign,
  LayoutDashboard,
  BookOpen,
  CalendarDays,
  Briefcase,

} from "lucide-react";
import { NavLink } from "react-router-dom";

const menu = [
  { label: "Dashboard", icon: Home, path: "/admindashboard" },
  { label: "Manage Users", icon: Users, path: "/users" },
  { label: "Book Inventory", icon: Book, path: "/bookinventory" },
  { label: "Reports", icon: FileBarChart2, path: "/reports" },
  { label: "Fines Overview", icon: DollarSign, path: "/admin/fines" },
  { label: "Reading Logs", icon: History, path: "/admin/reading-history" },
  { label: "Room Bookings", icon: CalendarDays, path: "/admin/room-bookings" },
  { label: "Group Study", icon: Briefcase, path: "/admin/group-study" },
  { label: "Recommended", icon: BookOpen, path: "/admin/recommended" },
  { label: "New Arrivals", icon: LayoutDashboard, path: "/admin/new-arrivals" },
  { label: "Feedback", icon: MessageCircle, path: "/admin/feedback" },
  { label: "Security Logs", icon: ShieldCheck, path: "/admin/security" },
  { label: "System Settings", icon: Settings, path: "/admin/settings" },
];

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 shadow-lg z-50 overflow-y-auto">
      <div className="p-6 text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 tracking-wide select-none">
        Admin Panel
      </div>

      <nav className="mt-6 flex flex-col gap-1 px-4">
        {menu.map((item, index) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `group flex items-center gap-4 px-5 py-3 rounded-lg font-semibold text-sm transition duration-300 ease-in-out ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-lg"
                    : "text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 dark:text-gray-300 dark:hover:bg-indigo-700 dark:hover:text-white"
                }`
              }
              aria-current={({ isActive }) => (isActive ? "page" : undefined)}
            >
              <Icon
                size={22}
                className={`transition-transform duration-300 ${
                  // Icon color animation on active/inactive
                  window.location.pathname === item.path
                    ? "text-white scale-110"
                    : "text-indigo-600 group-hover:text-indigo-700 dark:text-indigo-400 dark:group-hover:text-indigo-200"
                }`}
              />
              <span className="truncate">{item.label}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
