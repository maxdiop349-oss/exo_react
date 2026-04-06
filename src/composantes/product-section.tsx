import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { products } from '../data/data';
import ProductCard from '../element/product-card';

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
                        {products.slice(0, 4).map((product,) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>
        </div>

    );
};
