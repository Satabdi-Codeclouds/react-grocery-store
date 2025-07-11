import React from 'react';

import Header from "../components/Header";
// import Footer from "../components/Footer";
import Home from '../pages/Home';
// import About from '../components/About';

function MainLayout() {
    return (
        
        <div id="main-wrapper" className="main-wrapper overflow-hidden">
            <Header />
            <Home/>
           {/* <About/> */}
            {/* <Footer /> */}
        </div>
    );
}
export default MainLayout;