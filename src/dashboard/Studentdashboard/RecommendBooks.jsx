import React from "react";
import Sidebar from "../Studentdashboard/Sidebar";

const RecommendedBooks = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6 ml-0 md:ml-64">
        <h1 className="text-3xl font-bold text-indigo-700 mb-6">Recommended Books</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Book 1 */}
          <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
            <img
              src="https://m.media-amazon.com/images/I/41uPjEenkFL.jpg"
              alt="Deep Work"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-lg font-semibold text-indigo-800">Deep Work</h2>
            <p className="text-sm text-gray-600">Cal Newport</p>
            <span className="inline-block mt-2 text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">
              Productivity
            </span>
          </div>

          {/* Book 2 */}
          <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
            <img
              src="https://m.media-amazon.com/images/I/51Z0nLAfLmL.jpg"
              alt="The Alchemist"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-lg font-semibold text-indigo-800">The Alchemist</h2>
            <p className="text-sm text-gray-600">Paulo Coelho</p>
            <span className="inline-block mt-2 text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">
              Fiction
            </span>
          </div>

          {/* Book 3 */}
          <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
            <img
              src="https://m.media-amazon.com/images/I/41vZC4ZqQuL.jpg"
              alt="Thinking, Fast and Slow"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-lg font-semibold text-indigo-800">Thinking, Fast and Slow</h2>
            <p className="text-sm text-gray-600">Daniel Kahneman</p>
            <span className="inline-block mt-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
              Psychology
            </span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RecommendedBooks;
