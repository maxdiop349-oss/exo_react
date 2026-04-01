import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const menu = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "Women", path: "/women" },
  { name: "Men", path: "/men" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];
export default function Footer() {
  return (
    <div>
      <footer>
      {/* TOP FOOTER */}
      <div className="bg-[#e6d8d4] py-16 text-center px-4">
        
        <h2 className="text-xl font-semibold mb-2">
          Subscribe To Get Offers In Your Inbox
        </h2>

        <p className="text-sm text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, adipiscing elit sed do eiusmod condimentum
        </p>

        {/* INPUT + BUTTON */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-2xl mx-auto">
          <input
            type="email"
            placeholder="Your Email Address *"
            className="w-full md:flex-1 border border-gray-400 px-4 py-2 rounded outline-none"
          />

          <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
            Subscribe
          </button>
        </div>

        {/* LINKS  */}
         <div className="flex justify-center gap-6 text-sm text-gray-700 mt-8">
              <nav className=" py-4">
      <div className="max-w-6xl mx-auto flex justify-center gap-6">
        
        {menu.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `text-sm font-medium ${
                isActive
                  ? "text-black border-b-2 border-black"
                  : "text-gray-500 hover:text-black"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}

      </div>
    </nav>

        </div>
   
        {/* SOCIALS */}
        <div className="flex justify-center gap-4 mt-6">
          <span className="border p-2 cursor-pointer hover:bg-black hover:text-white">
            <FaFacebook />
          </span>
          <span className="border p-2 cursor-pointer hover:bg-black hover:text-white">
            <FaTwitter />
          </span>
          <span className="border p-2 cursor-pointer hover:bg-black hover:text-white">
            <FaInstagram />
          </span>
        </div>
      </div>

      {/* BOTTOM FOOTER */}
      <div className="bg-black text-white text-center py-4 text-sm">
        Copyright © 2026 T-Shirts Store | Powered by T-Shirts Store
      </div>
    </footer>
    </div>
  );
};
