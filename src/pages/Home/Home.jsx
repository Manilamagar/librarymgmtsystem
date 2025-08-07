import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  GraduationCap,
  User,
  Monitor,
  ChevronDown,
  PlayCircle,
} from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SearchBar from "../Search/Searchbar";
import FeaturedBooks from "../Book/FeaturedBooks";
import UpcomingEvents from "../Book/ UpcomingEvents";
import AboutLibrary from "../About/AboutLibrary";
import StatsHighlights from "../Book/ StatsHighlights";


const Hero = () => {
  const handleSearch = ({ query, filter }) => {
    console.log("Search query:", query, "Filter:", filter);
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-100 via-blue-100 to-indigo-200 min-h-screen">
        <div className="absolute inset-0 pointer-events-none z-0">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.15 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
            className="absolute top-24 left-16 w-[28rem] h-[28rem] bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl"
          />
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.12 }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
            className="absolute bottom-12 right-16 w-[30rem] h-[30rem] bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-28 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8 max-w-xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl sm:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight"
              >
                Welcome to <br />
                <span className="text-indigo-600">INC Pustakalaya</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-lg sm:text-xl text-slate-700 leading-relaxed"
              >
                Manage your library with ease. Track books, monitor usage, and provide the best reading experience.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-4"
              >
                <SearchBar onSearch={handleSearch} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-6"
              >
                <button className="px-8 py-3 bg-indigo-600 text-white rounded-2xl shadow-lg hover:bg-indigo-700 transition duration-300 font-semibold">
                  Get Started
                </button>

                <button className="flex items-center gap-3 text-indigo-600 hover:underline font-semibold">
                  <PlayCircle className="w-6 h-6" />
                  Watch Video
                </button>
              </motion.div>
            </div>

            <div className="relative w-full max-w-lg mx-auto lg:mx-0">
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-3xl shadow-2xl p-8"
              >
                <Monitor className="w-full h-52 text-indigo-500" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -top-10 -left-10 bg-white p-5 rounded-2xl shadow-lg flex items-center gap-3 w-48"
              >
                <BookOpen className="text-indigo-600 w-6 h-6" />
                <div>
                  <p className="text-sm font-semibold text-slate-800">Books</p>
                  <p className="text-xs text-slate-500">10,000+</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute bottom-4 -right-12 bg-white p-5 rounded-2xl shadow-lg flex items-center gap-3 w-48"
              >
                <User className="text-pink-500 w-6 h-6" />
                <div>
                  <p className="text-sm font-semibold text-slate-800">Users</p>
                  <p className="text-xs text-slate-500">5,000+</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-white p-5 rounded-2xl shadow-lg flex items-center gap-3 w-48"
              >
                <GraduationCap className="text-green-500 w-6 h-6" />
                <div>
                  <p className="text-sm font-semibold text-slate-800">Students</p>
                  <p className="text-xs text-slate-500">2,000+</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-indigo-600 animate-bounce z-10">
          <ChevronDown className="w-7 h-7" />
        </div>
      </section>

      {/* New Sections Below Hero */}
      <FeaturedBooks />
      <UpcomingEvents />
      
      <AboutLibrary />
      <StatsHighlights />

      <Footer />
    </>
  );
};

export default Hero;
