import React, { useState } from "react";
import Sidebar from "./Sidebar";

const Returns = () => {
  // Sample list of books with their status
  const [books, setBooks] = useState([
    { id: 1, title: "The Alchemist", author: "Paulo Coelho", status: "Checked Out" },
    { id: 2, title: "1984", author: "George Orwell", status: "Available" },
    { id: 3, title: "Sapiens", author: "Yuval Noah Harari", status: "Checked Out" },
  ]);

  const [selectedBookId, setSelectedBookId] = useState("");
  const [message, setMessage] = useState("");

  const handleReturn = (e) => {
    e.preventDefault();

    if (!selectedBookId) {
      setMessage("Please select a book to return.");
      return;
    }

    const bookIndex = books.findIndex((b) => b.id === Number(selectedBookId));
    if (bookIndex === -1) {
      setMessage("Selected book not found.");
      return;
    }

    if (books[bookIndex].status === "Available") {
      setMessage("This book is not currently checked out.");
      return;
    }

    // Update book status to Available
    const updatedBooks = [...books];
    updatedBooks[bookIndex] = {
      ...updatedBooks[bookIndex],
      status: "Available",
    };
    setBooks(updatedBooks);

    setMessage(`Book "${updatedBooks[bookIndex].title}" has been returned successfully.`);
    setSelectedBookId("");
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 p-8 sm:p-12 ml-0 md:ml-64">
        <h1 className="text-3xl font-bold text-indigo-700 mb-6">Returns</h1>

        <form onSubmit={handleReturn} className="mb-8 bg-white p-6 rounded-xl shadow-md max-w-lg">
          <label className="block mb-2 font-semibold text-gray-700" htmlFor="book">
            Select Book to Return
          </label>
          <select
            id="book"
            value={selectedBookId}
            onChange={(e) => setSelectedBookId(e.target.value)}
            className="w-full mb-4 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option value="">-- Select a Book --</option>
            {books
              .filter((book) => book.status === "Checked Out")
              .map((book) => (
                <option key={book.id} value={book.id}>
                  {book.title} (Borrowed)
                </option>
              ))}
          </select>

          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-full shadow-md transition"
          >
            Return Book
          </button>

          {message && (
            <p className="mt-4 text-sm text-green-600 font-semibold">{message}</p>
          )}
        </form>

        <div className="overflow-x-auto bg-white rounded-xl shadow-md p-6 max-w-4xl">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Book Status</h2>
          <table className="min-w-full table-auto border-collapse">
            <thead className="bg-indigo-100">
              <tr>
                <th className="py-3 px-5 text-left text-sm font-semibold text-indigo-700">Title</th>
                <th className="py-3 px-5 text-left text-sm font-semibold text-indigo-700">Author</th>
                <th className="py-3 px-5 text-left text-sm font-semibold text-indigo-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr
                  key={book.id}
                  className="border-b border-gray-200 hover:bg-gray-50 transition"
                >
                  <td className="py-3 px-5 text-gray-900 font-semibold">{book.title}</td>
                  <td className="py-3 px-5 text-gray-700">{book.author}</td>
                  <td className="py-3 px-5">
                    <span
                      className={`inline-block px-3 py-1 text-xs font-bold rounded-full ${
                        book.status === "Available"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {book.status}
                    </span>
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

export default Returns;
