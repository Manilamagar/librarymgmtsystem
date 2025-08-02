import React from "react";
import { BookOpen } from "lucide-react";

const featuredBooks = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    cover: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    cover: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    cover: "https://covers.openlibrary.org/b/id/8225265-L.jpg",
  },
];

const FeaturedBooks = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-14">
          📚 Featured Books
        </h2>

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {featuredBooks.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <img
                src={book.cover}
                alt={book.title}
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
              />

              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors">
                  {book.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1 italic">{book.author}</p>

                <button className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white font-medium rounded-full hover:bg-indigo-700 transition-all shadow-md">
                  <BookOpen className="w-5 h-5" />
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
