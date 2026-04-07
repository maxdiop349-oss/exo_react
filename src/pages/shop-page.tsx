import React, { useState } from 'react'
import ProductCard from '../element/product-card';
import { products } from '../data/data';
import { Link } from 'react-router-dom';

export default function ShopPage() {
  const [showAll, setShowAll] = useState(false);
  // si showAll = true, afficher tous les produits, sinon seulement 10
  const displayedProducts = showAll ? products : products.slice(0, 10);
  return (

    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Breadcrumb et Titre */}
      <div className="mb-6">
        <nav className="text-sm text-gray-500 mb-2">
          <Link to="/" className="hover:underline">Home</Link> /
          <span className="ml-1 font-semibold">Shop</span>
        </nav>

        <h1 className="text-3xl font-bold mb-1">Shop</h1>
        <p className="text-gray-600 text-sm">Showing 1– of {products.length} results</p>
      </div>

      {/* Grille de produits */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {displayedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

      {/* Bouton Voir tous les produits */}
      <div className='text-center mt-8'>
        <button onClick={() => setShowAll(!showAll)}
          className='bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition '>
          {showAll ? "Voir moins" : "Voir tous les produits"}
        </button>
      </div>
    </div>
  );
};
