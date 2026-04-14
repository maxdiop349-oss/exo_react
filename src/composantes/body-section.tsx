import React from 'react'

export default function BodySection() {
  return (

       <section className="bg-[#d8cbc6] w-full min-h-screen flex items-center">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-center">

                    {/* LEFT CONTENT */}
                    <div className="space-y-6">
                        <p className="text-sm text-gray-600">Women</p>

                        <h1 className="text-4xl md:text-6xl   font-bold leading-tight">
                            Slick. Modern. <br />
                            Awesome.
                        </h1>

                        <button className="bg-black text-white px-6 py-3 text-sm hover:bg-gray-800 transition">
                            Shop Collection
                        </button>
                    </div>
                    {/* RIGHT IMAGE */}
                    <div className="relative flex justify-center pt-5">

                        {/* CIRCLE BACKGROUND */}
                        <div className="absolute w-100 right-0 top-0 h-100  bg-white/40 rounded-full"></div>
                        <div className="absolute w-64 left-0 bottom-0 h-64 bg-white/40 rounded-full"></div>
                        {/* IMAGE */}
                        <img  src="hero.png"  alt="model"
                            className="relative h-screen object-cover"
                        />
                    </div>
                </div>
            </section>
    
  );
};
