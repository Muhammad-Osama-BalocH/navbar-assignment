"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";  

export default function NavbarWithBoxes() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen">
 
      <nav className="bg-gray-800 text-white">
        <div className="container mx-auto flex items-center justify-between p-4">
        
          <div className="text-lg font-bold">Osama</div>

          <button
            className="md:hidden block focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <FaTimes className="w-6 h-6" />  
            ) : (
              <FaBars className="w-6 h-6" />  
            )}
          </button>

          {/* Menu Items */}
          <div
            className={`md:flex items-center space-x-4 ${isOpen ? "block" : "hidden"}`}
          >
            <Link
              href="#home"
              className="block py-2 px-4 hover:bg-gray-700 rounded"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="block py-2 px-4 hover:bg-gray-700 rounded"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="block py-2 px-4 hover:bg-gray-700 rounded"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Content with Boxes */}
      <div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="bg-red-500 text-white p-6 rounded shadow">Box 1 <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto earum animi accusamus temporibus culpa nesciunt odit exercitationem, omnis libero consequatur. Id et quam quis sapiente ratione magni nulla iure est!</h1></div>
        <div className="bg-blue-500 text-white p-6 rounded shadow">Box 2</div>
        <div className="bg-green-500 text-white p-6 rounded shadow">Box 3</div>
        <div className="bg-yellow-500 text-white p-6 rounded shadow">Box 4</div>
        <div className="bg-purple-500 text-white p-6 rounded shadow">Box 5</div>
        <div className="bg-pink-500 text-white p-6 rounded shadow">Box 6</div>
        <div className="bg-teal-500 text-white p-6 rounded shadow">Box 7</div>
        <div className="bg-indigo-500 text-white p-6 rounded shadow">Box 8</div>
      </div>
    </div>
  );
}
