import React from "react";
import Sidebar from "./Sidebar";

const AddNewTask = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <Sidebar />
      <div className="bg-white rounded-3xl shadow-xl p-10 max-w-md w-full">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-8 text-center">
          Add New Daily Task
        </h1>

        <form className="space-y-6">
          <div>
            <label
              htmlFor="taskTitle"
              className="block text-gray-700 font-semibold mb-2"
            >
              Task Title
            </label>
            <input
              id="taskTitle"
              type="text"
              placeholder="Enter task title"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="taskDue"
              className="block text-gray-700 font-semibold mb-2"
            >
              Due Date/Time
            </label>
            <input
              id="taskDue"
              type="text"
              placeholder="E.g., Today 5 PM"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="reset"
              className="px-6 py-3 rounded-full border border-gray-300 hover:bg-gray-100 transition"
            >
              Reset
            </button>
            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-lg transition"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewTask;
