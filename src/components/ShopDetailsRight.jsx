
import React from "react"
function ShopDetailsRight() {
  return (


    <>
      <section className="section-product pt-[100px] max-[1200px]:pt-[70px]">
        <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1600px]:max-w-[1500px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
          <div className="flex flex-wrap w-full mb-[-30px]">
            <div className="min-[992px]:w-[25%] w-full px-[12px] mb-[30px] aos-init aos-animate" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="400">
              <div className="cr-shop-sideview p-[24px] bg-[#f7f7f8] border-[1px] border-solid border-[#e9e9e9] rounded-[5px] sticky top-[30px]">
                <div className="cr-shop-categories">
                  <h4 className="cr-shop-sub-title mb-[0] pb-[10px] font-Poppins text-[16px] font-medium leading-[1.6] text-[#2b2b2d] capitalize border-b-[1px] border-solid border-[#e9e9e9] max-[992px]:text-[18px]">Category</h4>
                  <div className="cr-checkbox pt-[28px] max-[992px]:pt-[30px]">
                    <div className="checkbox-group flex items-center relative mb-[15px]">
                      <input type="checkbox" id="drinks" className="h-[initial] w-[initial] m-[0] p-[0] hidden cursor-pointer" />
                      <label for="drinks" className="relative font-Poppins text-[14px] text-[#7a7a7a] cursor-pointer capitalize inline-block">Juice &amp; Drinks</label>
                      <span className="font-Poppins text-[12px] text-[#7a7a7a] absolute right-[0]">[20]</span>
                    </div>
                    <div className="checkbox-group flex items-center relative mb-[15px]">
                      <input type="checkbox" id="drinks1" className="h-[initial] w-[initial] m-[0] p-[0] hidden cursor-pointer" />
                      <label for="drinks1" className="relative font-Poppins text-[14px] text-[#7a7a7a] cursor-pointer capitalize inline-block">Dairy &amp; Milk</label>
                      <span className="font-Poppins text-[12px] text-[#7a7a7a] absolute right-[0]">[54]</span>
                    </div>
                    <div className="checkbox-group flex items-center relative">
                      <input type="checkbox" id="drinks2" className="h-[initial] w-[initial] m-[0] p-[0] hidden cursor-pointer" />
                      <label for="drinks2" className="relative font-Poppins text-[14px] text-[#7a7a7a] cursor-pointer capitalize inline-block">Snack &amp; Spice</label>
                      <span className="font-Poppins text-[12px] text-[#7a7a7a] absolute right-[0]">[64]</span>
                    </div>
                  </div>
                </div>
                <div className="cr-shop-price pt-[25px]">
                  <h4 className="cr-shop-sub-title mb-[0] pb-[10px] font-Poppins text-[16px] font-medium leading-[1.6] text-[#2b2b2d] capitalize border-b-[1px] border-solid border-[#e9e9e9] max-[992px]:text-[18px]">Price</h4>
                  <div className="price-range-slider w-full mt-[30px]">
                    <div id="slider-range" className="range-bar h-[3px] w-full ml-[8px] border-[0] bg-[#e9e9e9] ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"><div className="ui-slider-range ui-corner-all ui-widget-header" style={{ left: '0%', width: '82.1429%' }}></div><span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default" style={{ left: '0%' }}></span><span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default" style={{ left: '82.1429%' }}></span></div>
                    <p className="range-value my-[20px] flex">
                      <label className="font-Poppins text-[15px] font-bold leading-[1.2] text-[#000] max-[1400px]:text-[14px]">Price :</label>
                      <input type="text" id="amount" placeholder="'" className="w-[calc(100%-50px)] pl-[6px] bg-[#f7f7f8] font-Poppins text-[15px] font-bold leading-[1.2] tracking-[0] text-[#7a7a7a] border-[0] outline-[0]" readonly="" />
                    </p>
                    <button type="button" className="cr-button h-[40px] font-bold transition-all duration-[0.3s] ease-in-out py-[8px] px-[22px] text-[14px] font-Manrope capitalize leading-[1.2] bg-[#64b496] text-[#fff] border-[1px] border-solid border-[#64b496] rounded-[5px] flex items-center justify-center hover:bg-[#000] hover:border-[#000]">Filter</button>
                  </div>
                </div>
                <div className="cr-shop-color pt-[25px]">
                  <h4 className="cr-shop-sub-title mb-[0] pb-[10px] font-Poppins text-[16px] font-medium leading-[1.6] text-[#2b2b2d] capitalize border-b-[1px] border-solid border-[#e9e9e9] max-[992px]:text-[18px]">Colors</h4>
                  <div className="cr-checkbox pt-[28px] max-[992px]:pt-[30px]">
                    <div className="checkbox-group flex items-center relative mb-[15px]">
                      <input type="checkbox" id="blue" className="h-[initial] w-[initial] mb-[0] p-[0] hidden cursor-pointer" />
                      <label for="blue" className="relative font-Poppins text-[14px] text-[#7a7a7a] cursor-pointer capitalize">Blue</label>
                      <span className="blue font-Poppins text-[12px] text-[#7a7a7a] absolute right-[0] h-[20px] w-[20px] rounded-[5px] bg-[#6c9eff]"></span>
                    </div>
                    <div className="checkbox-group flex items-center relative mb-[15px]">
                      <input type="checkbox" id="yellow" className="h-[initial] w-[initial] mb-[0] p-[0] hidden cursor-pointer" />
                      <label for="yellow" className="relative font-Poppins text-[14px] text-[#7a7a7a] cursor-pointer capitalize">Yellow</label>
                      <span className="yellow font-Poppins text-[12px] text-[#7a7a7a] absolute right-[0] h-[20px] w-[20px] rounded-[5px] bg-[#dede44]"></span>
                    </div>
                    <div className="checkbox-group flex items-center relative mb-[15px]">
                      <input type="checkbox" id="red" className="h-[initial] w-[initial] mb-[0] p-[0] hidden cursor-pointer" />
                      <label for="red" className="relative font-Poppins text-[14px] text-[#7a7a7a] cursor-pointer capitalize">Red</label>
                      <span className="red font-Poppins text-[12px] text-[#7a7a7a] absolute right-[0] h-[20px] w-[20px] rounded-[5px] bg-[#fb5555]"></span>
                    </div>
                    <div className="checkbox-group flex items-center relative">
                      <input type="checkbox" id="green" className="h-[initial] w-[initial] mb-[0] p-[0] hidden cursor-pointer" />
                      <label for="green" className="relative font-Poppins text-[14px] text-[#7a7a7a] cursor-pointer capitalize">Green</label>
                      <span className="green font-Poppins text-[12px] text-[#7a7a7a] absolute right-[0] h-[20px] w-[20px] rounded-[5px] bg-[#64b496]"></span>
                    </div>
                  </div>
                </div>
                <div className="cr-shop-weight pt-[25px]">
                  <h4 className="cr-shop-sub-title mb-[0] pb-[10px] font-Poppins text-[16px] font-medium leading-[1.6] text-[#2b2b2d] capitalize border-b-[1px] border-solid border-[#e9e9e9] max-[992px]:text-[18px]">Weight</h4>
                  <div className="cr-checkbox py-[28px] max-[992px]:pt-[30px]">
                    <div className="checkbox-group flex items-center relative mb-[15px]">
                      <input type="checkbox" id="2kg" className="h-[initial] w-[initial] mb-[0] p-[0] hidden cursor-pointer" />
                      <label for="2kg" className="relative font-Poppins text-[14px] text-[#7a7a7a] cursor-pointer capitalize">2kg Pack</label>
                    </div>
                    <div className="checkbox-group flex items-center relative mb-[15px]">
                      <input type="checkbox" id="20kg" className="h-[initial] w-[initial] mb-[0] p-[0] hidden cursor-pointer" />
                      <label for="20kg" className="relative font-Poppins text-[14px] text-[#7a7a7a] cursor-pointer capitalize">20kg Pack</label>
                    </div>
                    <div className="checkbox-group flex items-center relative">
                      <input type="checkbox" id="30kg" className="h-[initial] w-[initial] mb-[0] p-[0] hidden cursor-pointer" />
                      <label for="30kg" className="relative font-Poppins text-[14px] text-[#7a7a7a] cursor-pointer capitalize">30kg pack</label>
                    </div>
                  </div>
                </div>
                <div className="cr-shop-tags">
                  <h4 className="cr-shop-sub-title mb-[0] pb-[10px] font-Poppins text-[16px] font-medium leading-[1.6] text-[#2b2b2d] capitalize border-b-[1px] border-solid border-[#e9e9e9] max-[992px]:text-[18px]">Tages</h4>
                  <div className="cr-shop-tags-inner pt-[25px]">
                    <ul className="cr-tags m-[-5px] p-[0] flex flex-wrap">
                      <li><a href="javascript:void(0)" className="transition-all duration-[0.3s] ease-in-out h-[32px] px-[15px] m-[5px] rounded-[5px] font-Poppins text-[14px] bg-[#fff] text-[#7a7a7a] border-[1px] border-solid border-[#e9e9e9] leading-[30px] inline-block capitalizec hover:text-[#fff] hover:bg-[#64b496] hover:border-[#64b496]">Vegetables</a></li>
                      <li><a href="javascript:void(0)" className="transition-all duration-[0.3s] ease-in-out h-[32px] px-[15px] m-[5px] rounded-[5px] font-Poppins text-[14px] bg-[#fff] text-[#7a7a7a] border-[1px] border-solid border-[#e9e9e9] leading-[30px] inline-block capitalizec hover:text-[#fff] hover:bg-[#64b496] hover:border-[#64b496]">Juice</a></li>
                      <li><a href="javascript:void(0)" className="transition-all duration-[0.3s] ease-in-out h-[32px] px-[15px] m-[5px] rounded-[5px] font-Poppins text-[14px] bg-[#fff] text-[#7a7a7a] border-[1px] border-solid border-[#e9e9e9] leading-[30px] inline-block capitalizec hover:text-[#fff] hover:bg-[#64b496] hover:border-[#64b496]">Food</a></li>
                      <li><a href="javascript:void(0)" className="transition-all duration-[0.3s] ease-in-out h-[32px] px-[15px] m-[5px] rounded-[5px] font-Poppins text-[14px] bg-[#fff] text-[#7a7a7a] border-[1px] border-solid border-[#e9e9e9] leading-[30px] inline-block capitalizec hover:text-[#fff] hover:bg-[#64b496] hover:border-[#64b496]">Dry Fruits</a></li>
                      <li><a href="javascript:void(0)" className="transition-all duration-[0.3s] ease-in-out h-[32px] px-[15px] m-[5px] rounded-[5px] font-Poppins text-[14px] bg-[#fff] text-[#7a7a7a] border-[1px] border-solid border-[#e9e9e9] leading-[30px] inline-block capitalizec hover:text-[#fff] hover:bg-[#64b496] hover:border-[#64b496]">Vegetables</a></li>
                      <li><a href="javascript:void(0)" className="transition-all duration-[0.3s] ease-in-out h-[32px] px-[15px] m-[5px] rounded-[5px] font-Poppins text-[14px] bg-[#fff] text-[#7a7a7a] border-[1px] border-solid border-[#e9e9e9] leading-[30px] inline-block capitalizec hover:text-[#fff] hover:bg-[#64b496] hover:border-[#64b496]">Juice</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="min-[992px]:w-[75%] w-full mb-[30px] aos-init aos-animate" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="600">
              <div className="flex flex-wrap w-full mb-[-24px] aos-init aos-animate" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="600">
                <div className="min-[768px]:w-[50%] w-full px-[12px] mb-[24px]">
                  <div className="vehicle-detail-banner banner-content clearfix h-full">
                    <div className="banner-slider sticky top-[30px]">
                      <div className="slider slider-for mb-[15px] slick-initialized slick-slider">
                        <div aria-live="polite" className="slick-list draggable"><div className="slick-track" role="listbox" style={{ opacity: 1, width: '3232px' }}><div className="slider-banner-image slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="-1" role="option" aria-describedby="slick-slide00" style={{
                          width: '404px',
                          position: 'relative',
                          left: '0px',
                          top: '0px',
                          zIndex: 999,
                          opacity: 1,
                        }}>
                          <div className="zoom-image-hover h-full flex items-center text-center border-[1px] border-solid border-[#e9e9e9] bg-[#f7f7f8] rounded-[5px] cursor-pointer" style={{ position: 'relative', overflow: 'hidden' }}>
                            <img src="assets/images/9.jpg" alt="product-tab-1" className="product-image w-full block m-auto" />
                            <img role="presentation" alt="" src="assets/images/9.jpg" className="zoomImg" style={{
                              position: 'absolute',
                              top: '-76.6535px',
                              left: '-151.124px',
                              opacity: 0,
                              width: '600px',
                              height: '600px',
                              border: 'none',
                              maxWidth: 'none',
                              maxHeight: 'none',
                            }} /></div>
                        </div><div className="slider-banner-image slick-slide" data-slick-index="1" aria-hidden="true" tabindex="-1" role="option" aria-describedby="slick-slide01" style={{
                          width: '404px',
                          position: 'relative',
                          left: '-404px',
                          top: '0px',
                          zIndex: 998,
                          opacity: 0,
                        }}>
                            <div className="zoom-image-hover h-full flex items-center text-center border-[1px] border-solid border-[#e9e9e9] bg-[#f7f7f8] rounded-[5px] cursor-pointer" style={{ position: 'relative', overflow: 'hidden' }}>
                              <img src="assets/images/10.jpg" alt="product-tab-2" className="product-image w-full block m-auto" />
                              <img role="presentation" alt="" src="assets/images/10.jpg" className="zoomImg" style={{
                                position: 'absolute',
                                top: '0px',
                                left: '0px',
                                opacity: 0,
                                width: '600px',
                                height: '600px',
                                border: 'none',
                                maxWidth: 'none',
                                maxHeight: 'none',
                              }} /></div>
                          </div><div className="slider-banner-image slick-slide" data-slick-index="2" aria-hidden="true" tabindex="-1" role="option" aria-describedby="slick-slide02" style={{
                            width: '404px',
                            position: 'relative',
                            left: '-808px',
                            top: '0px',
                            zIndex: 998,
                            opacity: 0,
                          }}>
                            <div className="zoom-image-hover h-full flex items-center text-center border-[1px] border-solid border-[#e9e9e9] bg-[#f7f7f8] rounded-[5px] cursor-pointer" style={{ position: 'relative', overflow: 'hidden' }}>
                              <img src="assets/images/11.jpg" alt="product-tab-3" className="product-image w-full block m-auto" />
                              <img role="presentation" alt="" src="assets/images/11.jpg" className="zoomImg" style={{
                                position: 'absolute',
                                top: '0px',
                                left: '0px',
                                opacity: 0,
                                width: '600px',
                                height: '600px',
                                border: 'none',
                                maxWidth: 'none',
                                maxHeight: 'none',
                              }} /></div>
                          </div><div className="slider-banner-image slick-slide" data-slick-index="3" aria-hidden="true" tabindex="-1" role="option" aria-describedby="slick-slide03" style={{
                            width: '404px',
                            position: 'relative',
                            left: '-1212px',
                            top: '0px',
                            zIndex: 998,
                            opacity: 0,
                          }}>
                            <div className="zoom-image-hover h-full flex items-center text-center border-[1px] border-solid border-[#e9e9e9] bg-[#f7f7f8] rounded-[5px] cursor-pointer" style={{ position: 'relative', overflow: 'hidden' }}>
                              <img src="assets/images/12.jpg" alt="product-tab-1" className="product-image w-full block m-auto" />
                              <img role="presentation" alt="" src="assets/images/12.jpg" className="zoomImg" style={{
                                position: 'absolute',
                                top: '0px',
                                left: '0px',
                                opacity: 0,
                                width: '600px',
                                height: '600px',
                                border: 'none',
                                maxWidth: 'none',
                                maxHeight: 'none',
                              }} /></div>
                          </div><div className="slider-banner-image slick-slide" data-slick-index="4" aria-hidden="true" tabindex="-1" role="option" aria-describedby="slick-slide04" style={{
                            width: '404px',
                            position: 'relative',
                            left: '-1616px',
                            top: '0px',
                            zIndex: 998,
                            opacity: 0,
                          }}>
                            <div className="zoom-image-hover h-full flex items-center text-center border-[1px] border-solid border-[#e9e9e9] bg-[#f7f7f8] rounded-[5px] cursor-pointer" style={{ position: 'relative', overflow: 'hidden' }}>
                              <img src="assets/images/13.jpg" alt="product-tab-2" className="product-image w-full block m-auto" />
                              <img role="presentation" alt="" src="assets/images/13.jpg" className="zoomImg" style={{
                                position: 'absolute',
                                top: '0px',
                                left: '0px',
                                opacity: 0,
                                width: '600px',
                                height: '600px',
                                border: 'none',
                                maxWidth: 'none',
                                maxHeight: 'none',
                              }} /></div>
                          </div><div className="slider-banner-image slick-slide" data-slick-index="5" aria-hidden="true" tabindex="-1" role="option" aria-describedby="slick-slide05" style={{
                            width: '404px',
                            position: 'relative',
                            left: '-808px',
                            top: '0px',
                            zIndex: 998,
                            opacity: 0,
                          }}>
                            <div className="zoom-image-hover h-full flex items-center text-center border-[1px] border-solid border-[#e9e9e9] bg-[#f7f7f8] rounded-[5px] cursor-pointer" style={{ position: 'relative', overflow: 'hidden' }}>
                              <img src="assets/images/14.jpg" alt="product-tab-3" className="product-image w-full block m-auto" />
                              <img role="presentation" alt="" src="assets/images/14.jpg" className="zoomImg" style={{
                                position: 'absolute',
                                top: '0px',
                                left: '0px',
                                opacity: 0,
                                width: '600px',
                                height: '600px',
                                border: 'none',
                                maxWidth: 'none',
                                maxHeight: 'none',
                              }} /></div>
                          </div><div className="slider-banner-image slick-slide" data-slick-index="6" aria-hidden="true" tabindex="-1" role="option" aria-describedby="slick-slide06" style={{
                            width: '404px',
                            position: 'relative',
                            left: '-2424px',
                            top: '0px',
                            zIndex: 998,
                            opacity: 0,
                          }}>
                            <div className="zoom-image-hover h-full flex items-center text-center border-[1px] border-solid border-[#e9e9e9] bg-[#f7f7f8] rounded-[5px] cursor-pointer" style={{ position: 'relative', overflow: 'hidden' }}>
                              <img src="assets/images/15.jpg" alt="product-tab-1" className="product-image w-full block m-auto" />
                              <img role="presentation" alt="" src="assets/images/15.jpg" className="zoomImg" style={{
                                position: 'absolute',
                                top: '0px',
                                left: '0px',
                                opacity: 0,
                                width: '600px',
                                height: '600px',
                                border: 'none',
                                maxWidth: 'none',
                                maxHeight: 'none',
                              }} /></div>
                          </div><div className="slider-banner-image slick-slide" data-slick-index="7" aria-hidden="true" tabindex="-1" role="option" aria-describedby="slick-slide07" style={{
                            width: '404px',
                            position: 'relative',
                            left: '-2828px',
                            top: '0px',
                            zIndex: 998,
                            opacity: 0,
                          }}>
                            <div className="zoom-image-hover h-full flex items-center text-center border-[1px] border-solid border-[#e9e9e9] bg-[#f7f7f8] rounded-[5px] cursor-pointer" style={{ position: 'relative', overflow: 'hidden' }}>
                              <img src="assets/images/16.jpg" alt="product-tab-2" className="product-image w-full block m-auto" />
                              <img role="presentation" alt="" src="assets/images/16.jpg" className="zoomImg" style={{
                                position: 'absolute',
                                top: '0px',
                                left: '0px',
                                opacity: 0,
                                width: '600px',
                                height: '600px',
                                border: 'none',
                                maxWidth: 'none',
                                maxHeight: 'none',
                              }} /></div>
                          </div></div></div>


                      </div>
                      <div className="slider slider-nav thumb-image mx-[-6px] slick-initialized slick-slider">
                        <div aria-live="polite" className="slick-list draggable"><div className="slick-track" role="listbox" style={{
                          opacity: 1,
                          width: '1512px',
                          transform: 'translate3d(-420px, 0px, 0px)',
                        }}><div className="thumbnail-image slick-slide slick-cloned" data-slick-index="-5" id="" aria-hidden="true" tabindex="-1" style={{ width: '84px' }}>
                            <div className="thumbImg mx-[6px] border-[1px] border-solid border-[#e9e9e9] rounded-[5px] flex justify-center items-center">
                              <img src="assets/images/12.jpg" alt="product-tab-1" className="w-full p-[2px] rounded-[5px]" />
                            </div>
                          </div><div className="thumbnail-image slick-slide slick-cloned" data-slick-index="-4" id="" aria-hidden="true" tabindex="-1" style={{ width: '84px' }}>
                            <div className="thumbImg mx-[6px] border-[1px] border-solid border-[#e9e9e9] rounded-[5px] flex justify-center items-center">
                              <img src="assets/images/13.jpg" alt="product-tab-2" className="w-full p-[2px] rounded-[5px]" />
                            </div>
                          </div><div className="thumbnail-image slick-slide slick-cloned" data-slick-index="-3" id="" aria-hidden="true" tabindex="-1" style={{ width: '84px' }}>
                            <div className="thumbImg mx-[6px] border-[1px] border-solid border-[#e9e9e9] rounded-[5px] flex justify-center items-center">
                              <img src="assets/images/14.jpg" alt="product-tab-3" className="w-full p-[2px] rounded-[5px]" />
                            </div>
                          </div><div className="thumbnail-image slick-slide slick-cloned" data-slick-index="-2" id="" aria-hidden="true" tabindex="-1" style={{ width: '84px' }}>
                            <div className="thumbImg mx-[6px] border-[1px] border-solid border-[#e9e9e9] rounded-[5px] flex justify-center items-center">
                              <img src="assets/images/15.jpg" alt="product-tab-1" className="w-full p-[2px] rounded-[5px]" />
                            </div>
                          </div><div className="thumbnail-image slick-slide slick-cloned" data-slick-index="-1" id="" aria-hidden="true" tabindex="-1" style={{ width: '84px' }}>
                            <div className="thumbImg mx-[6px] border-[1px] border-solid border-[#e9e9e9] rounded-[5px] flex justify-center items-center">
                              <img src="assets/images/16.jpg" alt="product-tab-2" className="w-full p-[2px] rounded-[5px]" />
                            </div>
                          </div><div className="thumbnail-image slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="-1" role="option" aria-describedby="slick-slide10" style={{ width: '84px' }}>
                            <div className="thumbImg mx-[6px] border-[1px] border-solid border-[#e9e9e9] rounded-[5px] flex justify-center items-center">
                              <img src="assets/images/9.jpg" alt="product-tab-1" className="w-full p-[2px] rounded-[5px]" />
                            </div>
                          </div><div className="thumbnail-image slick-slide slick-active" data-slick-index="1" aria-hidden="false" tabindex="-1" role="option" aria-describedby="slick-slide11" style={{ width: '84px' }}>
                            <div className="thumbImg mx-[6px] border-[1px] border-solid border-[#e9e9e9] rounded-[5px] flex justify-center items-center">
                              <img src="assets/images/10.jpg" alt="product-tab-2" className="w-full p-[2px] rounded-[5px]" />
                            </div>
                          </div><div className="thumbnail-image slick-slide slick-active" data-slick-index="2" aria-hidden="false" tabindex="-1" role="option" aria-describedby="slick-slide12" style={{ width: '84px' }}>
                            <div className="thumbImg mx-[6px] border-[1px] border-solid border-[#e9e9e9] rounded-[5px] flex justify-center items-center">
                              <img src="assets/images/11.jpg" alt="product-tab-3" className="w-full p-[2px] rounded-[5px]" />
                            </div>
                          </div><div className="thumbnail-image slick-slide slick-active" data-slick-index="3" aria-hidden="false" tabindex="-1" role="option" aria-describedby="slick-slide13" style={{ width: '84px' }}>
                            <div className="thumbImg mx-[6px] border-[1px] border-solid border-[#e9e9e9] rounded-[5px] flex justify-center items-center">
                              <img src="assets/images/12.jpg" alt="product-tab-1" className="w-full p-[2px] rounded-[5px]" />
                            </div>
                          </div><div className="thumbnail-image slick-slide slick-active" data-slick-index="4" aria-hidden="false" tabindex="-1" role="option" aria-describedby="slick-slide14" style={{ width: '84px' }}>
                            <div className="thumbImg mx-[6px] border-[1px] border-solid border-[#e9e9e9] rounded-[5px] flex justify-center items-center">
                              <img src="assets/images/13.jpg" alt="product-tab-2" className="w-full p-[2px] rounded-[5px]" />
                            </div>
                          </div><div className="thumbnail-image slick-slide" data-slick-index="5" aria-hidden="true" tabindex="-1" role="option" aria-describedby="slick-slide15" style={{ width: '84px' }}>
                            <div className="thumbImg mx-[6px] border-[1px] border-solid border-[#e9e9e9] rounded-[5px] flex justify-center items-center">
                              <img src="assets/images/14.jpg" alt="product-tab-3" className="w-full p-[2px] rounded-[5px]" />
                            </div>
                          </div><div className="thumbnail-image slick-slide" data-slick-index="6" aria-hidden="true" tabindex="-1" role="option" aria-describedby="slick-slide16" style={{ width: '84px' }}>
                            <div className="thumbImg mx-[6px] border-[1px] border-solid border-[#e9e9e9] rounded-[5px] flex justify-center items-center">
                              <img src="assets/images/15.jpg" alt="product-tab-1" className="w-full p-[2px] rounded-[5px]" />
                            </div>
                          </div><div className="thumbnail-image slick-slide" data-slick-index="7" aria-hidden="true" tabindex="-1" role="option" aria-describedby="slick-slide17" style={{ width: '84px' }}>
                            <div className="thumbImg mx-[6px] border-[1px] border-solid border-[#e9e9e9] rounded-[5px] flex justify-center items-center">
                              <img src="assets/images/16.jpg" alt="product-tab-2" className="w-full p-[2px] rounded-[5px]" />
                            </div>
                          </div><div className="thumbnail-image slick-slide slick-cloned" data-slick-index="8" id="" aria-hidden="true" tabindex="-1" style={{ width: '84px' }}>
                            <div className="thumbImg mx-[6px] border-[1px] border-solid border-[#e9e9e9] rounded-[5px] flex justify-center items-center">
                              <img src="assets/images/9.jpg" alt="product-tab-1" className="w-full p-[2px] rounded-[5px]" />
                            </div>
                          </div><div className="thumbnail-image slick-slide slick-cloned" data-slick-index="9" id="" aria-hidden="true" tabindex="-1" style={{ width: '84px' }}>
                            <div className="thumbImg mx-[6px] border-[1px] border-solid border-[#e9e9e9] rounded-[5px] flex justify-center items-center">
                              <img src="assets/images/10.jpg" alt="product-tab-2" className="w-full p-[2px] rounded-[5px]" />
                            </div>
                          </div><div className="thumbnail-image slick-slide slick-cloned" data-slick-index="10" id="" aria-hidden="true" tabindex="-1" style={{ width: '84px' }}>
                            <div className="thumbImg mx-[6px] border-[1px] border-solid border-[#e9e9e9] rounded-[5px] flex justify-center items-center">
                              <img src="assets/images/11.jpg" alt="product-tab-3" className="w-full p-[2px] rounded-[5px]" />
                            </div>
                          </div><div className="thumbnail-image slick-slide slick-cloned" data-slick-index="11" id="" aria-hidden="true" tabindex="-1" style={{ width: '84px' }}>
                            <div className="thumbImg mx-[6px] border-[1px] border-solid border-[#e9e9e9] rounded-[5px] flex justify-center items-center">
                              <img src="assets/images/12.jpg" alt="product-tab-1" className="w-full p-[2px] rounded-[5px]" />
                            </div>
                          </div><div className="thumbnail-image slick-slide slick-cloned" data-slick-index="12" id="" aria-hidden="true" tabindex="-1" style={{ width: '84px' }}>
                            <div className="thumbImg mx-[6px] border-[1px] border-solid border-[#e9e9e9] rounded-[5px] flex justify-center items-center">
                              <img src="assets/images/13.jpg" alt="product-tab-2" className="w-full p-[2px] rounded-[5px]" />
                            </div>
                          </div></div></div>







                      </div>
                    </div>
                  </div>
                </div>
                <div className="min-[768px]:w-[50%] w-full px-[12px] mb-[24px]">
                  <div className="cr-size-and-weight-contain border-b-[1px] border-solid border-[#e9e9e9] pb-[20px] max-[768px]:mt-[24px]">
                    <h2 className="heading mb-[15px] block text-[#2b2b2d] text-[22px] leading-[1.5] font-medium max-[1400px]:text-[26px] max-[992px]:text-[20px]">Seeds Of Change Oraganic Quinoa, Brown</h2>
                    <p className="mb-[0] text-[14px] font-Poppins text-[#7a7a7a] leading-[1.75]">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, iure minus error doloribus saepe natus?</p>
                  </div>
                  <div className="cr-size-and-weight pt-[20px]">
                    <div className="cr-review-star flex">
                      <div className="cr-star mr-[10px]">
                        <i className="ri-star-fill text-[16px] text-[#f5885f]"></i>
                        <i className="ri-star-fill text-[16px] text-[#f5885f]"></i>
                        <i className="ri-star-fill text-[16px] text-[#f5885f]"></i>
                        <i className="ri-star-fill text-[16px] text-[#f5885f]"></i>
                        <i className="ri-star-fill text-[16px] text-[#f5885f]"></i>
                      </div>
                      <p className="mb-[0] text-[15px] font-Poppins text-[#7a7a7a] leading-[1.75] max-[380px]:hidden">( 75 Review )</p>
                    </div>
                    <div className="list">
                      <ul className="mt-[15px] p-[0] mb-[1rem]">
                        <li className="py-[5px] text-[#777] flex"><label className="min-w-[100px] mr-[10px] text-[#2b2b2d] font-semibold flex justify-between">Brand <span>:</span></label>ESTA BETTERU CO</li>
                        <li className="py-[5px] text-[#777] flex"><label className="min-w-[100px] mr-[10px] text-[#2b2b2d] font-semibold flex justify-between">Flavour <span>:</span></label>Super Saver Pack</li>
                        <li className="py-[5px] text-[#777] flex"><label className="min-w-[100px] mr-[10px] text-[#2b2b2d] font-semibold flex justify-between">Diet Type <span>:</span></label>Vegetarian</li>
                        <li className="py-[5px] text-[#777] flex"><label className="min-w-[100px] mr-[10px] text-[#2b2b2d] font-semibold flex justify-between">Weight <span>:</span></label>200 Grams</li>
                        <li className="py-[5px] text-[#777] flex"><label className="min-w-[100px] mr-[10px] text-[#2b2b2d] font-semibold flex justify-between">Speciality <span>:</span></label>Gluten Free, Sugar Free</li>
                        <li className="py-[5px] text-[#777] flex"><label className="min-w-[100px] mr-[10px] text-[#2b2b2d] font-semibold flex justify-between">Info <span>:</span></label>Egg Free, Allergen-Free</li>
                        <li className="py-[5px] text-[#777] flex"><label className="min-w-[100px] mr-[10px] text-[#2b2b2d] font-semibold flex justify-between">Items <span>:</span></label>1</li>
                      </ul>
                    </div>
                    <div className="cr-product-price pt-[20px]">
                      <span className="new-price font-Poppins text-[24px] font-semibold leading-[1.167] text-[#64b496] max-[768px]:text-[22px] max-[576px]:text-[20px]">$120.25</span>
                      <span className="old-price font-Poppins text-[16px] line-through leading-[1.75] text-[#7a7a7a]">$123.25</span>
                    </div>
                    <div className="cr-size-weight flex items-center pt-[20px] max-[380px]:flex-col max-[380px]:justify-start max-[380px]:items-start">
                      <h5 className="mb-[0] font-Poppins text-[16px] leading-[1.556] text-[#2b2b2d] font-medium max-[1200px]:min-w-[100px] max-[1200px]:text-[14px]"><span>Size</span>/<span>Weight</span> :</h5>
                      <div className="cr-kg pl-[10px] max-[380px]:pl-[0] max-[380px]:pt-[10px]">
                        <ul className="w-full p-[0] m-[0] flex flex-wrap">
                          <li className="transition-all duration-[0.3s] ease-in-out m-[2px] py-[5px] px-[10px] font-Poppins text-[12px] leading-[1] bg-[#fff] text-[#777] border-[1px] border-solid border-[#e9e9e9] rounded-[5px] cursor-pointer max-[1200px]:mr-[5px] active-color">50kg</li>
                          <li className="transition-all duration-[0.3s] ease-in-out m-[2px] py-[5px] px-[10px] font-Poppins text-[12px] leading-[1] bg-[#fff] text-[#777] border-[1px] border-solid border-[#e9e9e9] rounded-[5px] cursor-pointer max-[1200px]:mr-[5px]">80kg</li>
                          <li className="transition-all duration-[0.3s] ease-in-out m-[2px] py-[5px] px-[10px] font-Poppins text-[12px] leading-[1] bg-[#fff] text-[#777] border-[1px] border-solid border-[#e9e9e9] rounded-[5px] cursor-pointer max-[1200px]:mr-[5px]">120kg</li>
                          <li className="transition-all duration-[0.3s] ease-in-out m-[2px] py-[5px] px-[10px] font-Poppins text-[12px] leading-[1] bg-[#fff] text-[#777] border-[1px] border-solid border-[#e9e9e9] rounded-[5px] cursor-pointer max-[1200px]:mr-[5px]">200kg</li>
                        </ul>
                      </div>
                    </div>
                    <div className="cr-add-card flex pt-[20px]">
                      <div className="cr-qty-main h-full flex relative">
                        <input type="text" placeholder="." value="1" minlength="1" maxlength="20" className="quantity h-[40px] w-[40px] mr-[5px] text-center border-[1px] border-solid border-[#e9e9e9] rounded-[5px]" />
                        <button type="button" className="plus w-[18px] h-[18px] p-[0] bg-[#fff] border-[1px] border-solid border-[#e9e9e9] rounded-[5px] leading-[0]">+</button>
                        <button type="button" className="minus w-[18px] h-[18px] p-[0] bg-[#fff] border-[1px] border-solid border-[#e9e9e9] rounded-[5px] leading-[0] absolute bottom-[0] right-[0]">-</button>
                      </div>
                      <div className="cr-add-button ml-[15px] max-[380px]:hidden">
                        <button type="button" className="cr-button cr-shopping-bag font-bold h-[40px] transition-all duration-[0.3s] ease-in-out py-[8px] px-[22px] text-[14px] font-Manrope capitalize leading-[1.2] bg-[#64b496] text-[#fff] border-[1px] border-solid border-[#64b496] rounded-[5px] flex items-center justify-center hover:bg-[#000] hover:border-[#000] max-[1200px]:py-[8px] max-[1200px]:px-[15px]">Add to cart</button>
                      </div>
                      <div className="cr-card-icon flex ml-[15px]">
                        <a href="javascript:void(0)" className="wishlist m-[0] p-[0] bg-transparent">
                          <i className="ri-heart-line transition-all duration-[0.3s] ease-in-out h-[40px] w-[40px] mr-[10px] flex items-center justify-center text-[22px] bg-[#fff] border-[1px] border-solid border-[#e9e9e9] rounded-[5px] hover:bg-[#64b496] hover:text-[#fff]"></i>
                        </a>
                        <a className="model-oraganic-product m-[0] p-[0] bg-transparent cr-modal-toggle cursor-pointer">
                          <i className="ri-eye-line transition-all duration-[0.3s] ease-in-out h-[40px] w-[40px] mr-[10px] flex items-center justify-center text-[22px] bg-[#fff] border-[1px] border-solid border-[#e9e9e9] rounded-[5px] hover:bg-[#64b496] hover:text-[#fff]"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap w-full aos-init aos-animate" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="600">
                <div className="w-full px-[12px]">
                  <div className="cr-paking-delivery mt-[40px] p-[24px] bg-[#fff] border-[1px] border-solid border-[#e9e9e9] rounded-[5px]">
                    <ul className="nav nav-tabs border-b-[1px] border-solid border-[#dee2e6] flex flex-wrap justify-left" id="mydeliveryTab">
                      <li className="nav-item transition-all duration-[0.3s] ease-in-out mr-[30px] relative active">
                        <a href="#description" className="mb-[25px] flex font-Poppins text-[17px] font-semibold leading-[1.5] tracking-[0] text-[#2b2b2d] text-left max-[1400px]:text-[18px] max-[768px]:text-[16px] max-[576px]:mb-[15px]">Description</a>
                      </li>
                      <li className="nav-item transition-all duration-[0.3s] mr-[30px] relative ease-in-out">
                        <a href="#additional" className="mb-[25px] flex font-Poppins text-[17px] font-semibold leading-[1.5] tracking-[0] text-[#2b2b2d] text-left max-[1400px]:text-[18px] max-[768px]:text-[16px] max-[576px]:mb-[15px]">Information</a>
                      </li>
                      <li className="nav-item transition-all duration-[0.3s] mr-[30px] relative ease-in-out">
                        <a href="#review" className="mb-[25px] flex font-Poppins text-[17px] font-semibold leading-[1.5] tracking-[0] text-[#2b2b2d] text-left max-[1400px]:text-[18px] max-[768px]:text-[16px] max-[576px]:mb-[15px]">Review</a>
                      </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                      <div className="tab-delivery-pane" id="description">
                        <div className="cr-tab-content">
                          <div className="cr-description pt-[30px]">
                            <p className="text-[14px] text-left mb-[0] font-Poppins text-[#7a7a7a] leading-[1.75]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in vero
                              sapiente odio, error dolore vero temporibus consequatur, nobis veniam odit
                              dignissimos consectetur quae in perferendis
                              doloribusdebitis corporis, eaque dicta, repellat amet, illum adipisci vel
                              perferendis dolor! Quis vel consequuntur repellat distinctio rem. Corrupti
                              ratione alias odio, error dolore temporibus consequatur, nobis veniam odit
                              laborum dignissimos consectetur quae vero in perferendis provident quis.</p>
                          </div>
                          <h4 className="heading mb-[0] pt-[30px] pb-[20px] font-Poppins text-[16px] font-medium leading-[1.5] text-left text-[#2b2b2d] border-b-[1px] border-solid border-[#e9e9e9]">Packaging &amp; Delivery</h4>
                          <div className="cr-description pt-[30px]">
                            <p className="text-[14px] text-left mb-[0] font-Poppins text-[#7a7a7a] leading-[1.75]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in vero
                              perferendis dolor! Quis vel consequuntur repellat distinctio rem. Corrupti
                              ratione alias odio, error dolore temporibus consequatur, nobis veniam odit
                              laborum dignissimos consectetur quae vero in perferendis provident quis.</p>
                          </div>
                        </div>
                      </div>
                      <div className="tab-delivery-pane" id="additional" style={{ display: 'none' }}>
                        <div className="cr-tab-content">
                          <div className="cr-description pt-[30px]">
                            <p className="text-[14px] text-left mb-[0] font-Poppins text-[#7a7a7a] leading-[1.75]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in vero
                              sapiente doloribus debitis corporis, eaque dicta, repellat amet, illum adipisci vel
                              perferendis dolor! Quis vel consequuntur repellat distinctio rem. Corrupti
                              ratione alias odio, error dolore temporibus consequatur, nobis veniam odit
                              laborum dignissimos consectetur quae vero in perferendis provident quis.</p>
                          </div>
                          <div className="list">
                            <ul className="mt-[30px] mb-[-5px] p-[0]">
                              <li className="py-[5px] text-[#777] flex"><label className="min-w-[100px] mr-[10px] text-[#2b2b2d] font-semibold flex justify-between">Brand <span>:</span></label>ESTA BETTERU CO</li>
                              <li className="py-[5px] text-[#777] flex"><label className="min-w-[100px] mr-[10px] text-[#2b2b2d] font-semibold flex justify-between">Flavour <span>:</span></label>Super Saver Pack</li>
                              <li className="py-[5px] text-[#777] flex"><label className="min-w-[100px] mr-[10px] text-[#2b2b2d] font-semibold flex justify-between">Diet Type <span>:</span></label>Vegetarian</li>
                              <li className="py-[5px] text-[#777] flex"><label className="min-w-[100px] mr-[10px] text-[#2b2b2d] font-semibold flex justify-between">Weight <span>:</span></label>200 Grams</li>
                              <li className="py-[5px] text-[#777] flex"><label className="min-w-[100px] mr-[10px] text-[#2b2b2d] font-semibold flex justify-between">Speciality <span>:</span></label>Gluten Free, Sugar Free</li>
                              <li className="py-[5px] text-[#777] flex"><label className="min-w-[100px] mr-[10px] text-[#2b2b2d] font-semibold flex justify-between">Info <span>:</span></label>Egg Free, Allergen-Free</li>
                              <li className="py-[5px] text-[#777] flex"><label className="min-w-[100px] mr-[10px] text-[#2b2b2d] font-semibold flex justify-between">Items <span>:</span></label>1</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="tab-delivery-pane" id="review" style={{ display: 'none' }}>
                        <div className="cr-tab-content-from pt-[30px]">
                          <div className="post mb-[30px]">
                            <div className="content flex max-[576px]:flex-col">
                              <img src="assets/img/review/1.jpg" alt="review" className="h-[50px] w-[50px] mr-[24px] rounded-[5px] max-[576px]:mb-[24px]" />
                              <div className="details flex flex-col">
                                <span className="date mb-[10px] text-[13px] text-[#777]">Jan 08, 2024</span>
                                <span className="name mb-[10px] font-medium text-[17px]">Oreo Noman</span>
                              </div>
                              <div className="cr-t-review-rating ml-auto mb-[20px] max-[576px]:ml-[0] max-[576px]:mb-[24px]">
                                <i className="ri-star-s-fill text-[19px] text-[#f5885f] tracking-[-5px]"></i>
                                <i className="ri-star-s-fill text-[19px] text-[#f5885f] tracking-[-5px]"></i>
                                <i className="ri-star-s-fill text-[19px] text-[#f5885f] tracking-[-5px]"></i>
                                <i className="ri-star-s-fill text-[19px] text-[#f5885f] tracking-[-5px]"></i>
                                <i className="ri-star-s-fill text-[19px] text-[#f5885f] tracking-[-5px]"></i>
                              </div>
                            </div>
                            <p className="m-[0] font-Poppins text-[14px] text-[#7a7a7a] leading-[1.75] pl-[74px] max-[576px]:p-[0]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in vero
                              sapiente doloribus debitis corporis, eaque dicta, repellat amet, illum
                              adipisci vel perferendis dolor! quae vero in perferendis provident quis.</p>
                            <div className="content mt-[30px] flex max-[576px]:flex-col">
                              <img src="assets/img/review/2.jpg" alt="review" className="h-[50px] w-[50px] mr-[24px] rounded-[5px] max-[576px]:mb-[24px]" />
                              <div className="details flex flex-col">
                                <span className="date mb-[10px] text-[13px] text-[#777]">Mar 22, 2024</span>
                                <span className="name mb-[10px] font-medium text-[17px]">Lina Wilson</span>
                              </div>
                              <div className="cr-t-review-rating ml-auto mb-[20px] max-[576px]:ml-[0] max-[576px]:mb-[24px]">
                                <i className="ri-star-s-fill text-[19px] text-[#f5885f] tracking-[-5px]"></i>
                                <i className="ri-star-s-fill text-[19px] text-[#f5885f] tracking-[-5px]"></i>
                                <i className="ri-star-s-fill text-[19px] text-[#f5885f] tracking-[-5px]"></i>
                                <i className="ri-star-s-fill text-[19px] text-[#f5885f] tracking-[-5px]"></i>
                                <i className="ri-star-s-line text-[19px] text-[#f5885f] tracking-[-5px]"></i>
                              </div>
                            </div>
                            <p className="m-[0] font-Poppins text-[14px] text-[#7a7a7a] leading-[1.75] pl-[74px] max-[576px]:p-[0]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in vero
                              sapiente doloribus debitis corporis, eaque dicta, repellat amet, illum
                              adipisci vel
                              perferendis dolor! quae vero in perferendis provident quis.</p>
                          </div>
                          <h4 className="heading font-Poppins text-[16px] font-medium leading-[1.5] text-[#2b2b2d] pb-[10px] mb-[0.5rem] ">Add a Review</h4>
                          <form action="javascript:void(0)">
                            <div className="cr-ratting-star flex">
                              <span className="font-Poppins text-[14px] text-[#7a7a7a] leading-[1.75] mr-[10px]">Your rating :</span>
                              <div className="cr-t-review-rating mb-[20px]">
                                <i className="ri-star-s-fill text-[19px] text-[#f5885f] tracking-[-5px]"></i>
                                <i className="ri-star-s-fill text-[19px] text-[#f5885f] tracking-[-5px]"></i>
                                <i className="ri-star-s-line text-[19px] text-[#f5885f] tracking-[-5px]"></i>
                                <i className="ri-star-s-line text-[19px] text-[#f5885f] tracking-[-5px]"></i>
                                <i className="ri-star-s-line text-[19px] text-[#f5885f] tracking-[-5px]"></i>
                              </div>
                            </div>
                            <div className="cr-ratting-input mb-[10px]">
                              <input name="your-name" placeholder="Name" type="text" className="w-full h-[50px] py-[5px] px-[20px] outline-[0] border-[1px] border-solid border-[#e9e9e9] rounded-[5px] twxt-[#777] text-[14px]" />
                            </div>
                            <div className="cr-ratting-input mb-[10px]">
                              <input name="your-email" placeholder="Email*" type="email" required="" className="w-full h-[50px] py-[5px] px-[20px] outline-[0] border-[1px] border-solid border-[#e9e9e9] rounded-[5px] twxt-[#777] text-[14px]" />
                            </div>
                            <div className="cr-ratting-input form-submit">
                              <textarea name="your-commemt" placeholder="Enter Your Comment" className="w-full h-[150px] mb-[15px] p-[20px] bg-transparent text-[14px] border-[1px] border-solid border-[#e9e9e9] rounded-[5px] text-[#777] outline-[0]"></textarea>
                              <button className="cr-button h-[40px] font-bold transition-all duration-[0.3s] ease-in-out py-[8px] px-[22px] text-[14px] font-Manrope capitalize leading-[1.2] bg-[#64b496] text-[#fff] border-[1px] border-solid border-[#64b496] rounded-[5px] flex items-center justify-center hover:bg-[#000] hover:border-[#000]" type="submit" value="Submit">Submit</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="section-popular-products py-[100px] max-[1200px]:py-[70px]">
        <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1600px]:max-w-[1500px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
          <div className="flex flex-wrap w-full">
            <div className="w-full px-[12px]">
              <div className="mb-[30px]">
                <div className="cr-banner mb-[15px] text-center">
                  <h2 className="font-Manrope text-[32px] font-bold leading-[1.2] text-[#2b2b2d] max-[1200px]:text-[28px] max-[992px]:text-[25px] max-[768px]:text-[22px]">Popular Products</h2>
                </div>
                <div className="cr-banner-sub-title w-full">
                  <p className="max-w-[600px] m-auto font-Poppins text-[14px] text-[#212529] leading-[22px] text-center max-[1200px]:w-[80%] max-[992px]:w-full font-Poppins text-[#7a7a7a]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et viverra maecenas accumsan lacus vel facilisis.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap w-full">
            <div className="w-full">
              <div className="cr-popular-product slick-initialized slick-slider">


                <div aria-live="polite" className="slick-list draggable"><div className="slick-track" role="listbox" style={{
                  opacity: 1,
                  width: '3705px',
                  transform: 'translate3d(-1710px, 0px, 0px)',
                }}><div className="slick-slide slick-cloned" style={{ width: '285px' }} data-slick-index="-4" id="" aria-hidden="true" tabindex="-1">
                    <div className="cr-product-card h-full p-[12px] border-[1px] border-solid border-[#e9e9e9] bg-[#fff] rounded-[5px] overflow-hidden flex-col max-[480px]:w-full">
                      <div className="cr-product-image rounded-[5px] flex items-center justify-center relative">
                        <div className="cr-image-inner zoom-image-hover w-full h-full flex items-center justify-center relative overflow-hidden max-[992px]:pointer-events-none" style={{
                          position: 'relative',
                          overflow: 'hidden',
                        }}>
                          <img src="assets/images/10.jpg" alt="product-1" className="w-full rounded-[5px]" />
                          <img role="presentation" alt="" src="assets/images/10.jpg" className="zoomImg" style={{
                            position: 'absolute',
                            top: '0px',
                            left: '0px',
                            opacity: 0,
                            width: '600px',
                            height: '600px',
                            border: 'none',
                            maxWidth: 'none',
                            maxHeight: 'none',
                          }} /></div>
                        <div className="cr-side-view transition-all duration-[0.4s] ease-in-out absolute z-[20] top-[15px] right-[-40px] grid opacity-0 max-[992px]:right-[12px]">
                          <a href="javascript:void(0)" className="wishlist h-[35px] w-[35px] flex items-center justify-center m-0 p-0 bg-[#fff] border-[1px] border-solid border-[#e9e9e9] rounded-[100%]" tabindex="-1">
                            <i className="ri-heart-line text-[18px] leading-[10px]"></i>
                          </a>
                          <a className="model-oraganic-product h-[35px] w-[35px] flex items-center justify-center m-0 p-0 bg-[#fff] border-[1px] border-solid border-[#e9e9e9] rounded-[100%] mt-[5px] cursor-pointer cr-modal-toggle" tabindex="-1">
                            <i className="ri-eye-line text-[18px] leading-[10px]"></i>
                          </a>
                        </div>
                        <a className="cr-shopping-bag h-[35px] w-[35px] absolute bottom-[-16px] flex items-center justify-center m-0 p-0 bg-[#f7f7f8] border-[1px] border-solid border-[#e9e9e9] rounded-[100%]" href="javascript:void(0)" tabindex="-1">
                          <i className="ri-shopping-bag-line text-[#64b496]"></i>
                        </a>
                      </div>
                      <div className="cr-product-details pt-[24px] text-center overflow-hidden max-[1200px]:pt-[20px]">
                        <div className="cr-brand">
                          <a href="shop-left-sidebar.html" className="transition-all duration-[0.3s] ease-in-out mb-[5px] text-[13px] text-[#777] flex justify-center" tabindex="-1">Snacks</a>
                          <div className="cr-star mb-[12px] flex justify-center items-center">
                            <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
                            <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
                            <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
                            <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
                            <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
                            <p className="mb-[0] font-Poppins ml-[5px] text-[#999] text-[11px] leading-[10px]">(5.0)</p>
                          </div>
                        </div>
                        <a href="product-left-sidebar.html" className="title transition-all duration-[0.3s] ease-in-out mb-[12px] font-Poppins text-[15px] font-medium leading-[24px] text-[#2b2b2d] hover:text-[#64b496] flex justify-center" tabindex="-1">Sweet snakes crunchy nut
                          mix 250gm
                          pack</a>
                        <p className="cr-price font-Poppins text-[16px] text-[#7a7a7a] leading-[1.75] max-[1200px]:text-[14px]">
                          <span className="new-price font-Poppins text-[16px] leading-[1.75] max-[1200px]:text-[14px] font-bold text-[#64b496]">$100.00</span>
                          <span className="old-price font-Poppins ml-[5px] leading-[1.75] text-[13px] line-through text-[#7a7a7a] max-[1200px]:text-[12px]">$110.00</span>
                        </p>
                      </div>
                    </div>
                  </div><div className="slick-slide slick-cloned" style={{ width: '285px' }} data-slick-index="-3" id="" aria-hidden="true" tabindex="-1">
                    <div className="cr-product-card h-full p-[12px] border-[1px] border-solid border-[#e9e9e9] bg-[#fff] rounded-[5px] overflow-hidden flex-col max-[480px]:w-full">
                      <div className="cr-product-image rounded-[5px] flex items-center justify-center relative">
                        <div className="cr-image-inner zoom-image-hover w-full h-full flex items-center justify-center relative overflow-hidden max-[992px]:pointer-events-none" style={{
                          position: 'relative',
                          overflow: 'hidden',
                        }}>
                          <img src="assets/images/1.jpg" alt="product-1" className="w-full rounded-[5px]" />
                          <img role="presentation" alt="" src="assets/images/1.jpg" className="zoomImg" style={{
                            position: 'absolute',
                            top: '0px',
                            left: '0px',
                            opacity: 0,
                            width: '600px',
                            height: '600px',
                            border: 'none',
                            maxWidth: 'none',
                            maxHeight: 'none',
                          }} /></div>
                        <div className="cr-side-view transition-all duration-[0.4s] ease-in-out absolute z-[20] top-[15px] right-[-40px] grid opacity-0 max-[992px]:right-[12px]">
                          <a href="javascript:void(0)" className="wishlist h-[35px] w-[35px] flex items-center justify-center m-0 p-0 bg-[#fff] border-[1px] border-solid border-[#e9e9e9] rounded-[100%]" tabindex="-1">
                            <i className="ri-heart-line text-[18px] leading-[10px]"></i>
                          </a>
                          <a className="model-oraganic-product h-[35px] w-[35px] flex items-center justify-center m-0 p-0 bg-[#fff] border-[1px] border-solid border-[#e9e9e9] rounded-[100%] mt-[5px] cursor-pointer cr-modal-toggle" tabindex="-1">
                            <i className="ri-eye-line text-[18px] leading-[10px]"></i>
                          </a>
                        </div>
                        <a className="cr-shopping-bag h-[35px] w-[35px] absolute bottom-[-16px] flex items-center justify-center m-0 p-0 bg-[#f7f7f8] border-[1px] border-solid border-[#e9e9e9] rounded-[100%]" href="javascript:void(0)" tabindex="-1">
                          <i className="ri-shopping-bag-line text-[#64b496]"></i>
                        </a>
                      </div>
                      <div className="cr-product-details pt-[24px] text-center overflow-hidden max-[1200px]:pt-[20px]">
                        <div className="cr-brand">
                          <a href="shop-left-sidebar.html" className="transition-all duration-[0.3s] ease-in-out mb-[5px] text-[13px] text-[#777] flex justify-center" tabindex="-1">Snacks</a>
                          <div className="cr-star mb-[12px] flex justify-center items-center">
                            <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
                            <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
                            <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
                            <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
                            <i className="ri-star-line mx-[1px] text-[15px] text-[#f5885f]"></i>
                            <p className="mb-[0] font-Poppins ml-[5px] text-[#999] text-[11px] leading-[10px]">(4.5)</p>
                          </div>
                        </div>
                        <a href="product-left-sidebar.html" className="title transition-all duration-[0.3s] ease-in-out mb-[12px] font-Poppins text-[15px] font-medium leading-[24px] text-[#2b2b2d] hover:text-[#64b496] flex justify-center" tabindex="-1">Best snakes with hazel nut
                          mix pack 200gm</a>
                        <p className="cr-price font-Poppins text-[16px] text-[#7a7a7a] leading-[1.75] max-[1200px]:text-[14px]">
                          <span className="new-price font-Poppins text-[16px] leading-[1.75] max-[1200px]:text-[14px] font-bold text-[#64b496]">$120.25</span>
                          <span className="old-price font-Poppins ml-[5px] leading-[1.75] text-[13px] line-through text-[#7a7a7a] max-[1200px]:text-[12px]">$123.25</span>
                        </p>
                      </div>
                    </div>
                  </div><div className="slick-slide slick-cloned" style={{ width: '285px' }} data-slick-index="-2" id="" aria-hidden="true" tabindex="-1">
                    <div className="cr-product-card h-full p-[12px] border-[1px] border-solid border-[#e9e9e9] bg-[#fff] rounded-[5px] overflow-hidden flex-col max-[480px]:w-full">
                      <div className="cr-product-image rounded-[5px] flex items-center justify-center relative">
                        <div className="cr-image-inner zoom-image-hover w-full h-full flex items-center justify-center relative overflow-hidden max-[992px]:pointer-events-none" style={{
                          position: 'relative',
                          overflow: 'hidden',
                        }}>
                          <img src="assets/images/2.jpg" alt="product-1" className="w-full rounded-[5px]" />
                          <img role="presentation" alt="" src="assets/images/2.jpg" className="zoomImg" style={{
                            position: 'absolute',
                            top: '0px',
                            left: '0px',
                            opacity: 0,
                            width: '600px',
                            height: '600px',
                            border: 'none',
                            maxWidth: 'none',
                            maxHeight: 'none',
                          }} /></div>
                        <div className="cr-side-view transition-all duration-[0.4s] ease-in-out absolute z-[20] top-[15px] right-[-40px] grid opacity-0 max-[992px]:right-[12px]">
                          <a href="javascript:void(0)" className="wishlist h-[35px] w-[35px] flex items-center justify-center m-0 p-0 bg-[#fff] border-[1px] border-solid border-[#e9e9e9] rounded-[100%]" tabindex="-1">
                            <i className="ri-heart-line text-[18px] leading-[10px]"></i>
                          </a>
                          <a className="model-oraganic-product h-[35px] w-[35px] flex items-center justify-center m-0 p-0 bg-[#fff] border-[1px] border-solid border-[#e9e9e9] rounded-[100%] mt-[5px] cursor-pointer cr-modal-toggle" tabindex="-1">
                            <i className="ri-eye-line text-[18px] leading-[10px]"></i>
                          </a>
                        </div>
                        <a className="cr-shopping-bag h-[35px] w-[35px] absolute bottom-[-16px] flex items-center justify-center m-0 p-0 bg-[#f7f7f8] border-[1px] border-solid border-[#e9e9e9] rounded-[100%]" href="javascript:void(0)" tabindex="-1">
                          <i className="ri-shopping-bag-line text-[#64b496]"></i>
                        </a>
                      </div>
                      <div className="cr-product-details pt-[24px] text-center overflow-hidden max-[1200px]:pt-[20px]">
                        <div className="cr-brand">
                          <a href="shop-left-sidebar.html" className="transition-all duration-[0.3s] ease-in-out mb-[5px] text-[13px] text-[#777] flex justify-center" tabindex="-1">Snacks</a>
                          <div className="cr-star mb-[12px] flex justify-center items-center">
                            <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
                            <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
                            <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
                            <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
                            <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
                            <p className="mb-[0] font-Poppins ml-[5px] text-[#999] text-[11px] leading-[10px]">(5.0)</p>
                          </div>
                        </div>
                        <a href="product-left-sidebar.html" className="title transition-all duration-[0.3s] ease-in-out mb-[12px] font-Poppins text-[15px] font-medium leading-[24px] text-[#2b2b2d] hover:text-[#64b496] flex justify-center" tabindex="-1">Sweet snakes crunchy nut
                          mix 250gm
                          pack</a>
                        <p className="cr-price font-Poppins text-[16px] text-[#7a7a7a] leading-[1.75] max-[1200px]:text-[14px]">
                          <span className="new-price font-Poppins text-[16px] leading-[1.75] max-[1200px]:text-[14px] font-bold text-[#64b496]">$100.00</span>
                          <span className="old-price font-Poppins ml-[5px] leading-[1.75] text-[13px] line-through text-[#7a7a7a] max-[1200px]:text-[12px]">$110.00</span>
                        </p>
                      </div>
                    </div>
                  </div><div className="slick-slide slick-cloned" style={{ width: '285px' }} data-slick-index="-1" id="" aria-hidden="true" tabindex="-1">
                    <div className="cr-product-card h-full p-[12px] border-[1px] border-solid border-[#e9e9e9] bg-[#fff] rounded-[5px] overflow-hidden flex-col max-[480px]:w-full">
                      <div className="cr-product-image rounded-[5px] flex items-center justify-center relative">
                        <div className="cr-image-inner zoom-image-hover w-full h-full flex items-center justify-center relative overflow-hidden max-[992px]:pointer-events-none" style={{
                          position: 'relative',
                          overflow: 'hidden',
                        }}>
                          <img src="assets/images/3.jpg" alt="product-1" className="w-full rounded-[5px]" />
                          <img role="presentation" alt="" src="assets/images/3.jpg" className="zoomImg" style={{
                            position: 'absolute',
                            top: '0px',
                            left: '0px',
                            opacity: 0,
                            width: '600px',
                            height: '600px',
                            border: 'none',
                            maxWidth: 'none',
                            maxHeight: 'none',
                          }} /></div>
                        <div className="cr-side-view transition-all duration-[0.4s] ease-in-out absolute z-[20] top-[15px] right-[-40px] grid opacity-0 max-[992px]:right-[12px]">
                          <a href="javascript:void(0)" className="wishlist h-[35px] w-[35px] flex items-center justify-center m-0 p-0 bg-[#fff] border-[1px] border-solid border-[#e9e9e9] rounded-[100%]" tabindex="-1">
                            <i className="ri-heart-line text-[18px] leading-[10px]"></i>
                          </a>
                          <a className="model-oraganic-product h-[35px] w-[35px] flex items-center justify-center m-0 p-0 bg-[#fff] border-[1px] border-solid border-[#e9e9e9] rounded-[100%] mt-[5px] cursor-pointer cr-modal-toggle" tabindex="-1">
                            <i className="ri-eye-line text-[18px] leading-[10px]"></i>
                          </a>
                        </div>
                        <a className="cr-shopping-bag h-[35px] w-[35px] absolute bottom-[-16px] flex items-center justify-center m-0 p-0 bg-[#f7f7f8] border-[1px] border-solid border-[#e9e9e9] rounded-[100%]" href="javascript:void(0)" tabindex="-1">
                          <i className="ri-shopping-bag-line text-[#64b496]"></i>
                        </a>
                      </div>
                      <div className="cr-product-details pt-[24px] text-center overflow-hidden max-[1200px]:pt-[20px]">
                        <div className="cr-brand">
                          <a href="shop-left-sidebar.html" className="transition-all duration-[0.3s] ease-in-out mb-[5px] text-[13px] text-[#777] flex justify-center" tabindex="-1">Snacks</a>
                          <div className="cr-star mb-[12px] flex justify-center items-center">
                            <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
                            <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
                            <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
                            <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
                            <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
                            <p className="mb-[0] font-Poppins ml-[5px] text-[#999] text-[11px] leading-[10px]">(5.0)</p>
                          </div>
                        </div>
                        <a href="product-left-sidebar.html" className="title transition-all duration-[0.3s] ease-in-out mb-[12px] font-Poppins text-[15px] font-medium leading-[24px] text-[#2b2b2d] hover:text-[#64b496] flex justify-center" tabindex="-1">Sweet snakes crunchy nut
                          mix 250gm
                          pack</a>
                        <p className="cr-price font-Poppins text-[16px] text-[#7a7a7a] leading-[1.75] max-[1200px]:text-[14px]">
                          <span className="new-price font-Poppins text-[16px] leading-[1.75] max-[1200px]:text-[14px] font-bold text-[#64b496]">$100.00</span>
                          <span className="old-price font-Poppins ml-[5px] leading-[1.75] text-[13px] line-through text-[#7a7a7a] max-[1200px]:text-[12px]">$110.00</span>
                        </p>
                      </div>
                    </div>
                  </div><div className="slick-slide" style={{ width: '285px' }} data-slick-index="0" aria-hidden="true" tabindex="-1" role="option" aria-describedby="slick-slide20">
                    <div className="cr-product-card h-full p-[12px] border-[1px] border-solid border-[#e9e9e9] bg-[#fff] rounded-[5px] overflow-hidden flex-col max-[480px]:w-full">
                      <div className="cr-product-image rounded-[5px] flex items-center justify-center relative">
                        <div className="cr-image-inner zoom-image-hover w-full h-full flex items-center justify-center relative overflow-hidden max-[992px]:pointer-events-none" style={{
                          position: 'relative',
                          overflow: 'hidden',
                        }}>
                          <img src="assets/images/9.jpg" alt="product-1" className="w-full rounded-[5px]" />
                          <img role="presentation" alt="" src="assets/images/9.jpg" className="zoomImg" style={{
                            position: 'absolute',
                            top: '0px',
                            left: '0px',
                            opacity: 0,
                            width: '600px',
                            height: '600px',
                            border: 'none',
                            maxWidth: 'none',
                            maxHeight: 'none',
                          }} /></div>
                        <div className="cr-side-view transition-all duration-[0.4s] ease-in-out absolute z-[20] top-[15px] right-[-40px] grid opacity-0 max-[992px]:right-[12px]">
                          <a href="javascript:void(0)" className="wishlist h-[35px] w-[35px] flex items-center justify-center m-0 p-0 bg-[#fff] border-[1px] border-solid border-[#e9e9e9] rounded-[100%]" tabindex="-1">
                            <i className="ri-heart-line text-[18px] leading-[10px]"></i>
                          </a>
                          <a className="model-oraganic-product h-[35px] w-[35px] flex items-center justify-center m-0 p-0 bg-[#fff] border-[1px] border-solid border-[#e9e9e9] rounded-[100%] mt-[5px] cursor-pointer cr-modal-toggle" tabindex="-1">
                            <i className="ri-eye-line text-[18px] leading-[10px]"></i>
                          </a>
                        </div>
                        <a className="cr-shopping-bag h-[35px] w-[35px] absolute bottom-[-16px] flex items-center justify-center m-0 p-0 bg-[#f7f7f8] border-[1px] border-solid border-[#e9e9e9] rounded-[100%]" href="javascript:void(0)" tabindex="-1">
                          <i className="ri-shopping-bag-line text-[#64b496]"></i>
                        </a>
                      </div>
                      <div className="cr-product-details pt-[24px] text-center overflow-hidden max-[1200px]:pt-[20px]">
                        <div className="cr-brand">
                          <a href="shop-left-sidebar.html" className="transition-all duration-[0.3s] ease-in-out mb-[5px] text-[13px] text-[#777] flex justify-center" tabindex="-1">Snacks</a>
                          <div className="cr-star mb-[12px] flex justify-center items-center">
                            <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
                            <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
                            <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
                            <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
                            <i className="ri-star-line mx-[1px] text-[15px] text-[#f5885f]"></i>
                            <p className="mb-[0] font-Poppins ml-[5px] text-[#999] text-[11px] leading-[10px]">(4.5)</p>
                          </div>
                        </div>
                        <a href="product-left-sidebar.html" className="title transition-all duration-[0.3s] ease-in-out mb-[12px] font-Poppins text-[15px] font-medium leading-[24px] text-[#2b2b2d] hover:text-[#64b496] flex justify-center" tabindex="-1">Best snakes with hazel nut
                          mix pack 200gm</a>
                        <p className="cr-price font-Poppins text-[16px] text-[#7a7a7a] leading-[1.75] max-[1200px]:text-[14px]">
                          <span className="new-price font-Poppins text-[16px] leading-[1.75] max-[1200px]:text-[14px] font-bold text-[#64b496]">$120.25</span>
                          <span className="old-price font-Poppins ml-[5px] leading-[1.75] text-[13px] line-through text-[#7a7a7a] max-[1200px]:text-[12px]">$123.25</span>
                        </p>
                      </div>
                    </div>
                  </div><div className="slick-slide" style={{ width: '285px' }} data-slick-index="1" aria-hidden="true" tabindex="-1" role="option" aria-describedby="slick-slide21">
                    <div className="cr-product-card h-full p-[12px] border-[1px] border-solid border-[#e9e9e9] bg-[#fff] rounded-[5px] overflow-hidden flex-col max-[480px]:w-full">
                      <div className="cr-product-image rounded-[5px] flex items-center justify-center relative">
                        <div className="cr-image-inner zoom-image-hover w-full h-full flex items-center justify-center relative overflow-hidden max-[992px]:pointer-events-none" style={{
                          position: 'relative',
                          overflow: 'hidden',
                        }}>
                          <img src="assets/images/10.jpg" alt="product-1" className="w-full rounded-[5px]" />
                          <img role="presentation" alt="" src="assets/images/10.jpg" className="zoomImg" style={{
                            position: 'absolute',
                            top: '-308.09px',
                            left: '-342.479px',
                            opacity: 0,
                            width: '600px',
                            height: '600px',
                            border: 'none',
                            maxWidth: 'none',
                            maxHeight: 'none',
                          }} /></div>
                        <div className="cr-side-view transition-all duration-[0.4s] ease-in-out absolute z-[20] top-[15px] right-[-40px] grid opacity-0 max-[992px]:right-[12px]">
                          <a href="javascript:void(0)" className="wishlist h-[35px] w-[35px] flex items-center justify-center m-0 p-0 bg-[#fff] border-[1px] border-solid border-[#e9e9e9] rounded-[100%]" tabindex="-1">
                            <i className="ri-heart-line text-[18px] leading-[10px]"></i>
                          </a>
                          <a className="model-oraganic-product h-[35px] w-[35px] flex items-center justify-center m-0 p-0 bg-[#fff] border-[1px] border-solid border-[#e9e9e9] rounded-[100%] mt-[5px] cursor-pointer cr-modal-toggle" tabindex="-1">
                            <i className="ri-eye-line text-[18px] leading-[10px]"></i>
                          </a>
                        </div>
                        <a className="cr-shopping-bag h-[35px] w-[35px] absolute bottom-[-16px] flex items-center justify-center m-0 p-0 bg-[#f7f7f8] border-[1px] border-solid border-[#e9e9e9] rounded-[100%]" href="javascript:void(0)" tabindex="-1">
                          <i className="ri-shopping-bag-line text-[#64b496]"></i>
                        </a>
                      </div>
                      <div className="cr-product-details pt-[24px] text-center overflow-hidden max-[1200px]:pt-[20px]">
                        <div className="cr-brand">
                          <a href="shop-left-sidebar.html" className="transition-all duration-[0.3s] ease-in-out mb-[5px] text-[13px] text-[#777] flex justify-center" tabindex="-1">Snacks</a>
                          <div className="cr-star mb-[12px] flex justify-center items-center">
                            <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
                            <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
                            <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
                            <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
                            <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
                            <p className="mb-[0] font-Poppins ml-[5px] text-[#999] text-[11px] leading-[10px]">(5.0)</p>
                          </div>
                        </div>
                        <a href="product-left-sidebar.html" className="title transition-all duration-[0.3s] ease-in-out mb-[12px] font-Poppins text-[15px] font-medium leading-[24px] text-[#2b2b2d] hover:text-[#64b496] flex justify-center" tabindex="-1">Sweet snakes crunchy nut
                          mix 250gm
                          pack</a>
                        <p className="cr-price font-Poppins text-[16px] text-[#7a7a7a] leading-[1.75] max-[1200px]:text-[14px]">
                          <span className="new-price font-Poppins text-[16px] leading-[1.75] max-[1200px]:text-[14px] font-bold text-[#64b496]">$100.00</span>
                          <span className="old-price font-Poppins ml-[5px] leading-[1.75] text-[13px] line-through text-[#7a7a7a] max-[1200px]:text-[12px]">$110.00</span>
                        </p>
                      </div>
                    </div>
                  </div><div className="slick-slide slick-current slick-active" style={{ width: '285px' }} data-slick-index="2" aria-hidden="false" tabindex="-1" role="option" aria-describedby="slick-slide22">
                    <div className="cr-product-card h-full p-[12px] border-[1px] border-solid border-[#e9e9e9] bg-[#fff] rounded-[5px] overflow-hidden flex-col max-[480px]:w-full">
                      <div className="cr-product-image rounded-[5px] flex items-center justify-center relative">
                        <div className="cr-image-inner zoom-image-hover w-full h-full flex items-center justify-center relative overflow-hidden max-[992px]:pointer-events-none" style={{
                          position: 'relative',
                          overflow: 'hidden',
                        }}>
                          <img src="assets/images/1.jpg" alt="product-1" className="w-full rounded-[5px]" />
                          <img role="presentation" alt="" src="assets/images/1.jpg" className="zoomImg" style={{
                            position: 'absolute',
                            top: '-3.66456px',
                            left: '-337.184px',
                            opacity: 0,
                            width: '600px',
                            height: '600px',
                            border: 'none',
                            maxWidth: 'none',
                            maxHeight: 'none',
                          }} /></div>
                        <div className="cr-side-view transition-all duration-[0.4s] ease-in-out absolute z-[20] top-[15px] right-[-40px] grid opacity-0 max-[992px]:right-[12px]">
                          <a href="javascript:void(0)" className="wishlist h-[35px] w-[35px] flex items-center justify-center m-0 p-0 bg-[#fff] border-[1px] border-solid border-[#e9e9e9] rounded-[100%]" tabindex="0">
                            <i className="ri-heart-line text-[18px] leading-[10px]"></i>
                          </a>
                          <a className="model-oraganic-product h-[35px] w-[35px] flex items-center justify-center m-0 p-0 bg-[#fff] border-[1px] border-solid border-[#e9e9e9] rounded-[100%] mt-[5px] cursor-pointer cr-modal-toggle" tabindex="0">
                            <i className="ri-eye-line text-[18px] leading-[10px]"></i>
                          </a>
                        </div>
                        <a className="cr-shopping-bag h-[35px] w-[35px] absolute bottom-[-16px] flex items-center justify-center m-0 p-0 bg-[#f7f7f8] border-[1px] border-solid border-[#e9e9e9] rounded-[100%]" href="javascript:void(0)" tabindex="0">
                          <i className="ri-shopping-bag-line text-[#64b496]"></i>
                        </a>
                      </div>
                      <div className="cr-product-details pt-[24px] text-center overflow-hidden max-[1200px]:pt-[20px]">
                        <div className="cr-brand">
                          <a href="shop-left-sidebar.html" className="transition-all duration-[0.3s] ease-in-out mb-[5px] text-[13px] text-[#777] flex justify-center" tabindex="0">Snacks</a>
                          <div className="cr-star mb-[12px] flex justify-center items-center">
                            <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
                            <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
                            <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
                            <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
                            <i className="ri-star-line mx-[1px] text-[15px] text-[#f5885f]"></i>
                            <p className="mb-[0] font-Poppins ml-[5px] text-[#999] text-[11px] leading-[10px]">(4.5)</p>
                          </div>
                        </div>
                        <a href="product-left-sidebar.html" className="title transition-all duration-[0.3s] ease-in-out mb-[12px] font-Poppins text-[15px] font-medium leading-[24px] text-[#2b2b2d] hover:text-[#64b496] flex justify-center" tabindex="0">Best snakes with hazel nut
                          mix pack 200gm</a>
                        <p className="cr-price font-Poppins text-[16px] text-[#7a7a7a] leading-[1.75] max-[1200px]:text-[14px]">
                          <span className="new-price font-Poppins text-[16px] leading-[1.75] max-[1200px]:text-[14px] font-bold text-[#64b496]">$120.25</span>
                          <span className="old-price font-Poppins ml-[5px] leading-[1.75] text-[13px] line-through text-[#7a7a7a] max-[1200px]:text-[12px]">$123.25</span>
                        </p>
                      </div>
                    </div>
                  </div><div className="slick-slide slick-active" style={{ width: '285px' }} data-slick-index="3" aria-hidden="false" tabindex="-1" role="option" aria-describedby="slick-slide23">
                    <div className="cr-product-card h-full p-[12px] border-[1px] border-solid border-[#e9e9e9] bg-[#fff] rounded-[5px] overflow-hidden flex-col max-[480px]:w-full">
                      <div className="cr-product-image rounded-[5px] flex items-center justify-center relative">
                        <div className="cr-image-inner zoom-image-hover w-full h-full flex items-center justify-center relative overflow-hidden max-[992px]:pointer-events-none" style={{
                          position: 'relative',
                          overflow: 'hidden',
                        }}>
                          <img src="assets/images/2.jpg" alt="product-1" className="w-full rounded-[5px]" />
                          <img role="presentation" alt="" src="assets/images/2.jpg" className="zoomImg" style={{
                            position: 'absolute',
                            top: '-236.643px',
                            left: '-5.43617px',
                            opacity: 0,
                            width: '600px',
                            height: '600px',
                            border: 'none',
                            maxWidth: 'none',
                            maxHeight: 'none',
                          }} /></div>
                        <div className="cr-side-view transition-all duration-[0.4s] ease-in-out absolute z-[20] top-[15px] right-[-40px] grid opacity-0 max-[992px]:right-[12px]">
                          <a href="javascript:void(0)" className="wishlist h-[35px] w-[35px] flex items-center justify-center m-0 p-0 bg-[#fff] border-[1px] border-solid border-[#e9e9e9] rounded-[100%]" tabindex="0">
                            <i className="ri-heart-line text-[18px] leading-[10px]"></i>
                          </a>
                          <a className="model-oraganic-product h-[35px] w-[35px] flex items-center justify-center m-0 p-0 bg-[#fff] border-[1px] border-solid border-[#e9e9e9] rounded-[100%] mt-[5px] cursor-pointer cr-modal-toggle" tabindex="0">
                            <i className="ri-eye-line text-[18px] leading-[10px]"></i>
                          </a>
                        </div>
                        <a className="cr-shopping-bag h-[35px] w-[35px] absolute bottom-[-16px] flex items-center justify-center m-0 p-0 bg-[#f7f7f8] border-[1px] border-solid border-[#e9e9e9] rounded-[100%]" href="javascript:void(0)" tabindex="0">
                          <i className="ri-shopping-bag-line text-[#64b496]"></i>
                        </a>
                      </div>
                      <div className="cr-product-details pt-[24px] text-center overflow-hidden max-[1200px]:pt-[20px]">
                        <div className="cr-brand">
                          <a href="shop-left-sidebar.html" className="transition-all duration-[0.3s] ease-in-out mb-[5px] text-[13px] text-[#777] flex justify-center" tabindex="0">Snacks</a>
                          <div className="cr-star mb-[12px] flex justify-center items-center">
                            <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
                            <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
                            <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
                            <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
                            <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
                            <p className="mb-[0] font-Poppins ml-[5px] text-[#999] text-[11px] leading-[10px]">(5.0)</p>
                          </div>
                        </div>
                        <a href="product-left-sidebar.html" className="title transition-all duration-[0.3s] ease-in-out mb-[12px] font-Poppins text-[15px] font-medium leading-[24px] text-[#2b2b2d] hover:text-[#64b496] flex justify-center" tabindex="0">Sweet snakes crunchy nut
                          mix 250gm
                          pack</a>
                        <p className="cr-price font-Poppins text-[16px] text-[#7a7a7a] leading-[1.75] max-[1200px]:text-[14px]">
                          <span className="new-price font-Poppins text-[16px] leading-[1.75] max-[1200px]:text-[14px] font-bold text-[#64b496]">$100.00</span>
                          <span className="old-price font-Poppins ml-[5px] leading-[1.75] text-[13px] line-through text-[#7a7a7a] max-[1200px]:text-[12px]">$110.00</span>
                        </p>
                      </div>
                    </div>
                  </div><div className="slick-slide slick-active" style={{ width: '285px' }} data-slick-index="4" aria-hidden="false" tabindex="-1" role="option" aria-describedby="slick-slide24">
                    <div className="cr-product-card h-full p-[12px] border-[1px] border-solid border-[#e9e9e9] bg-[#fff] rounded-[5px] overflow-hidden flex-col max-[480px]:w-full">
                      <div className="cr-product-image rounded-[5px] flex items-center justify-center relative">
                        <div className="cr-image-inner zoom-image-hover w-full h-full flex items-center justify-center relative overflow-hidden max-[992px]:pointer-events-none" style={{
                          position: 'relative',
                          overflow: 'hidden',
                        }}>
                          <img src="assets/images/3.jpg" alt="product-1" className="w-full rounded-[5px]" />
                          <img role="presentation" alt="" src="assets/images/3.jpg" className="zoomImg" style={{
                            position: 'absolute',
                            top: '0px',
                            left: '0px',
                            opacity: 0,
                            width: '600px',
                            height: '600px',
                            border: 'none',
                            maxWidth: 'none',
                            maxHeight: 'none',
                          }} /></div>
                        <div className="cr-side-view transition-all duration-[0.4s] ease-in-out absolute z-[20] top-[15px] right-[-40px] grid opacity-0 max-[992px]:right-[12px]">
                          <a href="javascript:void(0)" className="wishlist h-[35px] w-[35px] flex items-center justify-center m-0 p-0 bg-[#fff] border-[1px] border-solid border-[#e9e9e9] rounded-[100%]" tabindex="0">
                            <i className="ri-heart-line text-[18px] leading-[10px]"></i>
                          </a>
                          <a className="model-oraganic-product h-[35px] w-[35px] flex items-center justify-center m-0 p-0 bg-[#fff] border-[1px] border-solid border-[#e9e9e9] rounded-[100%] mt-[5px] cursor-pointer cr-modal-toggle" tabindex="0">
                            <i className="ri-eye-line text-[18px] leading-[10px]"></i>
                          </a>
                        </div>
                        <a className="cr-shopping-bag h-[35px] w-[35px] absolute bottom-[-16px] flex items-center justify-center m-0 p-0 bg-[#f7f7f8] border-[1px] border-solid border-[#e9e9e9] rounded-[100%]" href="javascript:void(0)" tabindex="0">
                          <i className="ri-shopping-bag-line text-[#64b496]"></i>
                        </a>
                      </div>
                      <div className="cr-product-details pt-[24px] text-center overflow-hidden max-[1200px]:pt-[20px]">
                        <div className="cr-brand">
                          <a href="shop-left-sidebar.html" className="transition-all duration-[0.3s] ease-in-out mb-[5px] text-[13px] text-[#777] flex justify-center" tabindex="0">Snacks</a>
                          <div className="cr-star mb-[12px] flex justify-center items-center">
                            <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
                            <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
                            <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
                            <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
                            <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
                            <p className="mb-[0] font-Poppins ml-[5px] text-[#999] text-[11px] leading-[10px]">(5.0)</p>
                          </div>
                        </div>
                        <a href="product-left-sidebar.html" className="title transition-all duration-[0.3s] ease-in-out mb-[12px] font-Poppins text-[15px] font-medium leading-[24px] text-[#2b2b2d] hover:text-[#64b496] flex justify-center" tabindex="0">Sweet snakes crunchy nut
                          mix 250gm
                          pack</a>
                        <p className="cr-price font-Poppins text-[16px] text-[#7a7a7a] leading-[1.75] max-[1200px]:text-[14px]">
                          <span className="new-price font-Poppins text-[16px] leading-[1.75] max-[1200px]:text-[14px] font-bold text-[#64b496]">$100.00</span>
                          <span className="old-price font-Poppins ml-[5px] leading-[1.75] text-[13px] line-through text-[#7a7a7a] max-[1200px]:text-[12px]">$110.00</span>
                        </p>
                      </div>
                    </div>
                  </div><div className="slick-slide slick-cloned slick-active" style={{ width: '285px' }} data-slick-index="5" id="" aria-hidden="false" tabindex="-1">
                    <div className="cr-product-card h-full p-[12px] border-[1px] border-solid border-[#e9e9e9] bg-[#fff] rounded-[5px] overflow-hidden flex-col max-[480px]:w-full">
                      <div className="cr-product-image rounded-[5px] flex items-center justify-center relative">
                        <div className="cr-image-inner zoom-image-hover w-full h-full flex items-center justify-center relative overflow-hidden max-[992px]:pointer-events-none" style={{
                          position: 'relative',
                          overflow: 'hidden',
                        }}>
                          <img src="assets/images/9.jpg" alt="product-1" className="w-full rounded-[5px]" />
                          <img role="presentation" alt="" src="assets/images/9.jpg" className="zoomImg" style={{
                            position: 'absolute',
                            top: '0px',
                            left: '0px',
                            opacity: 0,
                            width: '600px',
                            height: '600px',
                            border: 'none',
                            maxWidth: 'none',
                            maxHeight: 'none',
                          }} /></div>
                        <div className="cr-side-view transition-all duration-[0.4s] ease-in-out absolute z-[20] top-[15px] right-[-40px] grid opacity-0 max-[992px]:right-[12px]">
                          <a href="javascript:void(0)" className="wishlist h-[35px] w-[35px] flex items-center justify-center m-0 p-0 bg-[#fff] border-[1px] border-solid border-[#e9e9e9] rounded-[100%]" tabindex="0">
                            <i className="ri-heart-line text-[18px] leading-[10px]"></i>
                          </a>
                          <a className="model-oraganic-product h-[35px] w-[35px] flex items-center justify-center m-0 p-0 bg-[#fff] border-[1px] border-solid border-[#e9e9e9] rounded-[100%] mt-[5px] cursor-pointer cr-modal-toggle" tabindex="0">
                            <i className="ri-eye-line text-[18px] leading-[10px]"></i>
                          </a>
                        </div>
                        <a className="cr-shopping-bag h-[35px] w-[35px] absolute bottom-[-16px] flex items-center justify-center m-0 p-0 bg-[#f7f7f8] border-[1px] border-solid border-[#e9e9e9] rounded-[100%]" href="javascript:void(0)" tabindex="0">
                          <i className="ri-shopping-bag-line text-[#64b496]"></i>
                        </a>
                      </div>
                      <div className="cr-product-details pt-[24px] text-center overflow-hidden max-[1200px]:pt-[20px]">
                        <div className="cr-brand">
                          <a href="shop-left-sidebar.html" className="transition-all duration-[0.3s] ease-in-out mb-[5px] text-[13px] text-[#777] flex justify-center" tabindex="0">Snacks</a>
                          <div className="cr-star mb-[12px] flex justify-center items-center">
                            <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
                            <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
                            <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
                            <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
                            <i className="ri-star-line mx-[1px] text-[15px] text-[#f5885f]"></i>
                            <p className="mb-[0] font-Poppins ml-[5px] text-[#999] text-[11px] leading-[10px]">(4.5)</p>
                          </div>
                        </div>
                        <a href="product-left-sidebar.html" className="title transition-all duration-[0.3s] ease-in-out mb-[12px] font-Poppins text-[15px] font-medium leading-[24px] text-[#2b2b2d] hover:text-[#64b496] flex justify-center" tabindex="0">Best snakes with hazel nut
                          mix pack 200gm</a>
                        <p className="cr-price font-Poppins text-[16px] text-[#7a7a7a] leading-[1.75] max-[1200px]:text-[14px]">
                          <span className="new-price font-Poppins text-[16px] leading-[1.75] max-[1200px]:text-[14px] font-bold text-[#64b496]">$120.25</span>
                          <span className="old-price font-Poppins ml-[5px] leading-[1.75] text-[13px] line-through text-[#7a7a7a] max-[1200px]:text-[12px]">$123.25</span>
                        </p>
                      </div>
                    </div>
                  </div><div className="slick-slide slick-cloned" style={{ width: '285px' }} data-slick-index="6" id="" aria-hidden="true" tabindex="-1">
                    <div className="cr-product-card h-full p-[12px] border-[1px] border-solid border-[#e9e9e9] bg-[#fff] rounded-[5px] overflow-hidden flex-col max-[480px]:w-full">
                      <div className="cr-product-image rounded-[5px] flex items-center justify-center relative">
                        <div className="cr-image-inner zoom-image-hover w-full h-full flex items-center justify-center relative overflow-hidden max-[992px]:pointer-events-none" style={{
                          position: 'relative',
                          overflow: 'hidden',
                        }}>
                          <img src="assets/images/10.jpg" alt="product-1" className="w-full rounded-[5px]" />
                          <img role="presentation" alt="" src="assets/images/10.jpg" className="zoomImg" style={{
                            position: 'absolute',
                            top: '0px',
                            left: '0px',
                            opacity: 0,
                            width: '600px',
                            height: '600px',
                            border: 'none',
                            maxWidth: 'none',
                            maxHeight: 'none',
                          }} /></div>
                        <div className="cr-side-view transition-all duration-[0.4s] ease-in-out absolute z-[20] top-[15px] right-[-40px] grid opacity-0 max-[992px]:right-[12px]">
                          <a href="javascript:void(0)" className="wishlist h-[35px] w-[35px] flex items-center justify-center m-0 p-0 bg-[#fff] border-[1px] border-solid border-[#e9e9e9] rounded-[100%]" tabindex="-1">
                            <i className="ri-heart-line text-[18px] leading-[10px]"></i>
                          </a>
                          <a className="model-oraganic-product h-[35px] w-[35px] flex items-center justify-center m-0 p-0 bg-[#fff] border-[1px] border-solid border-[#e9e9e9] rounded-[100%] mt-[5px] cursor-pointer cr-modal-toggle" tabindex="-1">
                            <i className="ri-eye-line text-[18px] leading-[10px]"></i>
                          </a>
                        </div>
                        <a className="cr-shopping-bag h-[35px] w-[35px] absolute bottom-[-16px] flex items-center justify-center m-0 p-0 bg-[#f7f7f8] border-[1px] border-solid border-[#e9e9e9] rounded-[100%]" href="javascript:void(0)" tabindex="-1">
                          <i className="ri-shopping-bag-line text-[#64b496]"></i>
                        </a>
                      </div>
                      <div className="cr-product-details pt-[24px] text-center overflow-hidden max-[1200px]:pt-[20px]">
                        <div className="cr-brand">
                          <a href="shop-left-sidebar.html" className="transition-all duration-[0.3s] ease-in-out mb-[5px] text-[13px] text-[#777] flex justify-center" tabindex="-1">Snacks</a>
                          <div className="cr-star mb-[12px] flex justify-center items-center">
                            <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
                            <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
                            <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
                            <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
                            <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
                            <p className="mb-[0] font-Poppins ml-[5px] text-[#999] text-[11px] leading-[10px]">(5.0)</p>
                          </div>
                        </div>
                        <a href="product-left-sidebar.html" className="title transition-all duration-[0.3s] ease-in-out mb-[12px] font-Poppins text-[15px] font-medium leading-[24px] text-[#2b2b2d] hover:text-[#64b496] flex justify-center" tabindex="-1">Sweet snakes crunchy nut
                          mix 250gm
                          pack</a>
                        <p className="cr-price font-Poppins text-[16px] text-[#7a7a7a] leading-[1.75] max-[1200px]:text-[14px]">
                          <span className="new-price font-Poppins text-[16px] leading-[1.75] max-[1200px]:text-[14px] font-bold text-[#64b496]">$100.00</span>
                          <span className="old-price font-Poppins ml-[5px] leading-[1.75] text-[13px] line-through text-[#7a7a7a] max-[1200px]:text-[12px]">$110.00</span>
                        </p>
                      </div>
                    </div>
                  </div><div className="slick-slide slick-cloned" style={{ width: '285px' }} data-slick-index="7" id="" aria-hidden="true" tabindex="-1">
                    <div className="cr-product-card h-full p-[12px] border-[1px] border-solid border-[#e9e9e9] bg-[#fff] rounded-[5px] overflow-hidden flex-col max-[480px]:w-full">
                      <div className="cr-product-image rounded-[5px] flex items-center justify-center relative">
                        <div className="cr-image-inner zoom-image-hover w-full h-full flex items-center justify-center relative overflow-hidden max-[992px]:pointer-events-none" style={{
                          position: 'relative',
                          overflow: 'hidden',
                        }}>
                          <img src="assets/images/1.jpg" alt="product-1" className="w-full rounded-[5px]" />
                          <img role="presentation" alt="" src="assets/images/1.jpg" className="zoomImg" style={{
                            position: 'absolute',
                            top: '0px',
                            left: '0px',
                            opacity: 0,
                            width: '600px',
                            height: '600px',
                            border: 'none',
                            maxWidth: 'none',
                            maxHeight: 'none',
                          }} /></div>
                        <div className="cr-side-view transition-all duration-[0.4s] ease-in-out absolute z-[20] top-[15px] right-[-40px] grid opacity-0 max-[992px]:right-[12px]">
                          <a href="javascript:void(0)" className="wishlist h-[35px] w-[35px] flex items-center justify-center m-0 p-0 bg-[#fff] border-[1px] border-solid border-[#e9e9e9] rounded-[100%]" tabindex="-1">
                            <i className="ri-heart-line text-[18px] leading-[10px]"></i>
                          </a>
                          <a className="model-oraganic-product h-[35px] w-[35px] flex items-center justify-center m-0 p-0 bg-[#fff] border-[1px] border-solid border-[#e9e9e9] rounded-[100%] mt-[5px] cursor-pointer cr-modal-toggle" tabindex="-1">
                            <i className="ri-eye-line text-[18px] leading-[10px]"></i>
                          </a>
                        </div>
                        <a className="cr-shopping-bag h-[35px] w-[35px] absolute bottom-[-16px] flex items-center justify-center m-0 p-0 bg-[#f7f7f8] border-[1px] border-solid border-[#e9e9e9] rounded-[100%]" href="javascript:void(0)" tabindex="-1">
                          <i className="ri-shopping-bag-line text-[#64b496]"></i>
                        </a>
                      </div>
                      <div className="cr-product-details pt-[24px] text-center overflow-hidden max-[1200px]:pt-[20px]">
                        <div className="cr-brand">
                          <a href="shop-left-sidebar.html" className="transition-all duration-[0.3s] ease-in-out mb-[5px] text-[13px] text-[#777] flex justify-center" tabindex="-1">Snacks</a>
                          <div className="cr-star mb-[12px] flex justify-center items-center">
                            <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
                            <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
                            <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
                            <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
                            <i className="ri-star-line mx-[1px] text-[15px] text-[#f5885f]"></i>
                            <p className="mb-[0] font-Poppins ml-[5px] text-[#999] text-[11px] leading-[10px]">(4.5)</p>
                          </div>
                        </div>
                        <a href="product-left-sidebar.html" className="title transition-all duration-[0.3s] ease-in-out mb-[12px] font-Poppins text-[15px] font-medium leading-[24px] text-[#2b2b2d] hover:text-[#64b496] flex justify-center" tabindex="-1">Best snakes with hazel nut
                          mix pack 200gm</a>
                        <p className="cr-price font-Poppins text-[16px] text-[#7a7a7a] leading-[1.75] max-[1200px]:text-[14px]">
                          <span className="new-price font-Poppins text-[16px] leading-[1.75] max-[1200px]:text-[14px] font-bold text-[#64b496]">$120.25</span>
                          <span className="old-price font-Poppins ml-[5px] leading-[1.75] text-[13px] line-through text-[#7a7a7a] max-[1200px]:text-[12px]">$123.25</span>
                        </p>
                      </div>
                    </div>
                  </div><div className="slick-slide slick-cloned" style={{ width: '285px' }} data-slick-index="8" id="" aria-hidden="true" tabindex="-1">
                    <div className="cr-product-card h-full p-[12px] border-[1px] border-solid border-[#e9e9e9] bg-[#fff] rounded-[5px] overflow-hidden flex-col max-[480px]:w-full">
                      <div className="cr-product-image rounded-[5px] flex items-center justify-center relative">
                        <div className="cr-image-inner zoom-image-hover w-full h-full flex items-center justify-center relative overflow-hidden max-[992px]:pointer-events-none" style={{
                          position: 'relative',
                          overflow: 'hidden',
                        }}>
                          <img src="assets/images/2.jpg" alt="product-1" className="w-full rounded-[5px]" />
                          <img role="presentation" alt="" src="assets/images/2.jpg" className="zoomImg" style={{
                            position: 'absolute',
                            top: '0px',
                            left: '0px',
                            opacity: 0,
                            width: '600px',
                            height: '600px',
                            border: 'none',
                            maxWidth: 'none',
                            maxHeight: 'none',
                          }} /></div>
                        <div className="cr-side-view transition-all duration-[0.4s] ease-in-out absolute z-[20] top-[15px] right-[-40px] grid opacity-0 max-[992px]:right-[12px]">
                          <a href="javascript:void(0)" className="wishlist h-[35px] w-[35px] flex items-center justify-center m-0 p-0 bg-[#fff] border-[1px] border-solid border-[#e9e9e9] rounded-[100%]" tabindex="-1">
                            <i className="ri-heart-line text-[18px] leading-[10px]"></i>
                          </a>
                          <a className="model-oraganic-product h-[35px] w-[35px] flex items-center justify-center m-0 p-0 bg-[#fff] border-[1px] border-solid border-[#e9e9e9] rounded-[100%] mt-[5px] cursor-pointer cr-modal-toggle" tabindex="-1">
                            <i className="ri-eye-line text-[18px] leading-[10px]"></i>
                          </a>
                        </div>
                        <a className="cr-shopping-bag h-[35px] w-[35px] absolute bottom-[-16px] flex items-center justify-center m-0 p-0 bg-[#f7f7f8] border-[1px] border-solid border-[#e9e9e9] rounded-[100%]" href="javascript:void(0)" tabindex="-1">
                          <i className="ri-shopping-bag-line text-[#64b496]"></i>
                        </a>
                      </div>
                      <div className="cr-product-details pt-[24px] text-center overflow-hidden max-[1200px]:pt-[20px]">
                        <div className="cr-brand">
                          <a href="shop-left-sidebar.html" className="transition-all duration-[0.3s] ease-in-out mb-[5px] text-[13px] text-[#777] flex justify-center" tabindex="-1">Snacks</a>
                          <div className="cr-star mb-[12px] flex justify-center items-center">
                            <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
                            <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
                            <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
                            <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
                            <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
                            <p className="mb-[0] font-Poppins ml-[5px] text-[#999] text-[11px] leading-[10px]">(5.0)</p>
                          </div>
                        </div>
                        <a href="product-left-sidebar.html" className="title transition-all duration-[0.3s] ease-in-out mb-[12px] font-Poppins text-[15px] font-medium leading-[24px] text-[#2b2b2d] hover:text-[#64b496] flex justify-center" tabindex="-1">Sweet snakes crunchy nut
                          mix 250gm
                          pack</a>
                        <p className="cr-price font-Poppins text-[16px] text-[#7a7a7a] leading-[1.75] max-[1200px]:text-[14px]">
                          <span className="new-price font-Poppins text-[16px] leading-[1.75] max-[1200px]:text-[14px] font-bold text-[#64b496]">$100.00</span>
                          <span className="old-price font-Poppins ml-[5px] leading-[1.75] text-[13px] line-through text-[#7a7a7a] max-[1200px]:text-[12px]">$110.00</span>
                        </p>
                      </div>
                    </div>
                  </div></div></div></div>
            </div>
          </div>
        </div>
      </section>


    </>
  )

}
export default ShopDetailsRight;
