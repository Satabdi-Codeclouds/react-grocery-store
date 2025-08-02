import React from 'react';

const ContactSection = () => {


  return (
    <section className="section-Contact py-[100px] max-[1200px]:py-[70px]">
      <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1600px]:max-w-[1500px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
        <div className="flex flex-wrap w-full">
          <div className="w-full px-[12px]">
            <div
              className="mb-[30px]"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="400"
            >
              <div className="cr-banner mb-[15px] text-center">
                <h2 className="font-Manrope text-[32px] font-bold leading-[1.2] text-[#2b2b2d] max-[1200px]:text-[28px] max-[992px]:text-[25px] max-[768px]:text-[22px]">
                  Get in Touch
                </h2>
              </div>
              <div className="cr-banner-sub-title w-full">
                <p className="max-w-[600px] m-auto font-Poppins text-[14px] text-[#212529] leading-[22px] text-center max-[1200px]:w-[80%] max-[992px]:w-full">
                  Prepared is me marianne pleasure likewise debating. Wonder an unable except better stairs
                  do ye admire. His secure called esteem praise.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info Boxes */}
        <div className="flex flex-wrap w-full mb-[-24px]">
          {/* Phone */}
          <div
            className="min-[992px]:w-[33.33%] min-[768px]:w-[50%] w-full px-[12px] mb-[24px]"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="400"
          >
            <div className="cr-info-box p-[24px] bg-[#fff] border border-[#e9e9e9] rounded-[5px] text-center max-[768px]:max-w-[350px] max-[768px]:m-auto max-[576px]:max-w-[300px]">
              <div className="cr-icon">
                <i className="ri-phone-line text-[30px] text-[#64b496]"></i>
              </div>
              <div className="cr-info-content">
                <h4 className="heading font-Manrope text-[18px] font-bold text-[#2b2b2d] leading-[1.2] mb-[0.5rem] max-[992px]:text-[22px]">Contact</h4>
                <p className="font-Poppins leading-[1.75] text-[14px] max-[992px]:text-[13px] m-0 text-[#777]">
                  <a href="tel:+919876543210" className="text-[#000]"><i className="ri-phone-line"></i> &nbsp; (+91)-9876XXXXX</a>
                </p>
                <p className="font-Poppins leading-[1.75] text-[14px] max-[992px]:text-[13px] m-0 text-[#777]">
                  <a href="tel:+919876543219" className="text-[#000]"><i className="ri-phone-line"></i> &nbsp; (+91)-987654XXXX</a>
                </p>
              </div>
            </div>
          </div>

          {/* Mail & Website */}
          <div
            className="min-[992px]:w-[33.33%] min-[768px]:w-[50%] w-full px-[12px] mb-[24px]"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="600"
          >
            <div className="cr-info-box p-[24px] bg-[#fff] border border-[#e9e9e9] rounded-[5px] text-center max-[768px]:max-w-[350px] max-[768px]:m-auto max-[576px]:max-w-[300px]">
              <div className="cr-icon">
                <i className="ri-mail-line text-[30px] text-[#64b496]"></i>
              </div>
              <div className="cr-info-content">
                <h4 className="heading font-Manrope text-[18px] font-bold text-[#2b2b2d] leading-[1.2] mb-[0.5rem] max-[992px]:text-[22px]">Mail &amp; Website</h4>
                <p className="font-Poppins leading-[1.75] text-[14px] max-[992px]:text-[13px] m-0 text-[#777]">
                  <a href="mailto:mail.example@gmail.com" className="text-[#000]"><i className="ri-mail-line"></i> &nbsp; mail.example@gmail.com</a>
                </p>
                <p className="font-Poppins leading-[1.75] text-[14px] max-[992px]:text-[13px] m-0 text-[#777]">
                  <a href="#" target="_blank" rel="noreferrer" className="text-[#000]"><i className="ri-globe-line"></i> &nbsp; www.yourdomain.com</a>
                </p>
              </div>
            </div>
          </div>

          {/* Address */}
          <div
            className="min-[992px]:w-[33.33%] w-full px-[12px] mb-[24px]"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="800"
          >
            <div className="cr-info-box p-[24px] bg-[#fff] border border-[#e9e9e9] rounded-[5px] text-center max-[768px]:max-w-[350px] max-[768px]:m-auto max-[576px]:max-w-[300px]">
              <div className="cr-icon">
                <i className="ri-map-pin-line text-[30px] text-[#64b496]"></i>
              </div>
              <div className="cr-info-content">
                <h4 className="heading font-Manrope text-[18px] font-bold text-[#2b2b2d] leading-[1.2] mb-[0.5rem] max-[992px]:text-[22px]">Address</h4>
                <p className="font-Poppins leading-[1.75] text-[14px] max-[992px]:text-[13px] m-0 text-[#777]">
                  <a href="#" className="text-[#000]"><i className="ri-map-pin-line"></i> &nbsp; 140 Ruami Moraes Filho, 987 - Salvador - MA, 40352, Brazil.</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Map + Contact Form */}
        <div className="flex flex-wrap w-full pt-[100px] max-[1200px]:pt-[70px] mb-[-24px]">
          <div
            className="min-[768px]:w-[50%] w-full px-[12px] mb-[24px]"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="400"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"
              title="maps"
              className="w-full h-full mb-[-7px] border border-[#e9e9e9] rounded-[5px]"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* Form */}
          <div
            className="min-[768px]:w-[50%] w-full px-[12px] mb-[24px]"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="800"
          >
            <form className="cr-content-form">
              <div className="form-group mb-[24px]">
                <input type="text" placeholder="Full Name" className="cr-form-control w-full py-[0.576rem] px-[0.75rem] block text-[16px] font-normal leading-[1.5] text-[#000] border border-[#e9e9e9] outline-none appearance-none rounded-[5px]" />
              </div>
              <div className="form-group mb-[24px]">
                <input type="email" placeholder="Email" className="cr-form-control w-full py-[0.576rem] px-[0.75rem] block text-[16px] font-normal leading-[1.5] text-[#000] border border-[#e9e9e9] outline-none appearance-none rounded-[5px]" />
              </div>
              <div className="form-group mb-[24px]">
                <input type="text" placeholder="Phone" className="cr-form-control w-full py-[0.576rem] px-[0.75rem] block text-[16px] font-normal leading-[1.5] text-[#000] border border-[#e9e9e9] outline-none appearance-none rounded-[5px]" />
              </div>
              <div className="form-group mb-[24px]">
                <textarea rows="4" placeholder="Message" className="cr-form-control w-full py-[0.576rem] px-[0.75rem] block text-[16px] font-normal leading-[1.5] text-[#000] border border-[#e9e9e9] outline-none appearance-none rounded-[5px]"></textarea>
              </div>
              <button
                type="button"
                className="cr-button h-[40px] font-bold transition-all duration-[0.3s] ease-in-out py-[8px] px-[22px] text-[14px] font-Manrope capitalize leading-[1.2] bg-[#64b496] text-[#fff] border border-[#64b496] rounded-[5px] flex items-center justify-center hover:bg-[#000] hover:border-[#000]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
