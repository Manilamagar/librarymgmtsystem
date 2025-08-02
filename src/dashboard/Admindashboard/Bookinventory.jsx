import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Edit2, Trash2, CheckCircle, XCircle } from "lucide-react";

const BookInventory = () => {
  // Static book inventory data
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Clean Code",
      author: "Robert C. Martin",
      category: "Programming",
      quantity: 4,
      status: "Available",
    },
    {
      id: 2,
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt",
      category: "Programming",
      quantity: 0,
      status: "Unavailable",
    },
    {
      id: 3,
      title: "Design Patterns",
      author: "Erich Gamma",
      category: "Software Engineering",
      quantity: 2,
      status: "Available",
    },
  ]);

  // Toggle book availability status (UI only)
  const toggleStatus = (id) => {
    setBooks((prev) =>
      prev.map((book) =>
        book.id === id
          ? {
              ...book,
              status: book.status === "Available" ? "Unavailable" : "Available",
            }
          : book
      )
    );
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />

      <main className="flex-1 p-8 md:ml-64">
        <h1 className="text-3xl font-bold text-indigo-700 dark:text-indigo-400 mb-8">
          Book Inventory
        </h1>

        <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 text-left">
            <thead className="bg-indigo-100 dark:bg-indigo-900">
              <tr>
                <th className="px-6 py-3 text-sm font-semibold text-indigo-700 dark:text-indigo-300">
                  Title
                </th>
                <th className="px-6 py-3 text-sm font-semibold text-indigo-700 dark:text-indigo-300">
                  Author
                </th>
                <th className="px-6 py-3 text-sm font-semibold text-indigo-700 dark:text-indigo-300">
                  Category
                </th>
                <th className="px-6 py-3 text-sm font-semibold text-indigo-700 dark:text-indigo-300">
                  Quantity
                </th>
                <th className="px-6 py-3 text-sm font-semibold text-indigo-700 dark:text-indigo-300">
                  Status
                </th>
                <th className="px-6 py-3 text-sm font-semibold text-indigo-700 dark:text-indigo-300">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              {books.map(({ id, title, author, category, quantity, status }) => (
                <tr
                  key={id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <td className="px-6 py-4 text-gray-900 dark:text-gray-100 font-medium">
                    {title}
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">{author}</td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-400">{category}</td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-400">{quantity}</td>
                  <td className="px-6 py-4">
                    {status === "Available" ? (
                      <span className="inline-flex items-center gap-1 text-green-700 bg-green-100 px-2 py-1 rounded-full text-xs font-semibold">
                        <CheckCircle size={14} />
                        Available
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-red-700 bg-red-100 px-2 py-1 rounded-full text-xs font-semibold">
                        <XCircle size={14} />
                        Unavailable
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 space-x-3">
                    <button
                      title="Edit Book"
                      className="text-indigo-600 hover:text-indigo-800"
                    >
                      <Edit2 size={18} />
                    </button>

                    <button
                      title={
                        status === "Available"
                          ? "Mark as Unavailable"
                          : "Mark as Available"
                      }
                      onClick={() => toggleStatus(id)}
                      className={`${
                        status === "Available"
                          ? "text-red-600 hover:text-red-800"
                          : "text-green-600 hover:text-green-800"
                      }`}
                    >
                      {status === "Available" ? <XCircle size={18} /> : <CheckCircle size={18} />}
                    </button>

                    <button
                      title="Delete Book"
                      className="text-gray-400 hover:text-red-600"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default BookInventory;
