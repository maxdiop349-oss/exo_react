import React from 'react'

export default function BoySection() {
  return (
    <div>
         <section className="bg-gray-100 py-16 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">

                    {/* Image gauche */}
                    <div>
                        <img
                            src="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/collection-02-400x286.jpg"
                            alt="collection"
                            className="w-full h-100 object-cover"
                        />
                        <span className="text-sm text-gray-500 ">Men</span>
                        <h2 className="text-3xl md:text-4xl font-bold">
                            The base collection – Ideal every day.
                        </h2>
                        <button className="bg-black text-white px-6 py-2 mt-2 hover:bg-gray-800 transition">
                            Shop Now
                        </button>
                    </div>
                    {/* Contenu droite */}
                    <div className="flex flex-col items-center text-center gap-4">
                        {/* Image droite */}
                        <div className="md:col-span-2">
                            <img
                                src="https://images.unsplash.com/photo-1516826957135-700dedea698c"
                                alt="model"
                                className="w-full h-125 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
    </div>
  );
};
