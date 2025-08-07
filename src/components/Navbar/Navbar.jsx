import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faSearch, faUserCircle, faBars } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom'; // Assuming you use React Router

const Navbar = ({ toggleSidebar }) => {
  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [notifications, setNotifications] = useState(3);
  const isAuthenticated = false; // Replace with actual auth logic

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300
      ${scrolled 
        ? 'bg-gradient-to-r from-slate-50 via-blue-50 to-indigo-100 shadow-md py-3' 
        : 'bg-gradient-to-r from-slate-50 via-blue-50 to-indigo-100 py-4'}
    `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo and Mobile Button */}
          <div className="flex items-center space-x-4">
            <button onClick={toggleSidebar} className={`p-2 rounded-md ${scrolled ? 'text-indigo-600 hover:bg-indigo-100' : 'text-indigo-700 hover:bg-indigo-200'}`}>
              <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
            </button>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center">
              <div className={`rounded-lg p-2 ${scrolled ? 'bg-indigo-100' : 'bg-indigo-200/70'}`}>
                <svg className="h-8 w-8 text-indigo-600" viewBox="0 0 24 24" fill="none">
                  <path d="M12 6.253V19.253C10.832 18.477 9.246 18 7.5 18C5.754 18 4.168 18.477 3 19.253V6.253C4.168 5.477 5.754 5 7.5 5C9.246 5 10.832 5.477 12 6.253ZM12 6.253V19.253C13.168 18.477 14.754 18 16.5 18C18.247 18 19.832 18.477 21 19.253V6.253C19.832 5.477 18.247 5 16.5 5C14.754 5 13.168 5.477 12 6.253Z"
                        stroke="currentColor" strokeWidth="2" fill={scrolled ? 'currentColor' : 'white'} />
                </svg>
              </div>
              <h1 className={`ml-3 text-xl font-bold ${scrolled ? 'text-indigo-900' : 'text-indigo-700'}`}>
                INC Pustakalaya
              </h1>
            </motion.div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {['Home', 'Catalog', 'Research', 'Events'].map((item) => (
              <motion.a key={item} href="#" whileHover={{ y: -2 }}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors
                ${scrolled ? 'text-indigo-700 hover:text-indigo-900' : 'text-indigo-600 hover:text-indigo-800'}`}>
                {item}
              </motion.a>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            {/* Search Input */}
            <AnimatePresence>
              {showSearch && (
                <motion.div initial={{ opacity: 0, width: 0 }} animate={{ opacity: 1, width: 'auto' }} exit={{ opacity: 0, width: 0 }} className="overflow-hidden">
                  <input
                    type="text"
                    placeholder="Search books..."
                    className={`px-3 py-2 rounded-md text-sm focus:outline-none
                      ${scrolled ? 'bg-indigo-100 text-indigo-900' : 'bg-indigo-200/50 text-indigo-700 placeholder-indigo-600'}`}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <button onClick={() => setShowSearch(!showSearch)} className={`p-2 rounded-full ${scrolled ? 'text-indigo-700 hover:bg-indigo-100' : 'text-indigo-600 hover:bg-indigo-200'}`}>
              <FontAwesomeIcon icon={faSearch} />
            </button>

            {/* Notification Icon */}
            <div className="relative">
              <button className={`p-2 rounded-full ${scrolled ? 'text-indigo-700 hover:bg-indigo-100' : 'text-indigo-600 hover:bg-indigo-200'}`}>
                <FontAwesomeIcon icon={faBell} />
                {notifications > 0 && (
                  <span className="absolute top-0 right-0 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    {notifications}
                  </span>
                )}
              </button>
            </div>

            {/* Conditional User or Auth Links */}
            {isAuthenticated ? (
              <motion.div whileHover={{ scale: 1.05 }}>
                <button className={`flex items-center space-x-2 ${scrolled ? 'text-indigo-700' : 'text-indigo-600'}`}>
                  <FontAwesomeIcon icon={faUserCircle} className="h-8 w-8" />
                  <span className="hidden lg:inline">Admin</span>
                </button>
              </motion.div>
            ) : (
              <>
                <Link to="/login" className="text-sm px-4 py-2 bg-indigo-100 hover:bg-indigo-200 text-indigo-700 rounded-md transition">Login</Link>
                <Link to="/register" className="text-sm px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition">Register</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
