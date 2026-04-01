export default function ReviewSection() {
  return (
    <section className="bg-gray-100 py-16">
      
      {/* HEADER */}
      <div className="text-center max-w-2xl mx-auto mb-12 px-4">
        <h2 className="text-2xl font-bold mb-4">Reviews</h2>

        <p className="text-gray-700 italic">
          “ Very good quality T-shirts and lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua quis ipsum! ”
        </p>

        {/* Stars */}
        <div className="flex justify-center gap-1 mt-4 text-yellow-500">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <span key={i}>★</span>
            ))}
        </div>

        <p className="text-sm text-gray-500 mt-2">Jane Oliver</p>
      </div>

      {/* IMAGES */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 px-6">
        
        {/* MEN */}
        <div className=" group overflow-hidden">
          <img
            src="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/cat-men-300x300.jpg"
            alt="men"
            className="w-full h-[400px] object-cover group-hover:scale-105 transition duration-500"
          />

          <div className=" bottom-0 left-0 right-0 bg-white/80 text-center py-3">
            <p className="text-xs text-gray-500">MEN</p>
            <h3 className="font-semibold text-sm">5 PRODUCTS</h3>
          </div>
        </div>

        {/* WOMEN */}
        <div className=" group overflow-hidden">
          <img
            src="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/cat-women-300x300.jpg"
            alt="women"
            className="w-full h-[400px] object-cover group-hover:scale-105 transition duration-500"
          />

          <div className=" bottom-0 left-0 right-0 bg-white/80 text-center py-3">
            <p className="text-xs text-gray-500">WOMEN</p>
            <h3 className="font-semibold text-sm">5 PRODUCTS</h3>
          </div>
        </div>

      </div>
    </section>
  );
}