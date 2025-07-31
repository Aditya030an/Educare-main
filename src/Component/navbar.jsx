import React from "react";

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-sm px-4 md:px-10 py-4">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          {/* Replace this with your logo image if needed */}
          <div className="text-2xl font-bold text-blue-600 flex items-center space-x-1">
            <span className="text-3xl">🎓</span>
            <span>EDUCARE</span>
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center space-x-6 text-gray-700 text-sm font-medium">
          <li className="hover:text-blue-600 cursor-pointer">Features</li>
          <li className="hover:text-blue-600 cursor-pointer">Solutions</li>
          <li className="hover:text-blue-600 cursor-pointer">NFT Storage</li>
          <li className="hover:text-blue-600 cursor-pointer">Pricing</li>
          <li className="hover:text-blue-600 cursor-pointer">Developers</li>
          <li className="hover:text-blue-600 cursor-pointer">Resource</li>
        </ul>

        {/* Right Actions */}
        <div className="flex items-center space-x-4 text-sm">
          <span className="text-gray-700 hidden md:block">App</span>
          <span className="text-gray-700 hidden md:block">English</span>
          <button className="border border-black px-4 py-1.5 rounded-md font-medium hover:bg-gray-100 transition">
            Sign In
          </button>
          <button className="bg-blue-500 text-white px-4 py-1.5 rounded-md font-medium hover:bg-blue-600 transition">
            Create an account
          </button>
        </div>
      </nav>
    </header>
  );
}