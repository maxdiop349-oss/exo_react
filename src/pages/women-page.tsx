import React from 'react'
import { products } from '../data/data';
import ProductCard from '../element/product-card';
import { Link } from 'react-router-dom';


export default function WomenPage() {
    const womenProducts = products.filter((p) => p.category === "WOMEN");
  return (
     <div className="max-w-7xl mx-auto px-6 py-8">
      {/* HEADER */}
      <div className="mb-6">
        <nav className="text-sm text-gray-500 mb-2">
          <Link to="/">Home</Link> / <span className="ml-1 font-semibold">Women</span>
        </nav>
        <h1 className="text-3xl font-bold mb-1">Women</h1>
        <p className="text-gray-600 text-sm">
          Showing 1–{womenProducts.length} of {womenProducts.length} results
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {womenProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
