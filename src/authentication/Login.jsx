import React, { useState } from "react";
import { Lock, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in:", email, password);
    // TODO: Add login API logic here
  };

  return (
    <div className="min-h-screen flex flex-col 
justify-between bg-gradient-to-br from-indigo-100 to-white">
      <Navbar />
      
      <div className="flex-grow flex items-center mt-40 mb-30 justify-center px-4 sm:px-6 lg:px-8">
        <motion.form
          onSubmit={handleLogin}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl border border-indigo-100"
        >
          <h2 className="text-3xl font-extrabold text-center text-indigo-700 mb-6">
            Welcome Back
          </h2>

          <div className="space-y-5">
            {/* Email */}
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-indigo-500">
              <Mail className="text-indigo-500 mr-2" />
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full outline-none bg-transparent placeholder-gray-400"
              />
            </div>

            {/* Password */}
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-indigo-500">
              <Lock className="text-indigo-500 mr-2" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full outline-none bg-transparent placeholder-gray-400"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition"
          >
            Sign In
          </button>

          <p className="text-sm text-center text-gray-500 mt-4">
            Don’t have an account?{" "}
            <a href="/register" className="text-indigo-600 hover:underline">
              Register
            </a>
          </p>
        </motion.form>
      </div>

      <Footer />
    </div>
  );
};

export default LoginPage;
