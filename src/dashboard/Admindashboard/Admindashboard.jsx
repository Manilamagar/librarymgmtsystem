import React from "react";
import Sidebar from "./Sidebar";
import {
  Users,
  BarChart2,
  Book,
  Settings,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    title: "Manage Users",
    description: "Add, remove or update user roles and permissions.",
    icon: <Users size={36} className="text-indigo-600" />,
    gradient: "from-indigo-500 to-indigo-300",
  },
  {
    title: "System Reports",
    description: "View reports on fines, book circulation, and usage.",
    icon: <BarChart2 size={36} className="text-purple-600" />,
    gradient: "from-purple-500 to-purple-300",
  },
  {
    title: "Book Inventory",
    description: "Track and manage book stock, categories, and metadata.",
    icon: <Book size={36} className="text-pink-600" />,
    gradient: "from-pink-500 to-pink-300",
  },
  {
    title: "System Settings",
    description: "Configure system-wide preferences and backup.",
    icon: <Settings size={36} className="text-yellow-600" />,
    gradient: "from-yellow-400 to-yellow-200",
  },
  {
    title: "Feedback",
    description: "Read feedback from users and respond accordingly.",
    icon: <MessageCircle size={36} className="text-green-600" />,
    gradient: "from-green-400 to-green-300",
  },
  {
    title: "Security Logs",
    description: "Audit login attempts, changes, and system access.",
    icon: <ShieldCheck size={36} className="text-red-600" />,
    gradient: "from-red-400 to-red-300",
  },
];

const AdminDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />

      <main className="flex-1 p-8 md:ml-64">
        <h1 className="text-4xl font-extrabold text-indigo-700 dark:text-indigo-400 mb-10 tracking-tight">
          Admin Dashboard
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map(({ title, description, icon, gradient }, idx) => (
            <div
              key={idx}
              className="relative rounded-xl shadow-lg overflow-hidden bg-white dark:bg-gray-800 hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
            >
              <div
                className={`absolute inset-x-0 top-0 h-24 rounded-t-xl bg-gradient-to-r ${gradient} opacity-90`}
                aria-hidden="true"
              />

              <div className="relative p-8 pt-16">
                <div className="absolute -top-12 left-8 bg-white dark:bg-gray-900 rounded-full p-3 shadow-md">
                  {icon}
                </div>

                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
