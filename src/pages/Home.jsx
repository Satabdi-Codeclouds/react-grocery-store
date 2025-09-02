import React from "react";
import PopularProducts from './../components/products/PopularProducts';
import HeroSlider from './../components/HeroSlider'
import CategorySection from './../components/CategorySection'
import ProductBanner from './../components/products/ProductBanner'
import ServiceSlider from './../components/ServiceSlider'
import DealSection from './../components/DealSection'
import BlogSection from './../components/BlogSection'
import FooterSection from './../components/FooterSection'
import TestimonialSection from './../components/Testimonailssection'


function Home() {

    return (
        <>
            
            <HeroSlider />
            <CategorySection />
            <PopularProducts />
            <ProductBanner />
            <ServiceSlider />
            <DealSection />
            <TestimonialSection/>
            <BlogSection />
            
            

        </>
    )
}
export default Home;