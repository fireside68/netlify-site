import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 py-8 text-center text-gray-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6 text-sm">
          <span>&copy; 2025 Cedric Johnson. All rights reserved.</span>
          <span className="border-l border-slate-700"></span>
          <Link
            to="/privacy"
            className="hover:text-primary-400 transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
        <p className="mt-4 text-sm">
          Built with <span className="text-red-500">❤️</span> and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;