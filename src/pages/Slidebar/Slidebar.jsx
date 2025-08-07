import { useState } from "react";
import {
  BookOpen, Bell, Users, User, ClipboardList, Calendar, FileText, ChevronDown
} from "lucide-react";

const Sidebar = () => {
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const toggleSubMenu = (menu) => {
    setOpenSubMenu(openSubMenu === menu ? null : menu);
  };

  return (
    <div className="w-72 bg-white h-screen shadow-lg p-4 border-r">
      <div className="mb-6">
        <h1 className="text-xl font-bold">ITAHARI NAMUNA COLLEGE</h1>
        <p className="text-sm text-gray-600">Client ID: INC-0195</p>
        <p className="text-sm text-gray-600">Academic Year: 2082</p>
        <input
          type="text"
          placeholder="Search menus"
          className="mt-3 w-full p-2 border rounded-md"
        />
      </div>

      <ul className="space-y-2 text-gray-700">
        <li className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
          <BookOpen size={20} /> Academic
        </li>
        <li className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
          <Bell size={20} /> Notifications
        </li>
        <li className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
          <Users size={20} /> Student Management
        </li>
        <li className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
          <User size={20} /> Staff Management
        </li>
        <li className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
          <ClipboardList size={20} /> Attendance Management
        </li>
        <li className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
          <Calendar size={20} /> Exam Management
        </li>

        {/* Library Management */}
        <li>
          <div
            className="flex items-center justify-between cursor-pointer hover:text-blue-600"
            onClick={() => toggleSubMenu("library")}
          >
            <div className="flex items-center gap-2">
              <BookOpen size={20} /> Library Management
            </div>
            <ChevronDown size={18} />
          </div>

          {openSubMenu === "library" && (
            <ul className="pl-6 mt-1 text-sm space-y-1">
              <li className="hover:text-blue-500 cursor-pointer">Book Management</li>
              <li
                className="hover:text-blue-500 cursor-pointer"
                onClick={() => toggleSubMenu("issue")}
              >
                Book Issue/Return
              </li>

              {openSubMenu === "issue" && (
                <ul className="pl-4 mt-1 space-y-1 text-xs">
                  <li className="hover:text-blue-500 cursor-pointer">Manual Issue/Return</li>
                  <li className="hover:text-blue-500 cursor-pointer">Auto Issue/Return</li>
                  <li className="hover:text-blue-500 cursor-pointer">Student History</li>
                  <li className="hover:text-blue-500 cursor-pointer">Reservation</li>
                </ul>
              )}
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
