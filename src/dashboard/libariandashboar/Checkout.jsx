import React, { useState } from "react";
import Sidebar from "./Sidebar";

const Checkout = () => {
  // Static books data (in real app, fetch from backend)
  const [books, setBooks] = useState([
    { id: 1, title: "The Alchemist", author: "Paulo Coelho", status: "Available" },
    { id: 2, title: "1984", author: "George Orwell", status: "Checked Out" },
    { id: 3, title: "Sapiens", author: "Yuval Noah Harari", status: "Available" },
  ]);

  const [selectedBookId, setSelectedBookId] = useState("");
  const [borrowerName, setBorrowerName] = useState("");
  const [message, setMessage] = useState({ text: "", type: "" }); // type: success or error

  const handleCheckout = (e) => {
    e.preventDefault();

    // Validation
    if (!selectedBookId) {
      setMessage({ text: "Please select a book to checkout.", type: "error" });
      return;
    }
    if (!borrowerName.trim()) {
      setMessage({ text: "Please enter borrower's name.", type: "error" });
      return;
    }

    const bookIndex = books.findIndex((b) => b.id === Number(selectedBookId));
    if (bookIndex === -1) {
      setMessage({ text: "Selected book not found.", type: "error" });
      return;
    }
    if (books[bookIndex].status === "Checked Out") {
      setMessage({ text: "This book is already checked out.", type: "error" });
      return;
    }

    // Update book status to Checked Out
    const updatedBooks = [...books];
    updatedBooks[bookIndex] = { ...updatedBooks[bookIndex], status: "Checked Out" };
    setBooks(updatedBooks);

    setMessage({
      text: `Book "${updatedBooks[bookIndex].title}" successfully checked out to ${borrowerName}.`,
      type: "success",
    });

    // Reset inputs
    setSelectedBookId("");
    setBorrowerName("");
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 p-8 sm:p-12 ml-0 md:ml-64">
        <h1 className="text-3xl font-bold text-indigo-700 mb-6">Checkout</h1>

        <form onSubmit={handleCheckout} className="mb-8 bg-white p-6 rounded-xl shadow-md max-w-lg">
          <label
            htmlFor="book"
            className="block mb-2 font-semibold text-gray-700"
          >
            Select Book to Checkout
          </label>
          <select
            id="book"
            value={selectedBookId}
            onChange={(e) => setSelectedBookId(e.target.value)}
            className="w-full mb-4 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option value="">-- Select a Book --</option>
            {books.map((book) => (
              <option key={book.id} value={book.id} disabled={book.status === "Checked Out"}>
                {book.title} {book.status === "Checked Out" ? "(Checked Out)" : ""}
              </option>
            ))}
          </select>

          <label
            htmlFor="borrower"
            className="block mb-2 font-semibold text-gray-700"
          >
            Borrower Name
          </label>
          <input
            id="borrower"
            type="text"
            value={borrowerName}
            onChange={(e) => setBorrowerName(e.target.value)}
            placeholder="Enter borrower's name"
            className="w-full mb-4 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-full shadow-md transition"
          >
            Checkout Book
          </button>

          {message.text && (
            <p
              className={`mt-4 text-sm font-semibold ${
                message.type === "success" ? "text-green-600" : "text-red-600"
              }`}
            >
              {message.text}
            </p>
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

export default Checkout;
