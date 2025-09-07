import React, { useContext, useEffect, useState } from "react";
import { useSearchParams, useParams } from 'react-router-dom';

import RelatedProducts from './../components/products/RelatedProducts'
import ProductDetailsZoomSlider from './../components/products/ProductDetailsZoomSlider'
import { CartContext } from "../context/CartContext";
import useFetch from "../hooks/useFetch";
import { WishListContext } from '../context/WishListContext'
import QuickViewProduct from './../components/products/QuickViewProduct';
import Rating from "../components/products/Rating";
import Tabs from "..//components/Tabs";

function ProductDetails() {
    const [searchParams] = useSearchParams();
    const catId = searchParams.get('catId');
    const { prodId } = useParams();
    const { addToCart } = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);
    const { data: prodList, loading, error } = useFetch(`/assets/data/all-products.json`)
    const [pructItem, setProductItem] = useState(null);
    const { toggleWishList, isWished } = useContext(WishListContext)
    const [isOpenQuickView, setIsOpenQuickView] = useState(false)


    useEffect(() => {
        if (prodList?.categories?.length > 0) {
            const selectedCatObj = prodList.categories.find((catObj) => catObj.id === catId);
            if (selectedCatObj?.products?.length > 0) {
                const selectedProduct = selectedCatObj.products.find((prodObj) => prodObj.id === prodId)
                setProductItem(selectedProduct)
            }
        }
    }, [prodList,prodId])

    const handleQuantiy = (quantity, increase) => {
        if (increase)
            setQuantity((prevQty) => prevQty + 1)
        else {
            if (quantity > 1) setQuantity((prevQty) => prevQty - 1)
        }
    }

    return (
        <>

            <section className="section-product pt-[100px] max-[1200px]:pt-[70px]">
                <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1600px]:max-w-[1500px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                    <div className="flex flex-wrap w-full mb-[-30px]">

                        <div className="min-[992px]:w-[100%] w-full mb-[30px] aos-init aos-animate" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="600">
                            <div className="flex flex-wrap w-full mb-[-24px] aos-init aos-animate" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="600">
                                <div className="min-[768px]:w-[50%] w-full px-[12px] mb-[24px]">
                                    <div className="vehicle-detail-banner banner-content clearfix h-full">
                                        <div className="banner-slider sticky top-[30px]">
                                            <ProductDetailsZoomSlider pructItem={pructItem}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="min-[768px]:w-[50%] w-full px-[12px] mb-[24px]">
                                    <div className="cr-size-and-weight-contain border-b-[1px] border-solid border-[#e9e9e9] pb-[20px] max-[768px]:mt-[24px]">
                                        <h2 className="heading mb-[15px] block text-[#2b2b2d] text-[22px] leading-[1.5] font-medium max-[1400px]:text-[26px] max-[992px]:text-[20px]">{pructItem?.name}</h2>
                                        <p className="mb-[0] text-[14px] font-Poppins text-[#7a7a7a] leading-[1.75]">{pructItem?.description}</p>
                                    </div>
                                    <div className="cr-size-and-weight pt-[20px]">
                                        <div className="cr-review-star flex">
                                            <div className="cr-star mr-[10px]">
                                                {/* <i className="ri-star-fill text-[16px] text-[#f5885f]"></i>
                                                <i className="ri-star-fill text-[16px] text-[#f5885f]"></i>
                                                <i className="ri-star-fill text-[16px] text-[#f5885f]"></i>
                                                <i className="ri-star-fill text-[16px] text-[#f5885f]"></i>
                                                <i className="ri-star-fill text-[16px] text-[#f5885f]"></i> */}
                                                <Rating ratingScore={pructItem?.rating} />
                                            </div>
                                            <p className="mb-[0] text-[15px] font-Poppins text-[#7a7a7a] leading-[1.75] max-[380px]:hidden">( 75 Review )</p>
                                        </div>
                                        <div className="list">
                                            <ul className="mt-[15px] p-[0] mb-[1rem]">
                                                <li className="py-[5px] text-[#777] flex"><label className="min-w-[100px] mr-[10px] text-[#2b2b2d] font-semibold flex justify-between">Brand <span>:</span></label>{pructItem?.Brand}</li>
                                                <li className="py-[5px] text-[#777] flex"><label className="min-w-[100px] mr-[10px] text-[#2b2b2d] font-semibold flex justify-between">Flavour <span>:</span></label>{pructItem?.Flavour}</li>
                                                <li className="py-[5px] text-[#777] flex"><label className="min-w-[100px] mr-[10px] text-[#2b2b2d] font-semibold flex justify-between">Diet Type <span>:</span></label>{pructItem?.Brand}</li>
                                                <li className="py-[5px] text-[#777] flex"><label className="min-w-[100px] mr-[10px] text-[#2b2b2d] font-semibold flex justify-between">Weight <span>:</span></label>{pructItem?.unit}</li>
                                                <li className="py-[5px] text-[#777] flex"><label className="min-w-[100px] mr-[10px] text-[#2b2b2d] font-semibold flex justify-between">Speciality <span>:</span></label>{pructItem?.Speciality}</li>
                                                {/* <li className="py-[5px] text-[#777] flex"><label className="min-w-[100px] mr-[10px] text-[#2b2b2d] font-semibold flex justify-between">Info <span>:</span></label>Egg Free, Allergen-Free</li> */}
                                                <li className="py-[5px] text-[#777] flex"><label className="min-w-[100px] mr-[10px] text-[#2b2b2d] font-semibold flex justify-between">Items <span>:</span></label>1</li>
                                            </ul>
                                        </div>
                                        <div className="cr-product-price pt-[20px]">
                                            <span className="new-price font-Poppins text-[24px] font-semibold leading-[1.167] text-[#64b496] max-[768px]:text-[22px] max-[576px]:text-[20px]">${pructItem?.price}</span>
                                            <span className="old-price font-Poppins text-[16px] line-through leading-[1.75] text-[#7a7a7a]">${pructItem?.actualPrice}</span>
                                        </div>
                                        {/* <div className="cr-size-weight flex items-center pt-[20px] max-[380px]:flex-col max-[380px]:justify-start max-[380px]:items-start">
                                            <h5 className="mb-[0] font-Poppins text-[16px] leading-[1.556] text-[#2b2b2d] font-medium max-[1200px]:min-w-[100px] max-[1200px]:text-[14px]"><span>Size</span>/<span>Weight</span> :</h5>
                                            <div className="cr-kg pl-[10px] max-[380px]:pl-[0] max-[380px]:pt-[10px]">
                                                <ul className="w-full p-[0] m-[0] flex flex-wrap">
                                                    <li className="transition-all duration-[0.3s] ease-in-out m-[2px] py-[5px] px-[10px] font-Poppins text-[12px] leading-[1] bg-[#fff] text-[#777] border-[1px] border-solid border-[#e9e9e9] rounded-[5px] cursor-pointer max-[1200px]:mr-[5px] active-color">50kg</li>
                                                    <li className="transition-all duration-[0.3s] ease-in-out m-[2px] py-[5px] px-[10px] font-Poppins text-[12px] leading-[1] bg-[#fff] text-[#777] border-[1px] border-solid border-[#e9e9e9] rounded-[5px] cursor-pointer max-[1200px]:mr-[5px]">80kg</li>
                                                    <li className="transition-all duration-[0.3s] ease-in-out m-[2px] py-[5px] px-[10px] font-Poppins text-[12px] leading-[1] bg-[#fff] text-[#777] border-[1px] border-solid border-[#e9e9e9] rounded-[5px] cursor-pointer max-[1200px]:mr-[5px]">120kg</li>
                                                    <li className="transition-all duration-[0.3s] ease-in-out m-[2px] py-[5px] px-[10px] font-Poppins text-[12px] leading-[1] bg-[#fff] text-[#777] border-[1px] border-solid border-[#e9e9e9] rounded-[5px] cursor-pointer max-[1200px]:mr-[5px]">200kg</li>
                                                </ul>
                                            </div>
                                        </div> */}
                                        <div className="cr-add-card flex pt-[20px]">
                                            <div className="cr-qty-main h-full flex relative">
                                                <input readOnly type="text" placeholder="." value={quantity} minLength="1" maxLength="20" className="quantity h-[40px] w-[40px] mr-[5px] text-center border-[1px] border-solid border-[#e9e9e9] rounded-[5px]" />
                                                <button onClick={() => handleQuantiy(quantity, true)} type="button" className="plus w-[18px] h-[18px] p-[0] bg-[#fff] border-[1px] border-solid border-[#e9e9e9] rounded-[5px] leading-[0]">+</button>
                                                <button disabled={quantity === 1 ? true : false} onClick={() => handleQuantiy(quantity, false)} type="button" className="minus w-[18px] h-[18px] p-[0] bg-[#fff] border-[1px] border-solid border-[#e9e9e9] rounded-[5px] leading-[0] absolute bottom-[0] right-[0]">-</button>
                                            </div>
                                            <div className="cr-add-button ml-[15px] max-[380px]:hidden">
                                                <button onClick={(e) => { return addToCart(pructItem, quantity) }} type="button" className="cr-button cr-shopping-bag font-bold h-[40px] transition-all duration-[0.3s] ease-in-out py-[8px] px-[22px] text-[14px] font-Manrope capitalize leading-[1.2] bg-[#64b496] text-[#fff] border-[1px] border-solid border-[#64b496] rounded-[5px] flex items-center justify-center hover:bg-[#000] hover:border-[#000] max-[1200px]:py-[8px] max-[1200px]:px-[15px]">Add to cart</button>
                                            </div>
                                            <div className="cr-card-icon flex ml-[15px]">
                                                <button onClick={(e) => toggleWishList({ ...pructItem, catId: catId })} type="button" className="wishlist m-[0] p-[0] bg-transparent">
                                                    <i className={`ri-heart-line transition-all duration-[0.3s] ease-in-out h-[40px] w-[40px] mr-[10px] flex items-center justify-center text-[22px] bg-[#fff] border-[1px] border-solid border-[#e9e9e9] rounded-[5px] hover:bg-[#64b496] hover:text-[#fff] ${isWished(pructItem?.id) ? ' bg-theme' : ''}`}></i>
                                                </button>
                                                <button type="button" onClick={(e)=>{return setIsOpenQuickView(true)}} className="model-oraganic-product m-[0] p-[0] bg-transparent cr-modal-toggle cursor-pointer">
                                                    <i className="ri-eye-line transition-all duration-[0.3s] ease-in-out h-[40px] w-[40px] mr-[10px] flex items-center justify-center text-[22px] bg-[#fff] border-[1px] border-solid border-[#e9e9e9] rounded-[5px] hover:bg-[#64b496] hover:text-[#fff]"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-wrap w-full aos-init aos-animate" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="600">
                                <div className="w-full px-[12px]">
                                    <div className="cr-paking-delivery mt-[40px] p-[24px] bg-[#fff] border-[1px] border-solid border-[#e9e9e9] rounded-[5px]">
                                       <Tabs productDetails={pructItem}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="section-popular-products py-[100px] max-[1200px]:py-[70px]">
                <div>
                    <RelatedProducts categoryId={catId} />
                </div>
            </section>
            {pructItem ?
            <QuickViewProduct
                isOpen={isOpenQuickView}
                onClose={() => setIsOpenQuickView(false)}
                product={pructItem}
            /> : ''}
        </>
    )
}

export default ProductDetails;