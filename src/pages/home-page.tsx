import React from 'react'
import ProductSection from '../composantes/product-section';
import HeroSection from '../composantes/hero-section';
import CollectionSection from '../composantes/collection';
import CardProduct from '../composantes/card-product';
import ReviewSection from '../composantes/review-section';
import Footer from '../composantes/footer';

export default function HomePage() {
    return (
        <div>
            <section className="bg-[#d8cbc6] w-full min-h-screen flex items-center">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-center">

                    {/* LEFT CONTENT */}
                    <div className="space-y-6">
                        <p className="text-sm text-gray-600">Women</p>

                        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                            Slick. Modern. <br />
                            Awesome.
                        </h1>

                        <button className="bg-black text-white px-6 py-3 text-sm hover:bg-gray-800 transition">
                            Shop Collection
                        </button>
                    </div>
                    {/* RIGHT IMAGE */}
                    <div className="relative flex justify-center">

                        {/* CIRCLE BACKGROUND */}
                        <div className="absolute w-75 h-75 md:w-100 md:h-100 bg-white/40 rounded-full"></div>
                        {/* IMAGE */}
                        <img  src="hero.png"  alt="model"
                            className="relative  w-75 md:w-87.5 object-contain"
                        />
                    </div>
                </div>
            </section>
            <ProductSection/>
            <HeroSection/>
            <CollectionSection/>
            <CardProduct/>
            <ReviewSection/>
            <Footer/>
        </div>
    );
};
