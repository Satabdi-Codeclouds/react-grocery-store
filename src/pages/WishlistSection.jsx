import React, { useContext } from "react";
import 'aos/dist/aos.css';
import {WishListContext} from '../context/WishListContext';
import ProductItem from '../components/products/ProductItem';

const WishlistSection = () => {
 

  const {toggleWishList,isWished,wishListItems} = useContext(WishListContext);

  return (
    <section className="section-wishlist py-[100px] max-[1200px]:py-[70px]">
      <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1600px]:max-w-[1500px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
        {/* Wishlist Heading - hidden by default */}
        <div className="flex flex-wrap hidden">
          <div className="w-full px-[12px]">
            <div className="mb-[30px]" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="400">
              <div className="cr-banner mb-[15px] text-center">
                <h2 className="font-Manrope text-[32px] font-bold text-[#2b2b2d] max-[1200px]:text-[28px] max-[992px]:text-[25px] max-[768px]:text-[22px]">Wishlist</h2>
              </div>
              <div className="cr-banner-sub-title w-full">
                <p className="max-w-[600px] mx-auto text-[14px] text-[#7a7a7a] leading-[22px] text-center font-Poppins">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="flex flex-wrap w-full mb-[-24px]" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="400">
          {wishListItems.map((product) => (
             <ProductItem productItem={product} categoryObj={{id:product.catId}} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WishlistSection;
