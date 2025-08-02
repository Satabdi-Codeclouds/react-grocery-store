import React, { useContext } from "react";
import 'aos/dist/aos.css';
import {WishListContext} from '../context/WishListContext';
import ProductItem from '../components/products/ProductItem';

const WishlistSection = () => {
  const products = [
    {
      id: 1,
      category: "Vegetables",
      title: "Fresh organic villa farm lomon 500gm pack",
      image: "assets/images/1.jpg",
      zoomImg: "assets/images/1.jpg",
      rating: 4.5,
      newPrice: "$120.25",
      oldPrice: "$123.25"
    },
    {
      id: 2,
      category: "Snacks",
      title: "Best snakes with hazel nut pack 200gm",
      image: "assets/images/9.jpg",
      zoomImg: "assets/images/9.jpg",
      rating: 5.0,
      newPrice: "$145",
      oldPrice: "$150"
    },
    {
      id: 3,
      category: "Fruits",
      title: "Fresh organic apple 1kg simla marming",
      image: "assets/images/2.jpg",
      zoomImg: "assets/images/2.jpg",
      rating: 4.5,
      newPrice: "$120.25",
      oldPrice: "$123.25"
    },
    {
      id: 4,
      category: "Fruits",
      title: "Organic fresh venila farm watermelon 5kg",
      image: "assets/images/3.jpg",
      zoomImg: "assets/images/3.jpg",
      rating: 3.2,
      newPrice: "$50.30",
      oldPrice: "$72.60"
    }
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <i key={`full-${i}`} className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
        ))}
        {halfStar && <i className="ri-star-line mx-[1px] text-[15px] text-[#f5885f]"></i>}
        {[...Array(5 - fullStars - (halfStar ? 1 : 0))].map((_, i) => (
          <i key={`empty-${i}`} className="ri-star-line mx-[1px] text-[15px] text-[#f5885f]"></i>
        ))}
      </>
    );
  };

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
