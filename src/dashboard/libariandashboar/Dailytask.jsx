import React, { useState, useMemo } from "react";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const statusColors = {
  Pending: "bg-yellow-50 text-yellow-900",
  "In Progress": "bg-cyan-50 text-cyan-900",
  Completed: "bg-green-50 text-green-900",
};

const statusBadgeColors = {
  Pending: "bg-yellow-500 text-white shadow-lg",
  "In Progress": "bg-cyan-600 text-white shadow-lg",
  Completed: "bg-green-700 text-white shadow-lg",
};

const DailyTasks = () => {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([
    { id: 1, title: "Check overdue books", status: "Pending", due: "Today 5 PM" },
    { id: 2, title: "Process new book arrivals", status: "In Progress", due: "Today 3 PM" },
    { id: 3, title: "Respond to purchase requests", status: "Pending", due: "Tomorrow" },
    { id: 4, title: "Organize shelves", status: "Completed", due: "Yesterday" },
  ]);

  const [filter, setFilter] = useState("All");

  const toggleStatus = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status:
                task.status === "Completed"
                  ? "Pending"
                  : task.status === "Pending"
                  ? "In Progress"
                  : "Completed",
            }
          : task
      )
    );
  };

  const filteredTasks = useMemo(() => {
    if (filter === "All") return tasks;
    return tasks.filter((task) => task.status === filter);
  }, [tasks, filter]);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-8 overflow-auto ml-0 md:ml-64">
        <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
          <h1 className="text-3xl font-bold text-indigo-700 whitespace-nowrap">Daily Tasks</h1>
          <button
            onClick={() => navigate("/addtask")}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2 rounded-full shadow transition focus:outline-none focus:ring-4 focus:ring-indigo-400"
            aria-label="Add new daily task"
          >
            + Add Daily Task
          </button>
        </div>

        <div className="mb-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <label htmlFor="statusFilter" className="font-semibold text-gray-700 text-lg select-none">
              Filter:
            </label>
            <select
              id="statusFilter"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-4 focus:ring-indigo-400 transition duration-300"
            >
              <option>All</option>
              <option>Pending</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>
          </div>
          <p className="text-sm text-gray-500 italic max-w-md text-center sm:text-left select-none">
            * Click a task row to cycle status: Pending → In Progress → Completed
          </p>
        </div>

        <div className="overflow-x-auto bg-white rounded-xl shadow-md">
          <table className="min-w-full table-auto border-collapse">
            <thead className="bg-indigo-100">
              <tr>
                <th className="py-3 px-5 text-left text-sm font-semibold text-indigo-700">Task</th>
                <th className="py-3 px-5 text-left text-sm font-semibold text-indigo-700">Due</th>
                <th className="py-3 px-5 text-left text-sm font-semibold text-indigo-700">Status</th>
              </tr>
            </thead>

            <tbody>
              <AnimatePresence>
                {filteredTasks.map((task) => (
                  <motion.tr
                    key={task.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    layout
                    tabIndex={0}
                    className={`border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition select-none ${
                      statusColors[task.status]
                    }`}
                    onClick={() => toggleStatus(task.id)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        toggleStatus(task.id);
                      }
                    }}
                    title="Click to toggle status"
                  >
                    <td className="py-3 px-5 font-semibold text-gray-900">{task.title}</td>
                    <td className="py-3 px-5 text-gray-700">{task.due}</td>
                    <td className="py-3 px-5">
                      <span
                        className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${statusBadgeColors[task.status]} shadow-lg select-none`}
                        aria-label={`Status: ${task.status}`}
                      >
                        {task.status}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default DailyTasks;
