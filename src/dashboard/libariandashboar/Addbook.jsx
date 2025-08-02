import React, { useState } from "react";
import Sidebar from "./Sidebar";

const AddBook = () => {
  // Form state
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState(""); // will store selected category
  const [isbn, setIsbn] = useState("");
  const [status, setStatus] = useState("Available");

  // Example categories - you can adjust or fetch dynamically later
  const categories = [
    "Fiction",
    "Non-fiction",
    "Dystopian",
    "Science Fiction",
    "Biography",
    "Mystery",
    "Fantasy",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Adding Book:\nTitle: ${title}\nAuthor: ${author}\nCategory: ${category}\nISBN: ${isbn}\nStatus: ${status}`
    );
    setTitle("");
    setAuthor("");
    setCategory("");
    setIsbn("");
    setStatus("Available");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-10 overflow-auto ml-0 md:ml-64">
        <h1 className="text-3xl font-bold text-indigo-700 mb-8">Add New Book</h1>

        <form
          onSubmit={handleSubmit}
          className="max-w-3xl bg-white rounded-xl shadow-md p-8 space-y-6"
        >
          <div>
            <label className="block mb-2 font-semibold text-gray-700" htmlFor="title">
              Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="Enter book title"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-gray-700" htmlFor="author">
              Author
            </label>
            <input
              id="author"
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
              placeholder="Enter author name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-gray-700" htmlFor="category">
              Category
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              <option value="" disabled>
                Select category
              </option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-2 font-semibold text-gray-700" htmlFor="isbn">
              ISBN
            </label>
            <input
              id="isbn"
              type="text"
              value={isbn}
              onChange={(e) => setIsbn(e.target.value)}
              required
              placeholder="Enter ISBN number"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-gray-700" htmlFor="status">
              Status
            </label>
            <select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              <option>Available</option>
              <option>Checked Out</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition"
          >
            Add Book
          </button>
        </form>
      </main>
    </div>
  );
};

export default AddBook;
