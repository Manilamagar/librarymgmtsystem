// src/pages/dashboard/LibrarianDashboard.jsx
import React, { useState } from "react";
import { Menu, Book, Users, ClipboardList } from "lucide-react";
import Sidebar from "./Sidebar";

const LibrarianDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100 text-gray-800">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 transition-transform bg-white shadow-md md:static md:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar />
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="flex items-center justify-between bg-white border-b px-6 py-4 sticky top-0 z-20 shadow-sm">
          <button
            className="md:hidden text-gray-700"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu size={24} />
          </button>
          <h1 className="text-xl font-semibold text-indigo-700 tracking-wide">
            Librarian Dashboard
          </h1>
          <div className="hidden md:flex items-center space-x-4">
            <span className="text-sm text-gray-600">Welcome, Admin</span>
          </div>
        </header>

        {/* Static Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          {/* Welcome */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome Back, Admin!</h2>
            <p className="text-gray-600">Here’s an overview of today’s library activity.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-5 rounded-2xl shadow hover:shadow-md transition">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">Total Books</h3>
                  <p className="text-2xl font-bold text-indigo-600">4,210</p>
                </div>
                <Book size={32} className="text-indigo-500" />
              </div>
            </div>
            <div className="bg-white p-5 rounded-2xl shadow hover:shadow-md transition">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">Borrowed Books</h3>
                  <p className="text-2xl font-bold text-amber-600">892</p>
                </div>
                <ClipboardList size={32} className="text-amber-500" />
              </div>
            </div>
            <div className="bg-white p-5 rounded-2xl shadow hover:shadow-md transition">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">Registered Users</h3>
                  <p className="text-2xl font-bold text-emerald-600">1,378</p>
                </div>
                <Users size={32} className="text-emerald-500" />
              </div>
            </div>
          </div>

          {/* Recent Activities (Mock) */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>📚 <strong>Ramesh</strong> borrowed <em>"JavaScript for Beginners"</em>.</li>
              <li>📕 <strong>Sita</strong> returned <em>"Digital Logic"</em>.</li>
              <li>➕ <strong>Admin</strong> added <em>"AI in Education"</em> to the catalog.</li>
              <li>🧾 <strong>Library</strong> processed 5 overdue notices today.</li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LibrarianDashboard;
