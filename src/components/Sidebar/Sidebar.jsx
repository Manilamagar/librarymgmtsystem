import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBook, faUserGraduate, faChalkboardTeacher, 
  faChartLine, faCog, faSignOutAlt 
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ isOpen, closeSidebar }) => {
  const navItems = [
    { icon: faBook, name: 'Catalog', count: 0 },
    { icon: faUserGraduate, name: 'Students', count: 3 },
    { icon: faChalkboardTeacher, name: 'Faculty', count: 0 },
    { icon: faChartLine, name: 'Reports', count: 5 },
    { icon: faCog, name: 'Settings', count: 0 },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40 lg:hidden"
            onClick={closeSidebar}
          />
          
          {/* Sidebar */}
          <motion.aside
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-blue-800 to-indigo-900 shadow-xl overflow-y-auto"
          >
            <div className="flex items-center justify-center h-16 px-4 bg-white/10">
              <h2 className="text-white text-xl font-bold">Library Dashboard</h2>
            </div>
            
            <nav className="px-4 py-6">
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <motion.li
                    key={item.name}
                    whileHover={{ x: 5 }}
                    className="group"
                  >
                    <a
                      href="#"
                      className="flex items-center px-4 py-3 text-white rounded-lg transition-all group-hover:bg-white/10"
                    >
                      <div className="relative">
                        <FontAwesomeIcon icon={item.icon} className="w-5 h-5" />
                        {item.count > 0 && (
                          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs h-5 w-5 rounded-full flex items-center justify-center">
                            {item.count}
                          </span>
                        )}
                      </div>
                      <span className="ml-3">{item.name}</span>
                      <svg
                        className="ml-auto h-5 w-5 transform group-hover:translate-x-1 transition-transform"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </motion.li>
                ))}
              </ul>
              
              <div className="mt-12 pt-4 border-t border-white/20">
                <motion.a
                  href="#"
                  whileHover={{ x: 5 }}
                  className="flex items-center px-4 py-3 text-white rounded-lg transition-all hover:bg-white/10"
                >
                  <FontAwesomeIcon icon={faSignOutAlt} className="w-5 h-5" />
                  <span className="ml-3">Logout</span>
                </motion.a>
              </div>
            </nav>
            
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/5 text-center">
              <p className="text-xs text-white/70">v2.4.1</p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;