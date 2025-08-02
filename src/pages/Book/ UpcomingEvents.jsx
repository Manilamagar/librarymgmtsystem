import React from "react";

const events = [
  {
    id: 1,
    title: "Book Reading: Modern Classics",
    date: "2025-09-15",
    location: "Main Hall",
  },
  {
    id: 2,
    title: "Children's Storytelling Hour",
    date: "2025-09-20",
    location: "Kids Section",
  },
  {
    id: 3,
    title: "Author Meet & Greet: Jane Doe",
    date: "2025-10-01",
    location: "Conference Room",
  },
];

const UpcomingEvents = () => {
  return (
    <section className="py-16 bg-indigo-50 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
      <h2 className="text-3xl font-extrabold text-indigo-900 mb-10">Upcoming Events</h2>
      <ul className="space-y-6">
        {events.map(({ id, title, date, location }) => (
          <li key={id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold text-indigo-800">{title}</h3>
              <p className="text-indigo-600 text-sm">
                {new Date(date).toLocaleDateString()} — {location}
              </p>
            </div>
            <button className="text-indigo-600 hover:underline font-semibold">
              Learn More
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default UpcomingEvents;
