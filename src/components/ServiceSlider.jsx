// ServiceSlider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useEffect } from "react";



const services = [
  {
    icon: "ri-customer-service-2-line",
    title: "24X7 Support",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
  },
  {
    icon: "ri-truck-line",
    title: "Delivery in 5 Days",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
  },
  {
    icon: "ri-money-dollar-box-line",
    title: "Payment Secure",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
  },
  {
    icon: "ri-red-packet-line",
    title: "Product Packing",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
  },
];

const ServiceSlider = () => {
  return (
    <section className="section-services pb-[100px] max-[1200px]:pb-[70px] relative pt-[100px]">
      <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1600px]:max-w-[1500px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
        <div className="flex flex-wrap w-full">
          <div className="w-full px-[12px]">
            <div className="cr-services-border" data-aos="fade-up">
              <Swiper
                spaceBetween={24}
                slidesPerView={"auto"}
                loop={true}
              >
                {services.map((service, index) => (
                  <SwiperSlide key={index} className="!w-[356px]">
                    <div className="cr-services p-[24px] bg-[#f7f7f8] rounded-[5px] border-[1px] border-solid border-[#e9e9e9] flex flex-col max-[768px]:justify-center">
                      <div className="cr-services-image mt-auto mr-auto mb-[12px] ml-auto block">
                        <i className={`${service.icon} text-[43px] leading-[40px] text-[#64b496]`}></i>
                      </div>
                      <div className="cr-services-contain max-[768px]:text-center">
                        <h4 className="mb-[5px] text-[18px] font-Poppins text-[#2b2b2d] leading-[1.667] font-semibold text-center max-[1400px]:text-[17px] max-[768px]:text-[15px]">
                          {service.title}
                        </h4>
                        <p className="font-Poppins text-[14px] leading-[22px] font-light text-center text-[#7a7a7a]">
                          {service.desc}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSlider;
