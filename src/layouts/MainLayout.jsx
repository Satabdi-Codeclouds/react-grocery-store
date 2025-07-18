import React from 'react';

import Header from "../components/Header";
import Home from '../pages/Home';
import AboutSection from '../components/AboutSection';
// import HeroSlider from '../components/HeroSlider';
import CategorySection from '../components/CategorySection';
import ProductBanner from '../components/ProductBanner';
import ServiceSlider from '../components/ServiceSlider';
import DealSection from '../components/DealSection';
import BreadcrumbSection from '../components/BreadcrumbSection';
import FooterSection from '../components/FooterSection';
import Products from '../components/Products';
import PopularProducts from '../components/PopularProducts';
import ShopDetailsRight from '../components/ShopDetailsRight';
import CartSection from '../components/CartSection';
import CheckoutSection from '../components/checkout';
import WishlistSection from '../components/WishlistSection';
import LoginSection from '../components/LoginSection';
import ContactSection from '../components/ContactSection';
import FaqSection from '../components/FaqSection';
import TrackSection from '../components/TrackSection';
import BlogSection from '../components/BlogSection';
import PrivacyPolicy from '../components/PrivacyPolicy';


function MainLayout() {
    return (

        <div id="main-wrapper" className="main-wrapper overflow-hidden">
            <Header />
            {/* <HeroSlider/> */}
           
           <AboutSection/>
            <CategorySection />
            <Products />
            <ProductBanner />
            <ServiceSlider />
            <DealSection />

            <PopularProducts />
      
            <BreadcrumbSection/>
            <FooterSection />
            <ShopDetailsRight/>
            <CartSection/>
            <CheckoutSection/>
            <WishlistSection/>
            <LoginSection/>
            <ContactSection/>
            <FaqSection/>
            <TrackSection/>
            <BlogSection/>
            <PrivacyPolicy/>
        </div>
    );
}
export default MainLayout;
