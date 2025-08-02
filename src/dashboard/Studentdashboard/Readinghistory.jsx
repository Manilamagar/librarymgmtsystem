import React from "react";
import Sidebar from "../Studentdashboard/Sidebar";

const ReadingHistory = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6 ml-0 md:ml-64">
        <h1 className="text-3xl font-bold text-indigo-700 mb-6">Reading History</h1>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-indigo-50 text-gray-600 uppercase text-xs font-semibold">
              <tr>
                <th className="px-6 py-3 text-left">Book Title</th>
                <th className="px-6 py-3 text-left">Author</th>
                <th className="px-6 py-3 text-left">Borrowed Date</th>
                <th className="px-6 py-3 text-left">Returned Date</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              <tr className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 font-medium text-gray-800">Atomic Habits</td>
                <td className="px-6 py-4 text-gray-600">James Clear</td>
                <td className="px-6 py-4 text-gray-600">2025-06-01</td>
                <td className="px-6 py-4 text-gray-600">2025-06-21</td>
              </tr>
              <tr className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 font-medium text-gray-800">Deep Work</td>
                <td className="px-6 py-4 text-gray-600">Cal Newport</td>
                <td className="px-6 py-4 text-gray-600">2025-05-10</td>
                <td className="px-6 py-4 text-gray-600">2025-05-25</td>
              </tr>
              <tr className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 font-medium text-gray-800">The Lean Startup</td>
                <td className="px-6 py-4 text-gray-600">Eric Ries</td>
                <td className="px-6 py-4 text-gray-600">2025-04-12</td>
                <td className="px-6 py-4 text-gray-600">2025-04-30</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default ReadingHistory;
