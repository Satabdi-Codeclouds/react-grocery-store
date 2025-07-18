import React from "react";
import { Link } from "react-router-dom"; // Optional: only if you're using React Router

function BreadcrumbSection() {
    return (
        <section className="section-breadcrumb">
            <div className="cr-breadcrumb-image w-full h-[70px] bg-[#e4f2ed] z-[0] relative flex items-center max-[576px]:h-[100px]">
                <div className="container min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px] w-full m-auto">
                    <div className="flex flex-wrap w-full">
                        <div className="w-full px-[12px]">
                            <div className="cr-breadcrumb-title flex items-center justify-between flex-row max-[576px]:flex-col">
                                <h2 className="mb-[0] font-Manrope text-[19px] leading-[1] font-bold text-[#2b2b2d] max-[1200px]:text-[18px] max-[768px]:text-[17px] max-[576px]:mb-[5px] max-[576px]:text-[20px]">
                                    About Us
                                </h2>
                                <span className="font-Poppins text-[14px] leading-[1.3] font-medium text-[#7a7a7a] capitalize max-[992px]:mt-[4px]">
                                    {/* Replace <a> with <Link> if using React Router */}
                                    <a href="index.html" className="text-[#64b496]">Home</a> - About Us
                                    {/* OR */}
                                    {/* <Link to="/" className="text-[#64b496]">Home</Link> - About Us */}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BreadcrumbSection;
