import React, { useState } from "react";
import { Lock, Mail, User } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const RegisterPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Registering:", form);
    // TODO: Add registration API logic
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-indigo-100 to-white">
      <Navbar />

      <div className="flex-grow flex items-center justify-center px-4 mt-30 mb-30 sm:px-6 lg:px-8">
        <motion.form
          onSubmit={handleRegister}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl border border-indigo-100"
        >
          <h2 className="text-3xl font-extrabold text-center text-indigo-700 mb-6">
            Create an Account
          </h2>

          <div className="space-y-5">
            {/* Full Name */}
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-indigo-500">
              <User className="text-indigo-500 mr-2" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full outline-none bg-transparent placeholder-gray-400"
              />
            </div>

            {/* Email */}
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-indigo-500">
              <Mail className="text-indigo-500 mr-2" />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full outline-none bg-transparent placeholder-gray-400"
              />
            </div>

            {/* Password */}
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-indigo-500">
              <Lock className="text-indigo-500 mr-2" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full outline-none bg-transparent placeholder-gray-400"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition"
          >
            Register
          </button>

          <p className="text-sm text-center text-gray-500 mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-indigo-600 hover:underline">
              Login
            </a>
          </p>
        </motion.form>
      </div>

      <Footer />
    </div>
  );
};

export default RegisterPage;
