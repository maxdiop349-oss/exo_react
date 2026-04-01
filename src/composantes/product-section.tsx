import React from 'react'
import { Link } from 'react-router-dom';

const products = [
    {
        id: 1,
        category: "MEN",
        name: "T-Shirt Name 10",
        price: "$33.00 - $36.00",
        image: "https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-09-a-246x300.jpg",
    },
    {
        id: 2,
        category: "WOMEN",
        name: "T-Shirt Name 9",
        price: "$23.00 - $28.00",
        image: "https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-06-a-246x300.jpg",
    },
    {
        id: 3,
        category: "MEN",
        name: "T-Shirt Name 8",
        price: "$21.00 - $25.00",
        image: "https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-10-a-246x300.jpg",
    },
    {
        id: 4,
        category: "WOMEN",
        name: "T-Shirt Name 7",
        price: "$36.00 - $39.00",
        image: "https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-08-a-246x300.jpg",
    },
];
export default function ProductSection() {
    return (
        <div>
            <section className="bg-gray-100 py-16">
                <div className="max-w-7xl mx-auto px-6">
                    {/* HEADER */}
                    <div className="text-center mb-12">
                        <p className="text-sm text-gray-500">Summer Collection</p>
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Popular T-Shirts
                        </h2>
                    </div>
                    {/* GRID */}
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {products.map((product) => (
                            <div key={product.id} className="space-y-3">
                                {/* IMAGE */}
                                <Link to={`/product/${product.id}`}>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-75 object-cover"
                                    />
                                </Link>

                                {/* INFO */}
                                <p className="text-xs text-gray-400">{product.category}</p>
                                <h3 className="font-semibold">{product.name}</h3>
                                <p className="text-sm text-gray-600">{product.price}</p>
                                {/* COLORS */}
                                <div className="flex gap-2">
                                    <span className="w-4 h-4 bg-black"></span>
                                    <span className="w-4 h-4 bg-pink-300"></span>
                                    <span className="w-4 h-4 bg-gray-300"></span>
                                </div>

                                {/* SIZES */}
                                <div className="flex gap-2 text-xs">
                                    {["XS", "S", "M", "L", "XL"].map((size) => (
                                        <span
                                            key={size}
                                            className="border px-2 py-1 cursor-pointer hover:bg-black hover:text-white"
                                        >
                                            {size}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="bg-gray-100 py-16 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">

                    {/* Image gauche */}
                    <div>
                        <img
                            src="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/collection-02-400x286.jpg"
                            alt="collection"
                            className="w-full h-100 object-cover"
                        />
                        <span className="text-sm text-gray-500 ">Men</span>
                        <h2 className="text-3xl md:text-4xl font-bold">
                            The base collection – Ideal every day.
                        </h2>
                        <button className="bg-black text-white px-6 py-2 mt-2 hover:bg-gray-800 transition">
                            Shop Now
                        </button>
                    </div>
                    {/* Contenu droite */}
                    <div className="flex flex-col items-center text-center gap-4">
                        {/* Image droite */}
                        <div className="md:col-span-2">
                            <img
                                src="https://images.unsplash.com/photo-1516826957135-700dedea698c"
                                alt="model"
                                className="w-full h-125 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
};
