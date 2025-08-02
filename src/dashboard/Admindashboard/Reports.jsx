import React from "react";
import Sidebar from "./Sidebar";
import { BarChart2, PieChart, Users, DollarSign } from "lucide-react";

const Reports = () => {
  // Static report data
  const reports = [
    {
      id: 1,
      title: "Book Circulation",
      icon: <BarChart2 size={32} className="text-indigo-600" />,
      description: "Total books borrowed this month",
      value: "1,235",
      trend: "+12% from last month",
      bgColor: "bg-indigo-50",
      iconBg: "bg-indigo-100",
    },
    {
      id: 2,
      title: "Active Users",
      icon: <Users size={32} className="text-emerald-600" />,
      description: "Users active in the past 30 days",
      value: "450",
      trend: "+8% from last month",
      bgColor: "bg-emerald-50",
      iconBg: "bg-emerald-100",
    },
    {
      id: 3,
      title: "Fines Collected",
      icon: <DollarSign size={32} className="text-red-600" />,
      description: "Total fines collected this year",
      value: "Rs. 58,000",
      trend: "-4% from last year",
      bgColor: "bg-red-50",
      iconBg: "bg-red-100",
    },
    {
      id: 4,
      title: "Category Distribution",
      icon: <PieChart size={32} className="text-yellow-600" />,
      description: "Books by category in inventory",
      value: "Programming 40%, Fiction 30%, Others 30%",
      trend: null,
      bgColor: "bg-yellow-50",
      iconBg: "bg-yellow-100",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />

      <main className="flex-1 p-8 md:ml-64">
        <h1 className="text-4xl font-extrabold text-indigo-700 dark:text-indigo-400 mb-10 tracking-wide">
          System Reports
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reports.map(({ id, title, icon, description, value, trend, bgColor, iconBg }) => (
            <div
              key={id}
              className={`${bgColor} dark:bg-opacity-20 p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer`}
              role="group"
              tabIndex={0}
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full mb-4 ${iconBg} dark:bg-opacity-30`}>
                {icon}
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-1">
                {title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-3">{description}</p>
              <p className="text-3xl font-extrabold text-indigo-700 dark:text-indigo-300 mb-2">{value}</p>
              {trend && (
                <p
                  className={`text-sm font-medium ${
                    trend.startsWith("+") ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
                  }`}
                >
                  {trend}
                </p>
              )}
              <div className="mt-4 h-1 rounded-full bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-600 opacity-50 group-focus:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Reports;
