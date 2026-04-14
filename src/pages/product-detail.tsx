import { useParams } from "react-router-dom";
import { products } from "../data/data";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";


export default function ProductDetail() {
  const { id } = useParams();

  const product = products.find((p) => p.id === parseInt(id as string));
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);

  if (!product) return <h1>Produit non trouvé</h1>;

  return (
    <div className="max-w-5xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10">

      {/* IMAGE */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-100 object-cover"
      />
      {/* INFO */}
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-xl text-gray-600">{product.price}</p>
        <p>{product.description}</p>
        {/* COLORS */}
        <div className="flex gap-2">
          {product.colors.map((color, i) => (
            <div
              key={i}
              onClick={() => setSelectedColor(color)}
              className={`w-6 h-6 rounded border cursor-pointer ${color}
                ${selectedColor === color ? "ring-2 ring-black" : ""}
              `}
            />
          ))}
        </div>

        {/* SIZES */}
        <div className="flex gap-2">
          {product.sizes.map((size) => (
            <button
              key={size.value}
              onClick={() => size.available && setSelectedSize(size.value)}
              disabled={!size.available}
              className={`px-3 py-1 border rounded transition
                ${selectedSize === size.value ? "bg-black text-white" : ""}
                ${!size.available ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-200"}
              `}
            >
              {size.value}
            </button>
          ))}
        </div>
        {/* Quantity + Add to card */}
        <div className="flex items-center gap-4">
          <div className="flex items-center border rounded">
            <button
              onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
              className="px-3"  >
              -
            </button>
            <span className="px-4">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-3" >
              +
            </button>
          </div>
          <button className="bg-gray-700 text-white px-6 py-2 rounded">
            Add to Cart
          </button>
        </div>
        {/* BUY NOW */}
        <button className="bg-blue-600 text-white py-3 rounded flex items-center justify-center gap-2">
          <ShoppingCart size={18} />
          Buy Now
        </button>
        {/* EXTRA INFO */}
        <p className="text-sm text-gray-500">
          SKU: N/A &nbsp; Category: {product.category}
        </p>
        {/* ACCORDION */}
        <div className="border-t pt-4 space-y-3">
          <details>
            <summary className="font-semibold cursor-pointer">
              Description
            </summary>
            <p className="text-gray-500 mt-2">
              {product.description || "Pas de description"}
            </p>
          </details>
          <details>
            <summary className="font-semibold cursor-pointer">
              Additional information
            </summary>
            <p className="text-gray-500 mt-2">
              Sizes: {product.sizes.map(s => s.value).join(", ")}
            </p>
          </details>
          <details>
            <summary className="font-semibold cursor-pointer">
              Reviews (0)
            </summary>
            <p className="text-gray-500 mt-2">
              No reviews yet.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
}