import React from 'react'

export default function GirlSection() {
    return (

            <section className="bg-gray-100 py-16">
                {/* IMAGES */}
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 px-6">
                    {/* MEN */}
                    <div className="relative group overflow-hidden">
                        <img
                            src="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/cat-men-300x300.jpg"
                            alt="men"
                            className="w-full h-full  transition duration-500"
                        />

                        <div className="absolute bottom-0 left-0 right-0 bg-white/80 text-center py-3">
                            <p className="text-xs text-gray-500">MEN</p>
                            <h3 className="font-semibold text-sm">5 PRODUCTS</h3>
                        </div>
                    </div>
                    {/* WOMEN */}
                    <div className="relative group overflow-hidden">
                        <img
                            src="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/cat-women-300x300.jpg"
                            alt="women"
                            className="w-full h-full  transition duration-500"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-white/80 text-center py-3">
                            <p className="text-xs text-gray-500">WOMEN</p>
                            <h3 className="font-semibold text-sm">5 PRODUCTS</h3>
                        </div>
                    </div>
                </div>
            </section>
        
    );
};
