import { useParams } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "T-Shirt Name 10",
    price: "$33.00",
    image: "https://picsum.photos/400",
    description: "High quality cotton t-shirt.",
  },
  {
    id: 3,
    name: "T-Shirt Name 9",
    price: "$25.00",
    image: "https://picsum.photos/402",
    description: "Modern and comfortable.",
  },
    {
    id: 4,
    name: "T-Shirt Name 9",
    price: "$25.00",
       image: "https://picsum.photos/403",
    description: "Modern and comfortable.",
  },
  
];

export default function ProductDetail() {
  const { id } = useParams();

  const product = products.find((p) => p.id === parseInt(id as string));

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

        {/* BUTTON */}
        <button className="bg-black text-white px-6 py-3 hover:bg-gray-800">
          Add to Cart
        </button>
      </div>

    </div>
  );
}