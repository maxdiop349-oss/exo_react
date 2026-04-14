import { Box, Users } from 'lucide-react';
import React from 'react'

export default function HomeDashboard() {
  return (
    <div>
       <div className="text-center mt-10">
                    <h1 className="text-3xl font-bold text-gray-700">
                        Admin Dashboard
                    </h1>
                </div>
                {/* CARDS */}
                <div className="flex justify-center gap-8 mt-10 flex-wrap">
                    {/* USERS CARD */}
                    <div className="bg-white p-6 rounded-xl shadow w-60">
                        <h3 className="text-lg font-semibold mb-4">Users</h3>
                        <div className="flex items-center gap-2">
                            <Users className="w-5 h-5" />
                            <span className="text-blue-500 font-bold text-lg">3</span>
                        </div>
                    </div>

                    {/* PRODUCTS CARD */}
                    <div className="bg-white p-6 rounded-xl shadow w-60">
                        <h3 className="text-lg font-semibold mb-4">Products</h3>
                        <div className="flex items-center gap-2">
                            <Box className="w-5 h-5" />
                            <span className="text-blue-500 font-bold text-lg">17</span>
                        </div>
                    </div>
                </div>
                {/* CHART PLACEHOLDER */}
                <div className="flex justify-center mt-10">
                    <div className="bg-white p-6 rounded-xl shadow w-[400px]">
                        <p className="text-center text-gray-500 mb-4"># of Items</p>

                        {/* Fake chart bars */}
                        <div className="flex items-end justify-around h-40">
                            <div className="bg-blue-200 w-16 h-16"></div>
                            <div className="bg-red-200 w-16 h-32"></div>
                        </div>

                        <div className="flex justify-around mt-2 text-sm text-gray-600">
                            <span>Users</span>
                            <span>Products</span>
                        </div>
                    </div>
                </div>
    </div>
  );
};
