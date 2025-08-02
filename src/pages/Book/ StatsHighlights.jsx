import React from "react";
import { BookOpen, User, GraduationCap } from "lucide-react";

const stats = [
  { id: 1, label: "Books", value: "10,000+", icon: <BookOpen className="w-8 h-8 text-indigo-600" /> },
  { id: 2, label: "Users", value: "5,000+", icon: <User className="w-8 h-8 text-pink-500" /> },
  { id: 3, label: "Students", value: "2,000+", icon: <GraduationCap className="w-8 h-8 text-green-500" /> },
];

const StatsHighlights = () => {
  return (
    <section className="py-16 bg-white max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
      {stats.map(({ id, label, value, icon }) => (
        <div key={id} className="flex flex-col items-center space-y-2">
          {icon}
          <p className="text-2xl font-extrabold text-gray-900">{value}</p>
          <p className="text-gray-500">{label}</p>
        </div>
      ))}
    </section>
  );
};

export default StatsHighlights;
