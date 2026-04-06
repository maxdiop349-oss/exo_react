import { Link } from "react-router-dom";
import React, { useState } from "react";
import type { Product } from "../type/type";
// adapte le chemin

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [selectedSize, setSelectedSize] = useState<string>("");

  return (
    <Link
      to={`/product/${product.id}`}
      className="space-y-3 block hover:shadow-lg transition-shadow rounded relative p-2"
    >
      {/* IMAGE */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-75 object-cover rounded"
      />

      {/* DISCOUNT */}
      {product.discount ? (
        <span className="absolute top-2 left-2 bg-pink-500 text-white text-xs px-2 py-1 rounded">
          -{product.discount}%
        </span>
      ) : null}

      {/* INFO */}
      <p className="text-xs text-gray-400">{product.category}</p>
      <h3 className="font-semibold">{product.name}</h3>
      <p className="text-sm text-gray-600">{product.price}</p>

      {/* COLORS */}
      <div className="flex gap-2">
        {product.colors.map((color, idx) => (
            <span
      key={idx}
      className={`w-4 h-4 rounded border ${color}`}
    ></span>
        ))}
      </div>

      {/* SIZES */}
      <div className="flex gap-2 text-xs">
        {product.sizes.map((size) => (
          <span
            key={size.value}
            onClick={(e) => {
              e.preventDefault();
            if (size.available) setSelectedSize(size.value);
            }}
            className={`px-2 py-1 border text-center transition ${
              size.available
                ? selectedSize === size.value
                  ? "bg-black text-white"
                  : "hover:bg-black hover:text-white cursor-pointer"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            {size.value}
          </span>
        ))}
      </div>
    </Link>
  );
}