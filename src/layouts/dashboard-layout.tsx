import { Box, Users } from 'lucide-react';
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
const menuItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Create", path: "/dashboard/create" },
    // { name: "Users", path: "/dashboard/users" },
    { name: "Products", path: "/dashboard/products" },
];
const linkClass = "text-gray-600 px-4 py-2 rounded";
const activeClass = "bg-black text-white px-4 py-2 rounded";
export default function DashboardLayout() {
    return (
        <div className="bg-gray-100 min-h-screen">
            {/* TOP BAR */}
            <div className="flex items-center justify-between px-8 py-4 bg-white shadow">
                <h2 className="text-lg font-semibold">
                    Hi, Max 👋
                </h2>
                <div className="flex gap-6 items-center">
                    {menuItems.map((item, index) => (
                        <NavLink
                            key={index}
                            to={item.path}
                            className={({ isActive }) =>
                                isActive ? activeClass : linkClass
                            }
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </div>
            </div>
            <div className="p-6">
                <Outlet />
            </div>
        </div>
    );
};
