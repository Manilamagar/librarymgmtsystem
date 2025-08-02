import React from "react";
import { NavLink } from "react-router-dom";
import {
  Book,
  User,
  Home,
  Layers,
  LogOut,
  Library,
  Users,
  Sparkles,
} from "lucide-react";

const Sidebar = () => {
  const menuItems = [
    {
      section: "Main",
      items: [{ name: "Dashboard", path: "/studentdashboard", icon: <Home size={20} /> }],
    },
    {
      section: "Account",
      items: [
        { name: "My Books", path: "/mybooks", icon: <Book size={20} /> },
        { name: "Fines", path: "/fines", icon: <Layers size={20} /> },
        {
          name: "Reading History",
          path: "/readinghistory",
          icon: <User size={20} />,
        },
      ],
    },
    {
      section: "Discover",
      items: [
        {
          name: "Recommended",
          path: "/recommend",
          icon: <Sparkles size={20} />,
        },
        {
          name: "New Arrivals",
          path: "/newarrival",
          icon: <Library size={20} />,
        },
      ],
    },
    {
      section: "Study",
      items: [
        {
          name: "Room Booking",
          path: "/study/room-booking",
          icon: <Users size={20} />,
        },
        {
          name: "Group Study",
          path: "/study/group-study",
          icon: <Users size={20} />,
        },
      ],
    },
  ];

  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-indigo-50 to-white border-r shadow-md z-20">
      <div className="p-6 flex items-center gap-3">
        <div className="bg-indigo-600 p-2 rounded-full">
          <Library size={24} color="#fff" />
        </div>
        <h1 className="text-2xl font-bold text-indigo-700">Library System</h1>
      </div>

      <nav className="px-4 py-2 space-y-4">
        {menuItems.map((section, i) => (
          <div key={i}>
            <p className="text-xs uppercase text-gray-400 font-medium tracking-wider px-2 mb-1">
              {section.section}
            </p>
            {section.items.map((item, idx) => (
              <NavLink
                key={idx}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 rounded-lg transition-colors duration-200 text-sm ${
                    isActive
                      ? "bg-indigo-100 text-indigo-700 font-semibold"
                      : "text-gray-700 hover:bg-indigo-50"
                  }`
                }
              >
                <span className="text-indigo-600">{item.icon}</span>
                {item.name}
              </NavLink>
            ))}
          </div>
        ))}
      </nav>

      <div className="absolute bottom-0 w-full px-6 py-4 border-t">
        <button className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors duration-150">
          <LogOut size={16} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
