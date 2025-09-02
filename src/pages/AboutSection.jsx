import React from "react";
import ServiceSlider from "../components/ServiceSlider";

function AboutSection() {
    return (
        <>

            <section className="section-about py-[100px] max-[1200px]:py-[70px] pb-0">
                <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1600px]:max-w-[1500px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                    <div className="flex flex-wrap w-full">
                        <div className="min-[992px]:w-[50%] w-full px-[12px]">
                            <div className="cr-about h-full flex flex-col justify-center aos-init aos-animate" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="400">
                                <h4 className="heading mb-[16px] font-Manrope text-[36px] font-bold leading-[46px] max-[1200px]:text-[28px] max-[1200px]:leading-[38px] max-[992px]:text-[25px] max-[992px]:leading-[35px] max-[768px]:text-[22px] max-[768px]:leading-[32px] font-bold text-[31px] font-['Poppins']">About The Carrot</h4>
                                <div className="cr-about-content mt-[5px]">
                                    <p className="mb-[24px] text-[14px] font-Poppins text-[#7a7a7a] leading-[1.75] max-[992px]:block">The Carrot is a multi-purpose grocery platform that delivers fresh, organic, and everyday essentials to your doorstep — with a focus on quality, sustainability, and convenience.</p>
                                    <h5 className="font-bold tracking-[0] text-[20px] font-['Poppins']">Core Product Categories:</h5>
                                    <ul class="space-y-3 text-gray-700 mt-[20px]">
                                        <li class="flex items-start">
                                            <span class="text-[#64b496] mr-2">◉</span>
                                            <p><strong>Fresh Produce</strong> – Organic fruits, vegetables, herbs</p>
                                        </li>
                                        <li class="flex items-start">
                                            <span class="text-[#64b496] mr-2">◉</span>
                                            <p><strong>Dairy & Bakery</strong> – Milk, butter, cheese, breads</p>
                                        </li>
                                        <li class="flex items-start">
                                            <span class="text-[#64b496] mr-2">◉</span>
                                            <p><strong>Pantry Staples</strong> – Rice, pulses, spices, oils</p>
                                        </li>
                                        <li class="flex items-start">
                                            <span class="text-[#64b496] mr-2">◉</span>
                                            <p><strong>Snacks & Beverages</strong> – Juices, energy bars, healthy munchies</p>
                                        </li>
                                        <li class="flex items-start">
                                            <span class="text-[#64b496] mr-2">◉</span>
                                            <p><strong>Personal & Home Care</strong> – Eco-friendly cleaning & hygiene products</p>
                                        </li>
                                        <li class="flex items-start">
                                            <span class="text-[#64b496] mr-2">◉</span>
                                            <p><strong>Vegan & Gluten-Free</strong> – Special dietary items</p>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                        <div className="min-[992px]:w-[50%] w-full px-[12px] max-[992px]:mt-[30px]">
                            <div className="cr-about-image sticky top-[0] aos-init aos-animate" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="800">
                                <img src="assets/images/about.jpg" alt="side-view" className="w-full rounded-[5px]" />
                            </div>
                        </div>
                    </div>
                </div>
                <ServiceSlider />
            </section>
        </>



    );
}

export default AboutSection;
