import React, { useState } from 'react'
import { products } from '../data/data';

export default function ProductDashboard() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;

  const currentProducts = products.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(products.length / itemsPerPage);
  return (

    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">
        Products <span className="text-gray-500">({products.length})</span>
      </h1>

      <div className="overflow-hidden rounded-xl shadow">
        <table className="w-full text-left border-collapse">
          {/* HEADER */}
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-4">Image</th>
              <th className="p-4">Product Name</th>
              <th className="p-4">Price</th>
              <th className="p-4">Category</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody className="bg-white">
            {currentProducts.map((product) => (
              <tr
                key={product.id}
                className="border-b hover:bg-gray-50 transition"
              >
                {/* IMAGE */}
                <td className="p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>

                {/* NAME */}
                <td className="p-4 text-gray-700">
                  {product.name}
                </td>

                {/* PRICE */}
                <td className="p-4 font-medium">
                  {product.price}
                </td>

                {/* CATEGORY */}
                <td className="p-4 text-gray-500">
                  {product.category}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded-md border  ${currentPage === page
                ? "bg-black text-white"
                : "bg-white text-black hover:bg-gray-100"
                }`} >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
