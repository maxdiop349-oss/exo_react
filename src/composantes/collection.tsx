export default function CollectionSection() {
  return (
    <section className="bg-[#f3eaea] py-20 flex items-center justify-center">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center px-6">
        
        {/* Image */}
        <div className="flex justify-center bg-[#e9dddd] p-10 ">
          <img
            src="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/collection-03-400x563.jpg" // remplace par ton image
            alt="model"
            className="w-87.5 h-125 object-cover shadow-lg"
          />
        </div>
        {/* Texte */}
        <div className="">
          <p className="text-sm text-gray-500 mb-2">Women</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Spring Summer Collection
          </h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id leo
            tempor, congue justo at, lobortis orci. Aliquam venenatis dui lectus,
            eu convallis turpis convallis et.
          </p>
          <button className="bg-black text-white px-6 py-3 text-sm font-medium hover:bg-gray-800 transition">
            See Whole Collection
          </button>
        </div>
      </div>
    </section>
  );
}