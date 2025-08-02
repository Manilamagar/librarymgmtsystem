import React from "react";
import Sidebar from "../Studentdashboard/Sidebar";
import { CalendarDays, Clock, AlertCircle } from "lucide-react";

const MyBooks = () => {
  const books = [
    {
      title: "Introduction to Algorithms",
      author: "Thomas H. Cormen",
      borrowed: "12 July 2025",
      due: "12 August 2025",
      status: "On Time",
      color: "green",
      image: "https://m.media-amazon.com/images/I/61U8Xv0j8EL.jpg",
    },
    {
      title: "Clean Code",
      author: "Robert C. Martin",
      borrowed: "01 June 2025",
      due: "01 July 2025",
      status: "Overdue",
      color: "red",
      image: "https://m.media-amazon.com/images/I/41xShlnTZTL._SX374_BO1,204,203,200_.jpg",
    },
    {
      title: "You Don't Know JS",
      author: "Kyle Simpson",
      borrowed: "20 July 2025",
      due: "05 August 2025",
      status: "Due Soon",
      color: "yellow",
      image: "https://m.media-amazon.com/images/I/71wF7YDIQkL.jpg",
    },
  ];

  const getStatusStyle = (color, status) => {
    const colors = {
      green: "bg-green-100 text-green-700",
      red: "bg-red-100 text-red-700",
      yellow: "bg-yellow-100 text-yellow-800",
    };
    return (
      <span className={`text-xs ${colors[color]} px-2 py-1 rounded-full flex items-center gap-1`}>
        {status === "Overdue" && <AlertCircle size={12} />}
        {status}
      </span>
    );
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-6 ml-0 md:ml-64">
        <h1 className="text-3xl font-bold text-indigo-700 mb-6">My Borrowed Books</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition"
            >
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-lg font-semibold text-gray-800">{book.title}</h2>
                  {getStatusStyle(book.color, book.status)}
                </div>
                <p className="text-sm text-gray-500 mb-2">Author: {book.author}</p>
                <div className="flex items-center text-sm text-gray-600">
                  <CalendarDays size={16} className="mr-2" />
                  Borrowed: {book.borrowed}
                </div>
                <div className="flex items-center text-sm text-gray-600 mt-1">
                  <Clock size={16} className="mr-2" />
                  Due Date: {book.due}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default MyBooks;
