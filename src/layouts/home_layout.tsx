import { Search, ShoppingCart } from 'lucide-react';
import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom';

export default function HomeLayout() {
    const linkClass =  "cursor-pointer hover:text-gray-600";
    const activeClass = "text-black font-bold";
    return (
        <div>
            <nav className="w-full bg-gray-100 ">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

                    {/* LEFT MENU */}
                    <ul className="hidden md:flex gap-6 text-sm font-medium">
                        <NavLink to="/shop" className={({ isActive }) => isActive ? activeClass : linkClass}>
                            BUY T-SHIRTS
                        </NavLink>
                        <NavLink to="/women" className={({ isActive }) => isActive ? activeClass : linkClass}>
                            WOMEN
                        </NavLink>
                        <NavLink to="/men" className={({ isActive }) => isActive ? activeClass : linkClass}>
                            MEN
                        </NavLink>
                        <NavLink to="/about" className={({ isActive }) => isActive ? activeClass : linkClass}>
                            ABOUT
                        </NavLink>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? activeClass : linkClass}>
                            CONTACT
                        </NavLink>
                    </ul>

                    {/* LOGO CENTER */}
                    <NavLink to="/" className="text-center">
                        <h1 className="text-lg font-bold tracking-widest">T-SHIRTS</h1>
                        <p className="text-xs tracking-[0.4em] text-gray-500">STORE</p>
                    </NavLink>

                    {/* RIGHT ICONS */}
                    <div className="flex items-center gap-6 text-sm">
                        <Search className="w-5 h-5 cursor-pointer" />

                        <div className="flex items-center gap-2 cursor-pointer">
                            <span>$0.00</span>
                            <ShoppingCart className="w-5 h-5" />
                            <span className="text-xs bg-black text-white rounded-full px-2 py-1">
                                0
                            </span>
                        </div>
                        {/* <button className="hover:text-gray-600">LOG IN</button> */}
                         <Link to="/login">
          <button className='px-6 py-2 bg-gray-500 cursor-pointer rounded'>Login</button>
          </Link>
        
                    </div>

                </div>
            </nav>
            <Outlet />
           
        </div>

    );
}
