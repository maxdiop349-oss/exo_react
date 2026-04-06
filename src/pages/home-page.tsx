import React from 'react'
import ProductSection from '../composantes/product-section';
import HeroSection from '../composantes/hero-section';
import CollectionSection from '../composantes/collection';
import ReviewSection from '../composantes/review-section';
import BodySection from '../composantes/body-section';
import BoySection from '../composantes/boy-section';
import Product from '../composantes/product';

export default function HomePage() {
    return (
        <div>
           <BodySection/>
            <ProductSection/>
            <BoySection/>
            <HeroSection/>
            <CollectionSection/>
            <Product/>
            <ReviewSection/>
           
        </div>
    );
};
