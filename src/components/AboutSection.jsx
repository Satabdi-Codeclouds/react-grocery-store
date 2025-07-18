import React from "react";
import ServiceSlider from "./ServiceSlider";

function AboutSection() {
    return (
        <>

        <section className="section-about py-[100px] max-[1200px]:py-[70px]">
        <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1600px]:max-w-[1500px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
            <div className="flex flex-wrap w-full">
                <div className="min-[992px]:w-[50%] w-full px-[12px]">
                    <div className="cr-about h-full flex flex-col justify-center aos-init aos-animate" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="400">
                        <h4 className="heading mb-[16px] font-Manrope text-[36px] font-bold leading-[46px] max-[1200px]:text-[28px] max-[1200px]:leading-[38px] max-[992px]:text-[25px] max-[992px]:leading-[35px] max-[768px]:text-[22px] max-[768px]:leading-[32px]">About The Carrot</h4>
                        <div className="cr-about-content mt-[5px]">
                            <p className="mb-[24px] text-[14px] font-Poppins text-[#7a7a7a] leading-[1.75] max-[992px]:block">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, recusandae
                                necessitatibus quasi incidunt alias adipisci pariatur earum iure beatae assumenda
                                rerum quod. Tempora magni autem a voluptatibus neque.</p>
                            <p className="mb-[24px] text-[14px] font-Poppins text-[#7a7a7a] leading-[1.75] max-[992px]:block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vitae rerum cum
                                accusamus magni consequuntur architecto, ipsum deleniti expedita doloribus suscipit
                                voluptatum eius perferendis amet!.</p>
                            <p className="mb-[24px] text-[14px] font-Poppins text-[#7a7a7a] leading-[1.75] max-[992px]:block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, maxime amet
                                architecto est exercitationem optio ea maiores corporis beatae, dolores doloribus libero
                                nesciunt qui illum? Voluptates deserunt adipisci voluptatem magni sunt
                                sed blanditiis quod aspernatur! Iusto?</p>
                            <div className="elementor-counter mt-[24px] py-[24px] px-[12px] bg-[#f7f7f8] rounded-[5px] border-[1px] border-solid border-[#e9e9e9]">
                                <div className="flex flex-wrap w-full mb-[-30px]">
                                    <div className="min-[576px]:w-[33.33%] w-full px-[12px] mb-[30px]">
                                        <h4 className="elementor font-Manrope text-[60px] font-bold leading-[1] text-[#7a7a7a] text-center mb-[0.5rem] max-[1200px]:text-[45px] max-[992px]:text-[40px] max-[768px]:text-[35px]">
                                            <span className="elementor-counter-number text-[#64b496]">1.2</span>
                                            <span className="elementor-suffix text-[30px] ml-[-12px] max-[1200px]:ml-[-5px]">k</span>
                                        </h4>
                                        <div className="elementor-counter-title text-center">
                                            <span className="font-Manrope text-[16px] font-semibold leading-[1] max-[1200px]:text-[15px]">Vendors</span>
                                        </div>
                                    </div>
                                    <div className="min-[576px]:w-[33.33%] w-full px-[12px] mb-[30px]">
                                        <h4 className="elementor font-Manrope text-[60px] font-bold leading-[1] text-[#7a7a7a] text-center mb-[0.5rem] max-[1200px]:text-[45px] max-[992px]:text-[40px] max-[768px]:text-[35px]">
                                            <span className="elementor-counter-number text-[#64b496]">410</span>
                                            <span className="elementor-suffix text-[30px] ml-[-12px] max-[1200px]:ml-[-5px]">k</span>
                                        </h4>
                                        <div className="elementor-counter-title text-center">
                                            <span className="font-Manrope text-[16px] font-semibold leading-[1] max-[1200px]:text-[15px]">Customers</span>
                                        </div>
                                    </div>
                                    <div className="min-[576px]:w-[33.33%] w-full px-[12px] mb-[30px]">
                                        <h4 className="elementor font-Manrope text-[60px] font-bold leading-[1] text-[#7a7a7a] text-center mb-[0.5rem] max-[1200px]:text-[45px] max-[992px]:text-[40px] max-[768px]:text-[35px]">
                                            <span className="elementor-counter-number text-[#64b496]">34</span>
                                            <span className="elementor-suffix text-[30px] ml-[-12px] max-[1200px]:ml-[-5px]">k</span>
                                        </h4>
                                        <div className="elementor-counter-title text-center">
                                            <span className="font-Manrope text-[16px] font-semibold leading-[1] max-[1200px]:text-[15px]">Products</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="min-[992px]:w-[50%] w-full px-[12px] max-[992px]:mt-[30px]">
                    <div className="cr-about-image sticky top-[0] aos-init aos-animate" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="800">
                        <img src="assets/images/1.jpg" alt="side-view" className="w-full rounded-[5px]"/>
                    </div>
                </div>
            </div>
        </div>
        <ServiceSlider/>
    </section>
        </>
     

    
    );
}

export default AboutSection;
