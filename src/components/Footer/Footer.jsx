import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-slate-50 via-blue-50 to-indigo-100 text-slate-700 py-16">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* About / Brand */}
        <div className="space-y-4">
          <h2 className="text-2xl font-extrabold tracking-wide text-indigo-600">IN College Library</h2>
          <p className="text-slate-600 max-w-sm">
            Empowering your knowledge journey with seamless library management and rich resources.
          </p>
        </div>
        
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-indigo-700">Quick Links</h3>
          <ul className="space-y-2 text-indigo-600">
            {["Home", "Catalog", "Research", "Events"].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="hover:text-indigo-800 transition-colors duration-200"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Contact & Social */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-indigo-700">Contact Us</h3>
          <p className="text-indigo-600 mb-4 max-w-xs">
            123 Library St, Itahari, Nepal<br />
            Phone: +977 1234 5678<br />
            Email: info@incollegelibrary.com
          </p>
          <div className="flex space-x-5 text-indigo-600">
            <a href="#" aria-label="Facebook" className="hover:text-indigo-800 transition-colors duration-200">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-indigo-800 transition-colors duration-200">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-indigo-800 transition-colors duration-200">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-indigo-800 transition-colors duration-200">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-indigo-200 pt-6 text-center text-indigo-500 text-sm select-none">
        &copy; {new Date().getFullYear()} IN College Library. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
