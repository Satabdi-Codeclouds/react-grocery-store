import React from "react";

const ShopSidebar = () => {
  return (
    <div className="cr-shop-sideview p-[24px] bg-[#f7f7f8] border border-[#e9e9e9] rounded-[5px] sticky top-[30px]">
      {/* Categories */}
      <div className="cr-shop-categories">
        <h4 className="cr-shop-sub-title mb-0 pb-[10px] font-Poppins text-[16px] font-medium leading-[1.6] text-[#2b2b2d] capitalize border-b border-[#e9e9e9] max-[992px]:text-[18px]">
          Category
        </h4>
        <div className="cr-checkbox pt-[28px] max-[992px]:pt-[30px]">
          {[
            { id: "drinks", label: "Juice & Drinks", count: 20 },
            { id: "drinks1", label: "Dairy & Milk", count: 54 },
            { id: "drinks2", label: "Snack & Spice", count: 64 },
          ].map(({ id, label, count }) => (
            <div key={id} className="checkbox-group flex items-center relative mb-[15px]">
              <input type="checkbox" id={id} className="hidden cursor-pointer" />
              <label htmlFor={id} className="font-Poppins text-[14px] text-[#7a7a7a] cursor-pointer capitalize inline-block">
                {label}
              </label>
              <span className="font-Poppins text-[12px] text-[#7a7a7a] absolute right-0">[{count}]</span>
            </div>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="cr-shop-price pt-[25px]">
        <h4 className="cr-shop-sub-title mb-0 pb-[10px] font-Poppins text-[16px] font-medium leading-[1.6] text-[#2b2b2d] capitalize border-b border-[#e9e9e9] max-[992px]:text-[18px]">
          Price
        </h4>
        <div className="price-range-slider w-full mt-[30px]">
          {/* Replace with proper range slider later */}
          <div className="range-bar h-[3px] w-full ml-[8px] bg-[#e9e9e9] relative">
            <div className="absolute bg-[#64b496] h-full left-0 w-[82%]"></div>
            <span className="absolute left-0 h-[16px] w-[16px] rounded-full bg-[#64b496] top-[-6px]"></span>
            <span className="absolute left-[82%] h-[16px] w-[16px] rounded-full bg-[#64b496] top-[-6px]"></span>
          </div>
          <p className="range-value my-[20px] flex items-center gap-2">
            <label className="font-Poppins text-[15px] font-bold text-[#000] max-[1400px]:text-[14px]">
              Price:
            </label>
            <input
              type="text"
              id="amount"
              readOnly
              placeholder=""
              className="flex-1 pl-[6px] bg-[#f7f7f8] font-Poppins text-[15px] font-bold text-[#7a7a7a] border-0 outline-none"
            />
          </p>
          <button
            type="button"
            className="cr-button h-[40px] font-bold transition-all duration-300 ease-in-out py-[8px] px-[22px] text-[14px] font-Manrope capitalize leading-[1.2] bg-[#64b496] text-white border border-[#64b496] rounded-[5px] hover:bg-black hover:border-black"
          >
            Filter
          </button>
        </div>
      </div>

      {/* Colors */}
      <div className="cr-shop-color pt-[25px]">
        <h4 className="cr-shop-sub-title mb-0 pb-[10px] font-Poppins text-[16px] font-medium text-[#2b2b2d] capitalize border-b border-[#e9e9e9] max-[992px]:text-[18px]">
          Colors
        </h4>
        <div className="cr-checkbox pt-[28px] max-[992px]:pt-[30px]">
          {[
            { id: "blue", label: "Blue", color: "#6c9eff" },
            { id: "yellow", label: "Yellow", color: "#dede44" },
            { id: "red", label: "Red", color: "#fb5555" },
            { id: "green", label: "Green", color: "#64b496" },
          ].map(({ id, label, color }) => (
            <div key={id} className="checkbox-group flex items-center relative mb-[15px]">
              <input type="checkbox" id={id} className="hidden cursor-pointer" />
              <label htmlFor={id} className="font-Poppins text-[14px] text-[#7a7a7a] cursor-pointer capitalize">
                {label}
              </label>
              <span
                className="absolute right-0 h-[20px] w-[20px] rounded-[5px]"
                style={{ backgroundColor: color }}
              ></span>
            </div>
          ))}
        </div>
      </div>

      {/* Weight */}
      <div className="cr-shop-weight pt-[25px]">
        <h4 className="cr-shop-sub-title mb-0 pb-[10px] font-Poppins text-[16px] font-medium text-[#2b2b2d] capitalize border-b border-[#e9e9e9] max-[992px]:text-[18px]">
          Weight
        </h4>
        <div className="cr-checkbox py-[28px] max-[992px]:pt-[30px]">
          {["2kg Pack", "20kg Pack", "30kg Pack"].map((label, index) => {
            const id = `weight-${index}`;
            return (
              <div key={id} className="checkbox-group flex items-center relative mb-[15px]">
                <input type="checkbox" id={id} className="hidden cursor-pointer" />
                <label htmlFor={id} className="font-Poppins text-[14px] text-[#7a7a7a] cursor-pointer capitalize">
                  {label}
                </label>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tags */}
      <div className="cr-shop-tags">
        <h4 className="cr-shop-sub-title mb-0 pb-[10px] font-Poppins text-[16px] font-medium text-[#2b2b2d] capitalize border-b border-[#e9e9e9] max-[992px]:text-[18px]">
          Tags
        </h4>
        <div className="cr-shop-tags-inner pt-[25px]">
          <ul className="cr-tags m-[-5px] p-0 flex flex-wrap">
            {["Vegetables", "Juice", "Food", "Dry Fruits", "Vegetables", "Juice"].map((tag, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="transition-all duration-300 ease-in-out h-[32px] px-[15px] m-[5px] rounded-[5px] font-Poppins text-[14px] bg-white text-[#7a7a7a] border border-[#e9e9e9] leading-[30px] capitalize hover:text-white hover:bg-[#64b496] hover:border-[#64b496]"
                >
                  {tag}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ShopSidebar;
