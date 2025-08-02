import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";

const filters = [
  { label: "Title", value: "title" },
  { label: "Author", value: "author" },
  { label: "ISBN", value: "isbn" },
];

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState(filters[0].value);
  const [showFilters, setShowFilters] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch({ query, filter });
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="max-w-xl mx-auto flex flex-col sm:flex-row items-center gap-3 bg-white shadow-md rounded-full p-3"
      role="search"
      aria-label="Search books catalog"
    >
      {/* Search Input */}
      <div className="flex-grow relative">
        <input
          type="search"
          className="w-full rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 px-4 py-3 pr-12 text-gray-700 placeholder-gray-400 transition"
          placeholder={`Search by ${filter}...`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search query"
        />

        {/* Clear Button */}
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {/* Filter Dropdown */}
      <div className="relative">
        <button
          type="button"
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-1 bg-indigo-600 text-white rounded-full px-4 py-3 hover:bg-indigo-700 transition"
          aria-haspopup="listbox"
          aria-expanded={showFilters}
        >
          {filters.find((f) => f.value === filter)?.label}
          <svg
            className={`w-4 h-4 ml-1 transition-transform ${
              showFilters ? "rotate-180" : "rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>

        <AnimatePresence>
          {showFilters && (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute mt-2 w-32 bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden z-20"
              role="listbox"
              tabIndex={-1}
              aria-label="Search filter options"
            >
              {filters.map(({ label, value }) => (
                <li
                  key={value}
                  role="option"
                  aria-selected={filter === value}
                  onClick={() => {
                    setFilter(value);
                    setShowFilters(false);
                  }}
                  className={`cursor-pointer px-4 py-2 hover:bg-indigo-100 ${
                    filter === value ? "font-semibold bg-indigo-50" : ""
                  }`}
                >
                  {label}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>

      {/* Search Button */}
      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full p-3 flex items-center justify-center transition"
        aria-label="Submit search"
      >
        <Search size={20} />
      </button>
    </form>
  );
};

export default SearchBar;
