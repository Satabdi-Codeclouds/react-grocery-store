import React from "react";

const ProductRightbar = () => {
  return (
    <div className="cr-products-rightbar relative h-full flex items-center max-[992px]:mt-[70px] max-[992px]:block">
      <img
        src="assets/images/products-rightview.jpg"
        alt="products-rightview"
        className="w-full rounded-[5px]"
      />
      <div className="cr-products-rightbar-content p-[24px] absolute right-0 top-0 bottom-0 flex flex-col items-end justify-center max-[1400px]:max-w-[200px] max-[992px]:h-[calc(100%-70px)]">
        <h4 className="mb-0 font-Manrope text-[24px] font-black leading-[1.562] text-[#2b2b2d] text-right max-[1400px]:text-[28px] max-[1200px]:text-[22px] max-[992px]:text-[32px] max-[768px]:text-[28px] max-[576px]:text-[24px] max-[480px]:text-[22px]">
          Organic &amp; Healthy <br /> Vegetables
        </h4>
        <div className="cr-off mt-[20px] flex justify-center">
          <span className="ml-[7px] px-[6px] font-Manrope text-[20px] font-black leading-[1.2] uppercase text-[#2b2b2d]">
            25% <code className="text-[14px] text-[#2b2b2d] break-words">OFF</code>
          </span>
        </div>
        <div className="rightbar-buttons flex justify-center mt-[30px] max-[576px]:mt-[15px]">
          <a
            href="shop-left-sidebar.html"
            className="cr-button h-[40px] font-bold transition-all duration-[0.3s] ease-in-out py-[8px] px-[22px] text-[14px] font-Manrope capitalize leading-[1.2] bg-[#64b496] text-white border border-[#64b496] rounded-[5px] flex items-center justify-center hover:bg-black hover:border-black"
          >
            shop now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductRightbar;
