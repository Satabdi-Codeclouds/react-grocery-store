import React from "react";

function ProductSection() {
    return (
        <>
      
            {/* <section className="section-popular-products py-[100px] max-[1200px]:py-[70px]">
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
                                    transition: 'transform 500ms',
                                }}><div className="slick-slide slick-cloned" style={{ width: '285px' }} data-slick-index="-4" id="" aria-hidden="true" tabindex="-1">
                                        <div className="cr-product-card h-full p-[12px] border-[1px] border-solid border-[#e9e9e9] bg-[#fff] rounded-[5px] overflow-hidden flex-col max-[480px]:w-full">
                                            <div className="cr-product-image rounded-[5px] flex items-center justify-center relative">
                                                <div className="cr-image-inner zoom-image-hover w-full h-full flex items-center justify-center relative overflow-hidden max-[992px]:pointer-events-none" style={{
                                                    position: 'relative',
                                                    overflow: 'hidden',
                                                }}>
                                                    <img src="assets/img/product/10.jpg" alt="product-1" className="w-full rounded-[5px]" />
                                                    <img role="presentation" alt="" src="https://maraviyainfotech.com/projects/carrot-tailwind/assets/img/product/10.jpg" className="zoomImg" style={{
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
                                                    <img src="assets/img/product/1.jpg" alt="product-1" className="w-full rounded-[5px]" />
                                                    <img role="presentation" alt="" src="https://maraviyainfotech.com/projects/carrot-tailwind/assets/img/product/1.jpg" className="zoomImg" style={{
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
                                                    <img src="assets/img/product/2.jpg" alt="product-1" className="w-full rounded-[5px]" />
                                                    <img role="presentation" alt="" src="https://maraviyainfotech.com/projects/carrot-tailwind/assets/img/product/2.jpg" className="zoomImg" style={{
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
                                                    <img src="assets/img/product/3.jpg" alt="product-1" className="w-full rounded-[5px]" />
                                                    <img role="presentation" alt="" src="https://maraviyainfotech.com/projects/carrot-tailwind/assets/img/product/3.jpg" className="zoomImg" style={{
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
                                                    <img src="assets/img/product/9.jpg" alt="product-1" className="w-full rounded-[5px]" />
                                                    <img role="presentation" alt="" src="https://maraviyainfotech.com/projects/carrot-tailwind/assets/img/product/9.jpg" className="zoomImg" style={{
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
                                                    <img src="assets/img/product/10.jpg" alt="product-1" className="w-full rounded-[5px]" />
                                                    <img role="presentation" alt="" src="https://maraviyainfotech.com/projects/carrot-tailwind/assets/img/product/10.jpg" className="zoomImg" style={{
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
                                    </div><div className="slick-slide slick-current slick-active" style={{ width: '285px' }} data-slick-index="2" aria-hidden="false" tabindex="-1" role="option" aria-describedby="slick-slide22">
                                        <div className="cr-product-card h-full p-[12px] border-[1px] border-solid border-[#e9e9e9] bg-[#fff] rounded-[5px] overflow-hidden flex-col max-[480px]:w-full">
                                            <div className="cr-product-image rounded-[5px] flex items-center justify-center relative">
                                                <div className="cr-image-inner zoom-image-hover w-full h-full flex items-center justify-center relative overflow-hidden max-[992px]:pointer-events-none" style={{
                                                    position: 'relative',
                                                    overflow: 'hidden',
                                                }}>
                                                    <img src="assets/img/product/1.jpg" alt="product-1" className="w-full rounded-[5px]" />
                                                    <img role="presentation" alt="" src="https://maraviyainfotech.com/projects/carrot-tailwind/assets/img/product/1.jpg" className="zoomImg" style={{
                                                        position: 'absolute',
                                                        top: '-0.558178px',
                                                        left: '-191.819px',
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
                                                    <img src="assets/img/product/2.jpg" alt="product-1" className="w-full rounded-[5px]" />
                                                    <img role="presentation" alt="" src="https://maraviyainfotech.com/projects/carrot-tailwind/assets/img/product/2.jpg" className="zoomImg" style={{
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
                                                    <img src="assets/img/product/3.jpg" alt="product-1" className="w-full rounded-[5px]" />
                                                    <img role="presentation" alt="" src="https://maraviyainfotech.com/projects/carrot-tailwind/assets/img/product/3.jpg" className="zoomImg" style={{
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
                                                    <img src="assets/img/product/9.jpg" alt="product-1" className="w-full rounded-[5px]" />
                                                    <img role="presentation" alt="" src="https://maraviyainfotech.com/projects/carrot-tailwind/assets/img/product/9.jpg" className="zoomImg" style={{
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
                                    </div><div className="slick-slide slick-cloned" style={{ width: '285px' }} data-slick-index="6" id="" aria-hidden="true" tabindex="-1">
                                        <div className="cr-product-card h-full p-[12px] border-[1px] border-solid border-[#e9e9e9] bg-[#fff] rounded-[5px] overflow-hidden flex-col max-[480px]:w-full">
                                            <div className="cr-product-image rounded-[5px] flex items-center justify-center relative">
                                                <div className="cr-image-inner zoom-image-hover w-full h-full flex items-center justify-center relative overflow-hidden max-[992px]:pointer-events-none" style={{
                                                    position: 'relative',
                                                    overflow: 'hidden',
                                                }}>
                                                    <img src="assets/img/product/10.jpg" alt="product-1" className="w-full rounded-[5px]" />
                                                    <img role="presentation" alt="" src="https://maraviyainfotech.com/projects/carrot-tailwind/assets/img/product/10.jpg" className="zoomImg" style={{
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
                                                    <img src="assets/img/product/1.jpg" alt="product-1" className="w-full rounded-[5px]" />
                                                    <img role="presentation" alt="" src="https://maraviyainfotech.com/projects/carrot-tailwind/assets/img/product/1.jpg" className="zoomImg" style={{
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
                                                    <img src="assets/img/product/2.jpg" alt="product-1" className="w-full rounded-[5px]" />
                                                    <img role="presentation" alt="" src="https://maraviyainfotech.com/projects/carrot-tailwind/assets/img/product/2.jpg" className="zoomImg" style={{
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
            </section> */}


        </>
    )
}

export default ProductSection;