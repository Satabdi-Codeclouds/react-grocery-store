import React from 'react';
// import bgDeal from './assets/images/bg-deal.jpg'; // adjust path as needed

const DealSection = () => {
  return (
    <section className="section-deal pb-[100px] max-[1200px]:pb-[70px]">
      <div
        className="bg-banner-deal w-full h-[600px] max-[992px]:h-[500px] max-[360px]:h-[450px] relative bg-no-repeat bg-center bg-cover"
        style={{ 
        backgroundImage: `url('./assets/images/bg-deal.jpg')`}}
      >
        <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1600px]:max-w-[1500px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
          <div className="flex flex-wrap w-full">
            <div className="w-full px-[12px]">
              <div className="cr-deal-rightside w-full h-[600px] flex flex-col justify-center max-[992px]:h-[500px] max-[360px]:h-[450px]">
                <div
                  className="cr-deal-content max-w-[500px] p-[24px] bg-[#ffffff38] rounded-[5px] max-[992px]:max-w-[400px] max-[768px]:max-w-full max-[576px]:text-center max-[390px]:p-[15px] max-[768px]:bg-[#f7f7f8e6]"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <span className="font-Poppins text-[16px] font-normal">
                    <code className="text-[26px] font-black leading-[1.2] text-[#64b496] max-[576px]:text-[22px]">35%</code> OFF
                  </span>
                  <h4 className="cr-deal-title mt-[12px] mb-[15px] font-Manrope text-[28px] font-bold leading-[1.2] text-[#2b2b2d] max-[992px]:text-[22px]">
                    Great deal on organic food.
                  </h4>
                  <p className="font-Poppins text-[14px] font-light text-[#7a7a7a] leading-[1.75]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do maecenas accumsan
                    lacus vel facilisis.
                  </p>
                  <div id="timer" className="cr-counter mt-[20px] flex justify-start max-[576px]:justify-center">
                    <div className="cr-counter-inner py-[12px] px-[24px] flex border-[1px] border-solid border-[#e9cbbe] rounded-[5px]">
                      {['Days', 'Hrs', 'Min', 'Sec'].map((label, index) => {
                        const ids = ['days', 'hours', 'minutes', 'seconds'];
                        const values = ['1261', '00', '29', '46'];
                        return (
                          <h4
                            key={label}
                            className="w-[45px] m-[0] relative grid font-Poppins text-[14px] leading-[1.2] font-normal text-[#7a7a7a] text-center max-[390px]:text-[12px]"
                          >
                            <span
                              id={ids[index]}
                              className="font-Poppins text-[20px] font-bold leading-[1.2] text-[#2b2b2d] max-[992px]:text-[18px] max-[390px]:text-[16px]"
                            >
                              {values[index]}
                            </span>
                            {label}
                          </h4>
                        );
                      })}
                    </div>
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

export default DealSection;
