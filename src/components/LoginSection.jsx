import React from "react";

const LoginSection = () => {
  return (
    <section className="section-login py-[100px] max-[1200px]:py-[70px]">
      <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1600px]:max-w-[1500px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
        
        {/* Optional: Title and Subtitle section (currently hidden) */}
        <div className="w-full flex flex-wrap hidden">
          <div className="w-full px-[12px]">
            <div
              className="mb-[30px]"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="400"
            >
              <div className="cr-banner mb-[15px] text-center">
                <h2 className="font-Manrope text-[32px] font-bold leading-[1.2] text-[#2b2b2d] max-[1200px]:text-[28px] max-[992px]:text-[25px] max-[768px]:text-[22px]">
                  Login
                </h2>
              </div>
              <div className="cr-banner-sub-title w-full">
                <p className="max-w-[600px] m-auto font-Poppins text-[14px] text-[#212529] leading-[22px] text-center max-[1200px]:w-[80%] max-[992px]:w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore lacus vel facilisis.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Login Form */}
        <div className="w-full flex flex-wrap">
          <div className="w-full px-[12px]">
            <div
              className="cr-login max-w-[400px] m-auto p-[30px] bg-[#fff] border-[1px] border-solid border-[#e9e9e9] rounded-[5px]"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="400"
            >
              <div className="form-logo w-full mb-[30px] flex items-center justify-center">
                <img src="assets/images/logo.png" alt="logo" />
              </div>
              <form className="cr-content-form">
                <div className="form-group mb-[24px]">
                  <label className="mb-[9px] text-[#444] text-[15px] font-medium tracking-[0] leading-[1] inline-block">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="cr-form-control w-full py-[0.576rem] px-[0.75rem] block text-[16px] font-normal leading-[1.5] text-[#000] border-[1px] border-solid border-[#e9e9e9] outline-[0] appearance-none rounded-[5px]"
                  />
                </div>
                <div className="form-group mb-[24px]">
                  <label className="mb-[9px] text-[#444] text-[15px] font-medium tracking-[0] leading-[1] inline-block">
                    Password*
                  </label>
                  <input
                    type="password"
                    placeholder="Enter Your password"
                    className="cr-form-control w-full py-[0.576rem] px-[0.75rem] block text-[16px] font-normal leading-[1.5] text-[#000] border-[1px] border-solid border-[#e9e9e9] outline-[0] appearance-none rounded-[5px]"
                  />
                </div>
                <div className="remember text-[#777] text-[14px] font-normal tracking-[0] flex justify-between items-center leading-[15px] max-[420px]:flex-col max-[420px]:justify-start max-[420px]:items-baseline">
                  <span className="form-group custom flex items-center relative cursor-pointer m-[0]">
                    <input
                      type="checkbox"
                      id="remember"
                      className="p-[0] h-[initial] w-[initial] mb-[0] hidden cursor-pointer mr-[5px]"
                    />
                    <label
                      htmlFor="remember"
                      className="text-[#777] text-[15px] font-normal tracking-[0] leading-[1] inline-block cursor-pointer max-[420px]:mb-[10px]"
                    >
                      Remember Me
                    </label>
                  </span>
                  <a
                    className="link text-[#777] text-[14px] font-normal leading-[15px] tracking-[0]"
                    href="forgot.html"
                  >
                    Forgot Password?
                  </a>
                </div>
                <br />
                <div className="login-buttons text-center flex justify-between items-center flex-wrap">
                  <button
                    type="button"
                    className="cr-button transition-all duration-[0.3s] ease-in-out mr-[15px] py-[8px] px-[20px] h-[40px] text-[14px] font-Manrope font-bold capitalize leading-[1.2] bg-[#64b496] text-[#fff] border-[1px] border-solid border-[#64b496] rounded-[5px] flex items-center justify-center hover:bg-[#000] hover:border-[#000]"
                  >
                    Login
                  </button>
                  <a href="register.html" className="link py-[8px] text-[#777]">
                    Signup?
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginSection;
