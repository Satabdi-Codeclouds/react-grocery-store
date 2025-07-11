import React from "react";
// import Productlist from "../components/Productlist";

function Home() {
    
    return (
        <>
           
<section class="section-hero next pb-[100px] max-[1200px]:pb-[70px]">
        <div class="cr-slider swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div style={{ 
        backgroundImage: `url('./assets/images/banner.jpg')`}} class="cr-hero-banner cr-banner-image-two w-full  bg-no-repeat bg-cover bg-center h-[80vh] max-[1200px]:h-[600px] max-[768px]:h-[500px] max-[480px]:h-[400px] max-[360px]:h-[350px] relative z-[1]">
                        <div class="flex hero-container flex-wrap justify-between relative items-center mx-auto min-[1600px]:max-w-[1500px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                            <div class="flex flex-wrap w-full">
                                <div class="w-full px-[12px]">
                                    <div class="cr-left-side-contain max-w-[550px] h-[80vh] flex flex-col justify-center max-[1200px]:max-w-[400px] max-[1200px]:h-[600px] max-[768px]:max-w-[290px] max-[768px]:h-[500px] max-[480px]:max-w-[250px] max-[480px]:h-[400px] max-[360px]:max-w-[210px] max-[360px]:h-[350px] slider-animation">
                                        <h5 class="mb-[20px] text-[20px] font-Poppins font-bold leading-[1.2] max-[992px]:mb-[15px] max-[768px]:text-[14px] max-[768px]:font-normal"><span class="mr-[5px] text-[#64b496] border-b-[2px] border-solid border-[#64b496] font-bold">100%</span> Organic Vegetables</h5>
                                        <h1 class="mb-[25px] text-[55px] font-Manrope font-extrabold leading-[68px] text-[#000] relative max-[1400px]:text-[48px] max-[1400px]:leading-[56px] max-[1200px]:text-[40px] max-[1200px]:leading-[46px] max-[992px]:text-[28px] max-[992px]:leading-[36px] max-[992px]:mb-[20px] max-[768px]:text-[24px] max-[480px]:mb-[0] max-[360px]:text-[20px] max-[360px]:leading-[26px] max-[320px]:text-[22px] max-[320px]:leading-[24px] max-[320px]:mb-[10px]">The best way to stuff your wallet.</h1>
                                        <p class="mb-[0] text-[15px] font-Poppins text-[#7a7a7a] leading-[1.75] max-[768px]:text-[14px] max-[480px]:hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis
                                            beatae consequuntur.</p>
                                        <div class="cr-last-buttons mt-[30px] flex max-[992px]:mt-[18px]">
                                            <a href="shop-left-sidebar.html" class="cr-button mr-[20px] h-[40px] font-bold transition-all duration-[0.3s] ease-in-out py-[8px] px-[22px] text-[14px] font-Manrope capitalize leading-[1.2] bg-[#64b496] text-[#fff] border-[1px] border-solid border-[#64b496] rounded-[5px] flex items-center justify-center hover:bg-[#000] hover:border-[#000]">
                                                shop now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div   style={{ 
        backgroundImage: `url('./assets/images/banner-2.jpg')`}} class="cr-hero-banner cr-banner-image-one w-full   bg-no-repeat bg-cover bg-center h-[80vh] max-[1200px]:h-[600px] max-[768px]:h-[500px] max-[480px]:h-[400px] max-[360px]:h-[350px] relative z-[1]">
                        <div class="flex hero-container flex-wrap justify-between relative items-center mx-auto min-[1600px]:max-w-[1500px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                            <div class="flex flex-wrap w-full">
                                <div class="w-full px-[12px]">
                                    <div class="cr-left-side-contain max-w-[550px] h-[80vh] flex flex-col justify-center max-[1200px]:max-w-[400px] max-[1200px]:h-[600px] max-[768px]:max-w-[290px] max-[768px]:h-[500px] max-[480px]:max-w-[250px] max-[480px]:h-[400px] max-[360px]:max-w-[210px] max-[360px]:h-[350px] slider-animation">
                                        <h5 class="mb-[20px] text-[20px] font-Poppins font-bold leading-[1.2] max-[992px]:mb-[15px] max-[768px]:text-[14px] max-[768px]:font-normal"><span class="mr-[5px] text-[#64b496] border-b-[2px] border-solid border-[#64b496] font-bold">100%</span> Organic Fruits</h5>
                                        <h1 class="mb-[25px] text-[55px] font-Manrope font-extrabold leading-[68px] text-[#000] relative max-[1400px]:text-[48px] max-[1400px]:leading-[56px] max-[1200px]:text-[40px] max-[1200px]:leading-[46px] max-[992px]:text-[28px] max-[992px]:leading-[36px] max-[992px]:mb-[20px] max-[768px]:text-[24px] max-[480px]:mb-[0] max-[360px]:text-[20px] max-[360px]:leading-[26px] max-[320px]:text-[22px] max-[320px]:leading-[24px] max-[320px]:mb-[10px]">Explore fresh & juicy fruits.</h1>
                                        <p class="mb-[0] text-[15px] font-Poppins text-[#7a7a7a] leading-[1.75] max-[768px]:text-[14px] max-[480px]:hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis
                                            beatae consequuntur.</p>
                                        <div class="cr-last-buttons mt-[30px] flex max-[992px]:mt-[18px]">
                                            <a href="shop-left-sidebar.html" class="cr-button mr-[20px] h-[40px] font-bold transition-all duration-[0.3s] ease-in-out py-[8px] px-[22px] text-[14px] font-Manrope capitalize leading-[1.2] bg-[#64b496] text-[#fff] border-[1px] border-solid border-[#64b496] rounded-[5px] flex items-center justify-center hover:bg-[#000] hover:border-[#000]">
                                                shop now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </section>

        </>
    )
}
export default Home;