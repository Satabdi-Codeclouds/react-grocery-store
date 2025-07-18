import React from "react";

const TrackSection = () => {
  return (
    <section className="cr-track py-[100px] max-[1200px]:py-[70px]">
      <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1600px]:max-w-[1500px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
        {/* Hidden Banner Section */}
        <div className="flex flex-wrap w-full hidden">
          <div className="w-full px-[12px]">
            <div
              className="mb-[30px]"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="400"
            >
              <div className="cr-banner mb-[15px] text-center">
                <h2 className="font-Manrope text-[32px] font-bold leading-[1.2] text-[#2b2b2d] max-[1200px]:text-[28px] max-[992px]:text-[25px] max-[768px]:text-[22px]">
                  Popular Products
                </h2>
              </div>
              <div className="cr-banner-sub-title w-full">
                <p className="max-w-[600px] m-auto font-Poppins text-[14px] text-[#7a7a7a] leading-[22px] text-center max-[1200px]:w-[80%] max-[992px]:w-full">
                  We delivering happiness and needs, Faster than you can think.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Order Details Section */}
        <div className="flex flex-wrap w-full">
          <div className="w-full">
            <div className="cr-track-box">
              {/* Track Cards */}
              <div className="flex flex-wrap w-full mb-[-24px]">
                {[
                  { title: "order", value: "#9857" },
                  { title: "Grasshoppers", value: "M254HT" },
                  { title: "Expected date", value: "Feb 17, 2025" },
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
                        label: "Processing order",
                        icon: "ri-settings-4-line",
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
                          className={`cr-step ${
                            isCompleted
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
      </div>
    </section>
  );
};

export default TrackSection;
