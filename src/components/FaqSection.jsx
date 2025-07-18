import React, { useState } from "react";

const faqData = [
  "What Facilities Does Your Hotel Have?",
  "How Do I Book A Room For My Vacation?",
  "How We are best among others?",
  "Is There Any Fitness Center In Your Hotel?",
  "What Type Of Room Service Do You Offer?",
  "What Facilities Does Your Hotel Have?",
  "How Do I Book A Room For My Vacation?",
  "Is There Any Fitness Center In Your Hotel?",
  "There Any Fitness Is Center In Your Hotel?",
];

function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index) => {
    setActiveIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="section-faq py-[100px] max-[1200px]:py-[70px]">
      <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1600px]:max-w-[1500px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
        <div className="w-full flex flex-wrap mb-[-30px]">
          {/* Image Column */}
          <div className="min-[992px]:w-[50%] w-full px-[12px] mb-[30px]">
            <div className="cr-faq-img">
              <img
                src="assets/images/1.jpg"
                alt="about"
                className="w-full rounded-[5px]"
              />
            </div>
          </div>

          {/* FAQ Column */}
          <div
            className="min-[992px]:w-[50%] w-full px-[12px] mb-[30px] aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="400"
          >
            <div className="cr-faq">
              <div className="cr-accordion style-1 mb-[-10px]">
                {faqData.map((question, index) => (
                  <div
                    key={index}
                    className="cr-accordion-item overflow-hidden mb-[10px] border-[1px] border-solid border-[#eee] rounded-[5px]"
                  >
                    <h4
                      onClick={() => toggle(index)}
                      className={`accordion-head m-0 p-[14px] text-[#4b5966] text-[16px] leading-[20px] font-medium relative border-b-[1px] border-solid border-[#eee] font-Poppins cursor-pointer tracking-[0] max-[768px]:text-[15px] ${
                        activeIndex === index ? "active-arrow" : ""
                      }`}
                    >
                      {question}
                    </h4>
                    <div
                      className={`accordion-body py-[15px] px-[15px] ${
                        activeIndex === index ? "block" : "hidden"
                      }`}
                    >
                      <p className="text-[14px] font-Poppins text-[#7a7a7a] leading-[1.75]">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad voluptate
                        doloribus eos sunt labore ea enim voluptatem, sequi voluptas rem
                        doloremque architecto. Libero, vero natus.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
