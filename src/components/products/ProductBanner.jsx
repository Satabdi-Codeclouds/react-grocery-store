import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  const bannerData = [
    {
      img: "assets/images/product-banner/1.jpg",
      title: "Healthy \nBakery Products",
      percent: "30%",
    },
    {
      img: "assets/images/product-banner/2.jpg",
      title: "Fresh \nSnacks & Sweets",
      percent: "20%",
    },
    {
      img: "assets/images/product-banner/3.jpg",
      title: "Fresh & healthy \nOrganic Fruits",
      percent: "35%",
    },
    {
      img: "assets/images/product-banner/3.jpg",
      title: "Fresh & healthy \nOrganic Fruits",
      percent: "35%",
    },
    {
      img: "assets/images/product-banner/3.jpg",
      title: "Fresh & healthy \nOrganic Fruits",
      percent: "35%",
    }
  ];

  return (
    <section className="section-product-banner max-[1200px] relative">
      <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1600px]:max-w-[1500px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
        <div className="flex flex-wrap w-full">
          <div className="w-full px-[12px]">
            <div className="cr-banner-slider swiper-container">
              <div className="swiper-wrapper">
              
                  {bannerData.map((banner, index) => {
                    return <div
                      className="custom-swipe swiper-slide aos-init aos-animate"
                      key={index}
                      data-aos="fade-up"
                      data-aos-duration="2000"
                      style={{ width: "356px", marginRight: "24px" }}
                    >
                      <div className="cr-product-banner-image relative">
                        <img
                          src={banner.img}
                          alt="product-banner"
                          className="w-full rounded-[5px]"
                        />
                        <div className="cr-product-banner-contain p-[24px] absolute top-0 left-0 right-0 text-left h-full flex flex-col items-baseline justify-center">
                          <h5 className="mb-[15px] font-Manrope text-[20px] font-bold leading-[1.2] capitalize text-[#2b2b2d] max-[1400px]:text-[18px] max-[992px]:text-[16px] max-[768px]:text-[20px] max-[520px]:text-[18px] max-[360px]:mb-[8px] max-[360px]:text-[16px] whitespace-pre-line">
                            {banner.title}
                          </h5>
                          <p className="pb-[15px] font-Poppins text-[14px] leading-[1.2] text-[#777] max-[360px]:pb-[10px]">
                            <span className="percent mr-[5px] text-[20px] font-bold text-[#64b496]">
                              {banner.percent}
                            </span>
                            Off{" "}
                            <span className="text text-[14px] leading-[1.2] text-[#777] max-[992px]:hidden">
                              on first order
                            </span>
                          </p>
                          <div className="cr-product-banner-buttons">
                            <a
                              href="shop-left-sidebar.html"
                              className="cr-button h-[40px] font-bold transition-all duration-[0.3s] ease-in-out py-[8px] px-[22px] text-[14px] font-Manrope capitalize leading-[1.2] bg-[#64b496] text-[#fff] border-[1px] border-solid border-[#64b496] rounded-[5px] flex items-center justify-center hover:bg-[#000] hover:border-[#000] max-[992px]:h-[32px] max-[992px]:py-[8px] max-[992px]:px-[10px]"
                            >
                              shop now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  })}
              
              </div>
              <span
                className="swiper-notification"
                aria-live="assertive"
                aria-atomic="true"
              ></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductBanner;