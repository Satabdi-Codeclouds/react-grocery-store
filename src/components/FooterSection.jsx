import React from 'react';

const FooterSection = () => {
  return (
    <footer className="footer pt-[100px] max-[1200px]:pt-[70px] bg-off-white bg-[#f7f7f8] relative border-t border-solid border-[#e9e9e9]">
      <div className="footer-container flex flex-wrap justify-between relative items-center mx-auto min-[1600px]:max-w-[1500px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
        <div className="flex flex-wrap w-full footer-top pb-[100px] max-[1200px]:pb-[70px]">
          {/* Footer Left Column */}
          <div className="min-[1200px]:w-[33.33%] min-[992px]:w-[50%] min-[576px]:w-full w-full px-[12px] cr-footer-border">
            <div className="cr-footer-logo max-w-[400px] mb-[15px] pb-[0]">
              <div className="image pb-[15px]">
                <img src="assets/images/logo.png" alt="logo" className="logo w-[158px] block" />
                <img src="assets/images/dark-logo.png" alt="logo" className="dark-logo w-[158px] hidden" />
              </div>
              <p className="font-Poppins text-[14px] text-[#7a7a7a] mb-0 leading-[1.75]">
                Carrot is the biggest market of grocery products. Get your daily needs from our store.
              </p>
            </div>
            <div className="cr-footer">
              <h4 className="cr-sub-title cr-title-hidden relative hidden max-[992px]:block font-Manrope text-[18px] max-[992px]:text-[15px] font-bold leading-[1.3] text-[#000] mb-[15px] max-[992px]:py-[15px] max-[992px]:mb-0 max-[992px]:border-b border-solid border-[#e9e9e9]">
                Contact us
                <span className="cr-heading-res hidden" />
                <div className="cr-heading-res">
                  <i className="ri-arrow-down-s-line" aria-hidden="true"></i>
                </div>
              </h4>
              <ul className="cr-footer-links max-[992px]:hidden cr-footer-dropdown max-[1200px]:max-w-[500px] max-[992px]:mt-[24px] active-drop-footer">
                <li className="location-icon font-Poppins text-[14px] leading-[26px] text-[#777] relative pl-[30px] mt-[-5px] mb-[12px]">
                  51 Green St.Huntington ohaio beach ontario, NY 11746 KY 4783, USA.
                </li>
                <li className="mail-icon font-Poppins text-[14px] leading-[26px] text-[#777] relative pl-[30px] mb-[12px]">
                  <a href="javascript:void(0)" className="hover:text-[#64b496]">example@email.com</a>
                </li>
                <li className="phone-icon font-Poppins text-[14px] leading-[26px] text-[#777] relative pl-[30px] mb-0">
                  <a href="javascript:void(0)" className="hover:text-[#64b496]">+91 123 4567890</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Company Column */}
          <FooterColumn
            title="Company"
            links={[
              { href: 'about.html', label: 'About Us' },
              { href: 'track-order.html', label: 'Delivery Information' },
              { href: 'policy.html', label: 'Privacy Policy' },
              { href: 'terms.html', label: 'Terms & Conditions' },
              { href: 'contact-us.html', label: 'Contact Us' },
              { href: 'faq.html', label: 'Support Center' }
            ]}
          />

          {/* Category Column */}
          <FooterColumn
            title="Category"
            links={[
              { href: 'shop-left-sidebar.html', label: 'Dairy & Bakery' },
              { href: 'shop-left-sidebar.html', label: 'Fruits & Vegetable' },
              { href: 'shop-left-sidebar.html', label: 'Snack & Spice' },
              { href: 'shop-left-sidebar.html', label: 'Juice & Drinks' },
              { href: 'shop-left-sidebar.html', label: 'Chicken & Meat' },
              { href: 'shop-left-sidebar.html', label: 'Fast Food' }
            ]}
          />

          {/* Newsletter Column */}
          <div className="min-[1200px]:w-[33.33%] min-[992px]:w-full w-full px-[12px] cr-footer-border">
            <div className="cr-footer cr-newsletter max-[1200px]:mt-[50px] max-[1200px]:pt-[50px] max-[1200px]:border-t border-solid border-[#e1dfdf] max-[992px]:mt-0 max-[992px]:pt-0 max-[992px]:border-0">
              <h4 className="cr-sub-title font-Manrope text-[18px] font-bold leading-[1.3] text-[#000] mb-[15px] max-[992px]:text-[15px] max-[992px]:border-b border-solid border-[#e9e9e9]">
                Subscribe Our Newsletter
              </h4>
              <div className="cr-footer-links max-[992px]:hidden cr-footer-dropdown max-[1200px]:max-w-[500px] max-[992px]:mt-[24px] active-drop-footer">
                <form className="cr-search-footer relative">
                  <input
                    className="search-input w-full h-[44px] py-[5px] px-[15px] border border-solid border-[#e9e9e9] outline-0 rounded-[5px]"
                    type="text"
                    placeholder="Search here..."
                  />
                  <a href="javascript:void(0)" className="search-btn w-[50px] absolute right-0 top-0 bottom-0 flex items-center justify-center">
                    <i className="ri-send-plane-fill text-[21px] text-[#000]"></i>
                  </a>
                </form>
              </div>
              <div className="cr-social-media my-[22px] mx-[-2px] flex flex-row flex-wrap">
                {['facebook-line', 'twitter-x-line', 'dribbble-line', 'instagram-line'].map((icon, idx) => (
                  <span key={idx} className="m-[2px] font-Poppins text-[17px]">
                    <a href="javascript:void(0)" className="transition-all duration-300 w-[35px] h-[35px] flex items-center justify-center bg-white border border-[#e1dfdf] rounded-[5px] text-[#000] hover:text-[#64b496]">
                      <i className={`ri-${icon}`}></i>
                    </a>
                  </span>
                ))}
              </div>

              {/* Payment/Instagram Image Slider Placeholder */}
              <div className="cr-payment mt-4">
                {/* You can add the Swiper component here dynamically */}
                {/* For static fallback, insert img tags manually */}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="cr-last-footer w-full py-[20px] border-t border-solid border-[#e9e9e9] text-center">
          <p className="font-Poppins text-[14px] text-[#000] leading-[1.2]">
            © <span id="copyright_year">{new Date().getFullYear()}</span>{' '}
            <a href="index.html" className="text-[#64b496]">Carrot</a>, All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, links }) => (
  <div className="min-[1200px]:w-[16.66%] min-[992px]:w-[25%] min-[576px]:w-full w-full px-[12px] cr-footer-border">
    <div className="cr-footer">
      <h4 className="cr-sub-title font-Manrope text-[18px] font-bold leading-[1.3] text-[#000] mb-[15px] max-[992px]:text-[15px] max-[992px]:border-b border-solid border-[#e9e9e9]">
        {title}
      </h4>
      <ul className="cr-footer-links max-[992px]:hidden cr-footer-dropdown max-[992px]:mt-[24px] active-drop-footer">
        {links.map((link, index) => (
          <li key={index} className="mb-[12px] font-Poppins text-[14px] text-[#777] relative">
            <a href={link.href} className="hover:text-[#64b496] transition-all duration-300">{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default FooterSection;
