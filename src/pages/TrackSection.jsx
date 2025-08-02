import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

const TrackSection = () => {
  const { clearCart, cartItems } = useContext(CartContext);
  const [processingOrder, setProcessingOrder] = useState(true)
  const navigate = useNavigate();

  useEffect(() => {
    if (cartItems.length <= 0) {
      navigate('/my-cart')
    } else {
      const timer = setTimeout(() => {
        setProcessingOrder(false);
        clearCart();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const [placedOn, setPlacedOn] = useState(() => {
    const dateObj = new Date();
    return `${dateObj.getDate()}/${dateObj.getMonth() + 1}/${dateObj.getFullYear()}`
  })
  const [deliveryDate, setDeliveryDate] = useState(() => {
    const dateObj = new Date();
    dateObj.setDate(dateObj.getDate() + 5);
    return `${dateObj.getDate()}/${dateObj.getMonth() + 1}/${dateObj.getFullYear()}`
  })


  return (
    <section className="cr-track py-[100px] max-[1200px]:py-[70px]">
      <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1600px]:max-w-[1500px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
        {processingOrder ?
          <div class="spinner-container">
            <div class="spinner"></div>
            <div class="spinner-text">Processing Order</div>
          </div>
          : 'Thank You. Successfully Order Placed!'}

        {/* Order Details Section */}
        {!processingOrder ?
          <div className="flex flex-wrap w-full">
            <div className="w-full">
              <div className="cr-track-box">
                {/* Track Cards */}
                <div className="flex flex-wrap w-full mb-[-24px]">
                  {[
                    { title: "order", value: `#${uuidv4()}` },
                    { title: "Placed On", value: placedOn },
                    { title: "Expected date", value: deliveryDate },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="min-[768px]:w-[33.33%] w-full px-[12px] mb-[24px]"
                    >
                      <div className="cr-track-card h-full p-[30px] flex items-center justify-center flex-col border border-[#e9e9e9] rounded-[5px] text-[#777] text-center text-[15px] bg-[#f7f7f8]">
                        <span className="cr-track-title mb-[5px] text-[#2b2b2d] capitalize text-[16px] font-medium">
                          {item.title}
                        </span>
                        <span>{item.value}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Step Progress */}
                <div className="px-[12px] mt-[24px]">
                  <div className="cr-steps border border-[#e9e9e9] rounded-[5px]">
                    <div className="cr-steps-body table table-fixed w-full max-[768px]:grid">
                      {[
                        {
                          label: "Order confirmed",
                          icon: "ri-shield-check-line",
                          status: "completed",
                        },

                        {
                          label: "Quality check",
                          icon: "ri-gift-line",
                          status: "active",
                        },
                        {
                          label: "Product dispatched",
                          icon: "ri-truck-line",
                          status: "pending",
                        },
                        {
                          label: "Product delivered",
                          icon: "ri-home-5-line",
                          status: "pending",
                        },
                      ].map((step, idx) => {
                        const isCompleted = step.status === "completed";
                        const isActive = step.status === "active";

                        return (
                          <div
                            key={idx}
                            className={`cr-step ${isCompleted
                              ? "cr-step-completed bg-[#f7f7f8]"
                              : isActive
                                ? "cr-step-active"
                                : ""
                              } py-[30px] px-[15px] table-cell relative transition-all duration-[0.25s] ease-in-out border-r border-[#e9e9e9] text-[#777] font-normal text-center capitalize max-[768px]:border-b max-[768px]:border-r-0`}
                          >
                            {isCompleted && (
                              <span className="cr-step-indicator block absolute top-[15px] right-[15px] w-[1.5rem] h-[1.5rem] border border-transparent rounded-full text-[0.875rem] bg-[#64b496] text-white leading-[1.25rem]">
                                <i className="ri-check-line leading-[23px]"></i>
                              </span>
                            )}
                            <span className="cr-step-icon block w-[1.5rem] h-[1.5rem] mt-0 mx-auto mb-[0.75rem] transition-all duration-[0.25s] ease-in-out text-[#999] text-[22px]">
                              <i className={step.icon}></i>
                            </span>
                            {step.label}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          : ''}
      </div>
    </section>
  );
};

export default TrackSection;
