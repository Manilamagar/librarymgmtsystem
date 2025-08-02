import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Edit2, Trash2, UserCheck, UserX } from "lucide-react";

const ManageUsers = () => {
  // Static user data
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice@example.com",
      role: "Librarian",
      active: true,
    },
    {
      id: 2,
      name: "Bob Smith",
      email: "bob@example.com",
      role: "Student",
      active: false,
    },
    {
      id: 3,
      name: "Carol White",
      email: "carol@example.com",
      role: "Admin",
      active: true,
    },
  ]);

  // Toggle active status (demo only)
  const toggleActive = (id) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />

      <main className="flex-1 p-8 md:ml-64">
        <h1 className="text-3xl font-bold text-indigo-700 dark:text-indigo-400 mb-8">
          Manage Users
        </h1>

        <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 text-left">
            <thead className="bg-indigo-100 dark:bg-indigo-900">
              <tr>
                <th className="px-6 py-3 text-sm font-semibold text-indigo-700 dark:text-indigo-300">
                  Name
                </th>
                <th className="px-6 py-3 text-sm font-semibold text-indigo-700 dark:text-indigo-300">
                  Email
                </th>
                <th className="px-6 py-3 text-sm font-semibold text-indigo-700 dark:text-indigo-300">
                  Role
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
              {users.map(({ id, name, email, role, active }) => (
                <tr
                  key={id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <td className="px-6 py-4 text-gray-900 dark:text-gray-100 font-medium">
                    {name}
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                    {email}
                  </td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-400">{role}</td>
                  <td className="px-6 py-4">
                    {active ? (
                      <span className="inline-flex items-center gap-1 text-green-700 bg-green-100 px-2 py-1 rounded-full text-xs font-semibold">
                        <UserCheck size={14} />
                        Active
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-red-700 bg-red-100 px-2 py-1 rounded-full text-xs font-semibold">
                        <UserX size={14} />
                        Inactive
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 space-x-3">
                    <button
                      title="Edit User"
                      className="text-indigo-600 hover:text-indigo-800"
                    >
                      <Edit2 size={18} />
                    </button>

                    <button
                      title={active ? "Deactivate User" : "Activate User"}
                      onClick={() => toggleActive(id)}
                      className={`${
                        active
                          ? "text-red-600 hover:text-red-800"
                          : "text-green-600 hover:text-green-800"
                      }`}
                    >
                      {active ? <UserX size={18} /> : <UserCheck size={18} />}
                    </button>

                    <button
                      title="Delete User"
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

export default ManageUsers;
