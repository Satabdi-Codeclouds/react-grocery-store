import React, { useContext, useEffect } from 'react';
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Home from '../pages/Home';
import AboutSection from '../components/AboutSection';
import HeroSlider from '../components/HeroSlider';
import CategorySection from '../components/CategorySection';
// import ProductBanner from '../components/ProductBanner';
import ServiceSlider from '../components/ServiceSlider';
import DealSection from '../components/DealSection';
import BreadcrumbSection from '../components/BreadcrumbSection';
import FooterSection from '../components/FooterSection';
import Products from '../components/Products';
// import PopularProducts from '../components/PopularProducts';
import ShopDetailsRight from '../components/ShopDetailsRight';
// import CartSection from '../components/CartSection';
// import CheckoutSection from '../components/checkout';
// import WishlistSection from '../components/WishlistSection';
import LoginSection from '../components/LoginSection';
import ContactSection from '../components/ContactSection';
import FaqSection from '../components/FaqSection';
// import TrackSection from '../components/TrackSection';
import BlogSection from '../components/BlogSection';
import PrivacyPolicy from '../components/PrivacyPolicy';

import { CartProvider } from '../context/CartContext';
import { WishListContextProvider } from '../context/WishListContext';
import AOS from "aos";
import "aos/dist/aos.css";

import {LoginModalContextProvider,LoginModalContext} from './../context/LoginModalContext';

function MainLayout({ children }) {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);


    return (

        // <div id="main-wrapper" className="main-wrapper overflow-hidden">
        //     <Header />
        //     <HeroSlider/>

        //    {/* <AboutSection/> */}
        //     <CategorySection />
        //     <Products />
        //     <ProductBanner />
        //     <ServiceSlider />
        //     <DealSection />

        //     <PopularProducts />

        //     {/* <BreadcrumbSection/> */}
        //      <BlogSection/>
        //     <FooterSection />
        //     {/* <ShopDetailsRight/> */}
        //     {/* <CartSection/> */}
        //     {/* <CheckoutSection/> */}
        //     {/* <WishlistSection/> */}
        //     {/* <LoginSection/> */}
        //     {/* <ContactSection/> */}
        //     {/* <FaqSection/> */}
        //     {/* <TrackSection/> */}

        //     {/* <PrivacyPolicy/> */}
        // </div>
        <>
            <CartProvider>
                <WishListContextProvider>
                    <LoginModalContextProvider>
                        <Header />
                        {children ? children : <Outlet />}
                        <FooterSection />
                        <LoginSection/>
                    </LoginModalContextProvider>
                </WishListContextProvider>
            </CartProvider>
        </>
    );
}
export default MainLayout;
