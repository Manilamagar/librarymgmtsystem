import React from "react";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import { Pencil, Trash2 } from "lucide-react";

const Display = () => {
      const navigate = useNavigate();
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      {/* Adjust left margin to sidebar width (assumed 64 or 256px) */}
      <main className="flex-1 p-8 overflow-auto ml-0 md:ml-64">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-indigo-700">Manage Books</h1>
         
    <button
      onClick={() => navigate("/addbook")}
      className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2 rounded-full shadow"
    >
      + Add Book
    </button>
        </div>

        <div className="overflow-x-auto bg-white rounded-xl shadow-md">
          <table className="min-w-full table-auto border-collapse">
            <thead className="bg-indigo-100">
              <tr>
                <th className="py-3 px-5 text-left text-sm font-semibold text-indigo-700">Cover</th>
                <th className="py-3 px-5 text-left text-sm font-semibold text-indigo-700">Title</th>
                <th className="py-3 px-5 text-left text-sm font-semibold text-indigo-700">Author</th>
                <th className="py-3 px-5 text-left text-sm font-semibold text-indigo-700">Category</th>
                <th className="py-3 px-5 text-left text-sm font-semibold text-indigo-700">ISBN</th>
                <th className="py-3 px-5 text-left text-sm font-semibold text-indigo-700">Status</th>
                <th className="py-3 px-5 text-center text-sm font-semibold text-indigo-700">Actions</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition">
                <td className="py-3 px-5">
                  <img
                    src="https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UF1000,1000_QL80_.jpg"
                    alt="The Alchemist"
                    className="w-16 h-20 object-cover rounded"
                  />
                </td>
                <td className="py-3 px-5 text-gray-900 font-semibold">The Alchemist</td>
                <td className="py-3 px-5 text-gray-700">Paulo Coelho</td>
                <td className="py-3 px-5 text-gray-700">Fiction</td>
                <td className="py-3 px-5 text-gray-700">9780061122415</td>
                <td className="py-3 px-5">
                  <span className="inline-block px-3 py-1 text-xs font-bold rounded-full bg-green-100 text-green-800">
                    Available
                  </span>
                </td>
                <td className="py-3 px-5 text-center space-x-3">
                  <button
                    onClick={() => alert("Edit The Alchemist")}
                    className="text-indigo-600 hover:text-indigo-900"
                    aria-label="Edit The Alchemist"
                  >
                    <Pencil size={18} />
                  </button>
                  <button
                    onClick={() => alert("Delete The Alchemist")}
                    className="text-red-600 hover:text-red-900"
                    aria-label="Delete The Alchemist"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>

              <tr className="border-b border-gray-200 hover:bg-gray-50 transition">
                <td className="py-3 px-5">
                  <img
                    src="https://m.media-amazon.com/images/I/71kxa1-0mfL._AC_UF1000,1000_QL80_.jpg"
                    alt="1984"
                    className="w-16 h-20 object-cover rounded"
                  />
                </td>
                <td className="py-3 px-5 text-gray-900 font-semibold">1984</td>
                <td className="py-3 px-5 text-gray-700">George Orwell</td>
                <td className="py-3 px-5 text-gray-700">Dystopian</td>
                <td className="py-3 px-5 text-gray-700">9780451524935</td>
                <td className="py-3 px-5">
                  <span className="inline-block px-3 py-1 text-xs font-bold rounded-full bg-red-100 text-red-800">
                    Checked Out
                  </span>
                </td>
                <td className="py-3 px-5 text-center space-x-3">
                  <button
                    onClick={() => alert("Edit 1984")}
                    className="text-indigo-600 hover:text-indigo-900"
                    aria-label="Edit 1984"
                  >
                    <Pencil size={18} />
                  </button>
                  <button
                    onClick={() => alert("Delete 1984")}
                    className="text-red-600 hover:text-red-900"
                    aria-label="Delete 1984"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>

              <tr className="hover:bg-gray-50 transition">
                <td className="py-3 px-5">
                  <img
                    src="https://m.media-amazon.com/images/I/713jIoMO3UL._AC_UF1000,1000_QL80_.jpg"
                    alt="Sapiens"
                    className="w-16 h-20 object-cover rounded"
                  />
                </td>
                <td className="py-3 px-5 text-gray-900 font-semibold">Sapiens</td>
                <td className="py-3 px-5 text-gray-700">Yuval Noah Harari</td>
                <td className="py-3 px-5 text-gray-700">Non-fiction</td>
                <td className="py-3 px-5 text-gray-700">9780062316097</td>
                <td className="py-3 px-5">
                  <span className="inline-block px-3 py-1 text-xs font-bold rounded-full bg-green-100 text-green-800">
                    Available
                  </span>
                </td>
                <td className="py-3 px-5 text-center space-x-3">
                  <button
                    onClick={() => alert("Edit Sapiens")}
                    className="text-indigo-600 hover:text-indigo-900"
                    aria-label="Edit Sapiens"
                  >
                    <Pencil size={18} />
                  </button>
                  <button
                    onClick={() => alert("Delete Sapiens")}
                    className="text-red-600 hover:text-red-900"
                    aria-label="Delete Sapiens"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Display;
