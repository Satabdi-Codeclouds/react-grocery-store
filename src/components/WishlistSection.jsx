import React from "react";
import 'aos/dist/aos.css';

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
          {products.map((product) => (
            <div key={product.id} className="min-[992px]:w-[25%] w-[50%] max-[480px]:w-full cr-product-box px-[12px] mb-[24px]">
              <div className="cr-product-card h-full p-[12px] border border-[#e9e9e9] bg-white rounded-[5px] overflow-hidden flex-col">
                <div className="cr-product-image flex items-center justify-center relative rounded-[5px]">
                  <div className="cr-image-inner w-full h-full flex items-center justify-center relative overflow-hidden max-[992px]:pointer-events-none">
                    <img src={product.image} alt={product.title} className="w-full rounded-[5px]" />
                    <img
                      role="presentation"
                      alt=""
                      src={product.zoomImg}
                      className="zoomImg absolute top-0 left-0 opacity-0 w-[600px] h-[600px]"
                    />
                  </div>

                  <div className="cr-side-view absolute z-20 top-[15px] right-[-40px] grid opacity-0 max-[992px]:right-[12px] transition-all duration-400 ease-in-out">
                    <a href="#" className="cr-remove-product w-[35px] h-[35px] bg-black text-white flex items-center justify-center mb-[5px] border border-[#e9e9e9] rounded-full">
                      <i className="ri-close-line text-[18px] leading-[10px]"></i>
                    </a>
                    <a href="#" className="wishlist w-[35px] h-[35px] flex items-center justify-center border border-[#e9e9e9] bg-white rounded-full">
                      <i className="ri-heart-line text-[18px] leading-[10px]"></i>
                    </a>
                    <a href="#" className="model-oraganic-product w-[35px] h-[35px] flex items-center justify-center border border-[#e9e9e9] bg-white rounded-full mt-[5px] cursor-pointer">
                      <i className="ri-eye-line text-[18px] leading-[10px]"></i>
                    </a>
                  </div>

                  <a href="#" className="cr-shopping-bag absolute bottom-[-16px] w-[35px] h-[35px] flex items-center justify-center bg-[#f7f7f8] border border-[#e9e9e9] rounded-full">
                    <i className="ri-shopping-bag-line text-[#64b496]"></i>
                  </a>
                </div>

                <div className="cr-product-details pt-[24px] text-center max-[1200px]:pt-[20px] overflow-hidden">
                  <div className="cr-brand">
                    <a href="shop-left-sidebar.html" className="text-[13px] text-[#777] mb-[5px] flex justify-center">{product.category}</a>
                    <div className="cr-star mb-[12px] flex justify-center items-center">
                      {renderStars(product.rating)}
                      <p className="ml-[5px] text-[11px] text-[#999] leading-[10px] mb-0">({product.rating})</p>
                    </div>
                  </div>
                  <a href="product-left-sidebar.html" className="title text-[15px] font-medium text-[#2b2b2d] hover:text-[#64b496] flex justify-center mb-[12px]">
                    {product.title}
                  </a>
                  <p className="cr-price text-[16px] text-[#7a7a7a] max-[1200px]:text-[14px] leading-[1.75] font-Poppins">
                    <span className="new-price font-bold text-[#64b496]">{product.newPrice}</span>
                    <span className="old-price ml-[5px] line-through text-[13px] text-[#7a7a7a] max-[1200px]:text-[12px]">{product.oldPrice}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WishlistSection;
