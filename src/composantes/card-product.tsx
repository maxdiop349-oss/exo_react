
export default function CardProduct() {
  const products = [
    {
      id: 1,
      category: "WOMEN",
      name: "T-Shirt Name 1",
      price: "$18.00 – $20.00",
      image: "https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-01-a-246x300.jpg",
      discount: "-14%",
    },
    {
      id: 2,
      category: "MEN",
      name: "T-Shirt Name 4",
      price: "$17.00 – $19.00",
      image: "https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-05-a.jpg",
      discount: "-14%",
    },
    {
      id: 3,
      category: "MEN",
      name: "T-Shirt Name 6",
      price: "$18.00 – $22.00",
      image: "https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-03-a.jpg",
      discount: "-20%",
    },
    {
      id: 4,
      category: "WOMEN",
      name: "T-Shirt Name 7",
      price: "$36.00 – $39.00",
      image: "https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-08-a.jpg",
      discount: "-10%",
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-sm text-gray-500">Summer Collection</p>
        <h2 className="text-3xl font-bold">On Sale T-Shirts</h2>
      </div>

      {/* Products */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-8 px-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-sm">
            
            {/* Image */}
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-72 object-cover rounded-md"
              />
              <span className="absolute top-3 left-3 bg-white text-xs px-2 py-1 rounded shadow">
                {product.discount}
              </span>
            </div>

            {/* Info */}
            <div className="mt-4">
              <p className="text-xs text-gray-400">{product.category}</p>
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.price}</p>

              {/* Colors */}
              <div className="flex gap-2 mt-2">
                <span className="w-4 h-4 bg-black border"></span>
                <span className="w-4 h-4 bg-gray-300 border"></span>
                <span className="w-4 h-4 bg-pink-200 border"></span>
              </div>

              {/* Sizes */}
              <div className="flex gap-2 mt-3 text-xs">
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
          </div>
        ))}
      </div>
    </section>
  );
}