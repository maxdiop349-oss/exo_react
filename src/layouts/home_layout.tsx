import { Menu, Search, ShoppingCart, X } from 'lucide-react';
import React, { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom';
import Footer from '../composantes/footer';
const navItems = [
    { name: "BUY T-SHIRTS", path: "/shop" },
    { name: "WOMEN", path: "/women" },
    { name: "MEN", path: "/men" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
];
export default function HomeLayout() {
    const [isOpen, setIsOpen] = useState(false);
    const linkClass = "cursor-pointer hover:text-gray-600";
    const activeClass = "text-black font-bold";
    return (
        <div>
            <nav className="w-full bg-gray-100 ">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                    {/* Hamburger */}
                    <button className="md:hidden order-3" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                    {/* LEFT MENU */}
                    <ul className="hidden md:flex gap-6 text-sm font-medium ">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <NavLink to={item.path} className={({ isActive }) =>
                                    isActive ? activeClass : linkClass}>{item.name}</NavLink>
                            </li>
                        ))}
                    </ul>
                    {/* LOGO CENTER */}
                    <NavLink to="/" className="text-center">
                        <h1 className="text-lg font-bold tracking-widest">T-SHIRTS</h1> <div className="w-20 h-0.5 bg-gray-400 mx-auto "></div>
                        <p className="text-xs tracking-[0.4em] text-gray-500">STORE</p>
                    </NavLink>
                    {/* RIGHT ICONS */}
                    <div className="flex items-center gap-6 text-sm order-2 md:order-3">
                        <Search className="w-5 h-5 cursor-pointer" />
                        <div className="flex items-center gap-2 cursor-pointer">
                            <span>$0.00</span>
                            <ShoppingCart className="w-5 h-5" />
                            <span className="text-xs bg-black text-white rounded-full px-2 py-1">
                                0
                            </span>
                        </div>
                        {/* <button className="hover:text-gray-600">LOG IN</button> */}
                        <Link to="/login" className='hidden md:block order-4'>
                            <button className='px-4 py-2 bg-gray-500 cursor-pointer rounded'>Login</button>
                        </Link>
                    </div>
                </div>
                {/* Mobile Menu */}
                {isOpen && (
                    <div className='md:hidden bg-gray-100 px-6 py-4 space-y-4'>
                        {navItems.map((item, index) => (
                            <NavLink
                                key={index} to={item.path}
                                onClick={() => setIsOpen(false)} className="block">{item.name}</NavLink>
                        ))}
                        <Link to="/login" onClick={() => setIsOpen(false)}>
                            <button className="w-full px-4 py-2 bg-gray-500 text-white rounded">
                                Login
                            </button>
                        </Link>
                    </div>
                )}
            </nav>
            <Outlet />
            <Footer />
        </div>

    );
}
