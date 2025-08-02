import React from "react";
import Sidebar from "../Studentdashboard/Sidebar";
import {
  BookOpen,
  DollarSign,
  History,
  Sparkles,
  Library,
  Users,
} from "lucide-react";

const StudentDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-6 ml-0 md:ml-64">
        <h1 className="text-3xl font-bold text-indigo-700 mb-6">
          Welcome to Your Dashboard
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* My Books */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 group cursor-pointer">
            <div className="flex items-center justify-between mb-4">
              <BookOpen size={32} className="text-indigo-500" />
              <span className="text-sm text-gray-400 group-hover:text-indigo-600 transition">
                View →
              </span>
            </div>
            <h2 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-700 transition">
              My Books
            </h2>
            <p className="text-gray-600 text-sm">
              View books you have currently borrowed.
            </p>
          </div>

          {/* Fines */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 group cursor-pointer">
            <div className="flex items-center justify-between mb-4">
              <DollarSign size={32} className="text-red-500" />
              <span className="text-sm text-gray-400 group-hover:text-indigo-600 transition">
                View →
              </span>
            </div>
            <h2 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-700 transition">
              Fines
            </h2>
            <p className="text-gray-600 text-sm">
              Check your overdue fines or penalties.
            </p>
          </div>

          {/* Reading History */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 group cursor-pointer">
            <div className="flex items-center justify-between mb-4">
              <History size={32} className="text-yellow-500" />
              <span className="text-sm text-gray-400 group-hover:text-indigo-600 transition">
                View →
              </span>
            </div>
            <h2 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-700 transition">
              Reading History
            </h2>
            <p className="text-gray-600 text-sm">
              Explore your reading and borrowing history.
            </p>
          </div>

          {/* Recommended */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 group cursor-pointer">
            <div className="flex items-center justify-between mb-4">
              <Sparkles size={32} className="text-green-500" />
              <span className="text-sm text-gray-400 group-hover:text-indigo-600 transition">
                View →
              </span>
            </div>
            <h2 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-700 transition">
              Recommended
            </h2>
            <p className="text-gray-600 text-sm">
              Discover books recommended for you.
            </p>
          </div>

          {/* New Arrivals */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 group cursor-pointer">
            <div className="flex items-center justify-between mb-4">
              <Library size={32} className="text-blue-500" />
              <span className="text-sm text-gray-400 group-hover:text-indigo-600 transition">
                View →
              </span>
            </div>
            <h2 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-700 transition">
              New Arrivals
            </h2>
            <p className="text-gray-600 text-sm">
              See what’s new in the library collection.
            </p>
          </div>

          {/* Room Booking */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 group cursor-pointer">
            <div className="flex items-center justify-between mb-4">
              <Users size={32} className="text-purple-500" />
              <span className="text-sm text-gray-400 group-hover:text-indigo-600 transition">
                View →
              </span>
            </div>
            <h2 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-700 transition">
              Room Booking
            </h2>
            <p className="text-gray-600 text-sm">
              Reserve a room for study or discussion.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;
