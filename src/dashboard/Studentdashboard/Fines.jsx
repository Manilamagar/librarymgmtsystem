import React from "react";
import Sidebar from "../Studentdashboard/Sidebar";
import { AlertCircle, CheckCircle } from "lucide-react";

const Fines = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6 ml-0 md:ml-64">
        <h1 className="text-3xl font-bold text-indigo-700 mb-6">My Fines</h1>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-indigo-50 text-gray-600 uppercase text-xs font-semibold">
              <tr>
                <th className="px-6 py-3 text-left">Book Title</th>
                <th className="px-6 py-3 text-left">Overdue Days</th>
                <th className="px-6 py-3 text-left">Fine Amount</th>
                <th className="px-6 py-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              <tr className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 font-medium text-gray-800">Clean Code</td>
                <td className="px-6 py-4 text-gray-600">10 days</td>
                <td className="px-6 py-4 text-gray-600">Rs. 100</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1 bg-red-100 text-red-700 text-xs font-medium px-2 py-1 rounded-full">
                    <AlertCircle size={12} />
                    Unpaid
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 font-medium text-gray-800">The Pragmatic Programmer</td>
                <td className="px-6 py-4 text-gray-600">3 days</td>
                <td className="px-6 py-4 text-gray-600">Rs. 30</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full">
                    <CheckCircle size={12} />
                    Paid
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 font-medium text-gray-800">You Don't Know JS</td>
                <td className="px-6 py-4 text-gray-600">5 days</td>
                <td className="px-6 py-4 text-gray-600">Rs. 50</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1 bg-red-100 text-red-700 text-xs font-medium px-2 py-1 rounded-full">
                    <AlertCircle size={12} />
                    Unpaid
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Fines;
