import React from "react";
import Sidebar from "../Studentdashboard/Sidebar";

const NewArrivals = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6 ml-0 md:ml-64">
        <h1 className="text-3xl font-bold text-indigo-700 mb-6">New Arrivals</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Book 1 */}
          <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
            <img
              src="https://m.media-amazon.com/images/I/51MPcVf2xzL.jpg"
              alt="Build"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-lg font-semibold text-indigo-800">Build</h2>
            <p className="text-sm text-gray-600">Tony Fadell</p>
            <span className="inline-block mt-2 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
              Innovation
            </span>
          </div>

          {/* Book 2 */}
          <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
            <img
              src="https://m.media-amazon.com/images/I/41+tUmQCMiL.jpg"
              alt="AI Superpowers"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-lg font-semibold text-indigo-800">AI Superpowers</h2>
            <p className="text-sm text-gray-600">Kai-Fu Lee</p>
            <span className="inline-block mt-2 text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">
              AI & Tech
            </span>
          </div>

          {/* Book 3 */}
          <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
            <img
              src="https://m.media-amazon.com/images/I/51MPw0zwY5L.jpg"
              alt="The Creative Act"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-lg font-semibold text-indigo-800">The Creative Act</h2>
            <p className="text-sm text-gray-600">Rick Rubin</p>
            <span className="inline-block mt-2 text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
              Art & Creativity
            </span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NewArrivals;
