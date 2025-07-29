import { Link,useLocation  } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const ProductItem = ({productItem,categoryObj,fromRelatedProduct=false}) => {
    const {addToCart} = useContext(CartContext)
    return (
        <>
            <div className={!fromRelatedProduct ? 'mix bakery min-[1400px]:w-[25%] min-[1200px]:w-[33.33%] w-[50%] max-[480px]:w-full px-[12px] mb-[24px]' : 'mix bakery w-[100%] px-[12px] mb-[24px]'} >
                <div className="cr-product-card h-full p-[12px] border-[1px] border-solid border-[#e9e9e9] bg-[#fff] rounded-[5px] overflow-hidden flex-col max-[480px]:w-full">
                    <div className="cr-product-image rounded-[5px] flex items-center justify-center relative">
                        <div className="cr-image-inner zoom-image-hover w-full h-full flex items-center justify-center relative overflow-hidden max-[992px]:pointer-events-none" style={{ position: 'relative', overflow: 'hidden' }}>
                            <img src="/assets/images/17.jpg" alt="product-1" className="w-full rounded-[5px]" />
                            <img role="presentation" alt="" src="/assets/images/17.jpg" className="zoomImg" style={{
                                position: "absolute",
                                top: "-93.5515px",
                                left: "-86.2208px",
                                opacity: 0,
                                width: "600px",
                                height: "600px",
                                border: "none",
                                maxWidth: "none",
                                maxHeight: "none",
                            }} /></div>
                        <div className="cr-side-view transition-all duration-[0.4s] ease-in-out absolute z-[20] top-[15px] right-[-40px] grid opacity-0 max-[992px]:right-[12px]">
                            <a href="javascript:void(0)" className="wishlist h-[35px] w-[35px] flex items-center justify-center m-0 p-0 bg-[#fff] border-[1px] border-solid border-[#e9e9e9] rounded-[100%]">
                                <i className="ri-heart-line text-[18px] leading-[10px]"></i>
                            </a>
                            <a className="model-oraganic-product h-[35px] w-[35px] flex items-center justify-center m-0 p-0 bg-[#fff] border-[1px] border-solid border-[#e9e9e9] rounded-[100%] mt-[5px] cursor-pointer cr-modal-toggle">
                                <i className="ri-eye-line text-[18px] leading-[10px]"></i>
                            </a>
                        </div>
                        <button onClick={(e)=>{e.stopPropagation();return addToCart(productItem)}}  className="cr-shopping-bag h-[35px] w-[35px] absolute bottom-[-16px] flex items-center justify-center m-0 p-0 bg-[#f7f7f8] border-[1px] border-solid border-[#e9e9e9] rounded-[100%]" href="javascript:void(0)">
                            <i className="ri-shopping-bag-line text-[#64b496]"></i>
                        </button>
                    </div>
                    <div className="cr-product-details pt-[24px] text-center overflow-hidden max-[1200px]:pt-[20px]">
                        <div className="cr-brand">
                            <a href="shop-left-sidebar.html" className="transition-all duration-[0.3s] ease-in-out mb-[5px] text-[13px] text-[#777] flex justify-center">Bakery</a>
                            <div className="cr-star mb-[12px] flex justify-center items-center">
                                <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
                                <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
                                <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
                                <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
                                <i className="ri-star-fill mx-[1px] text-[15px] text-[#f5885f]"></i>
                                <p className="mb-[0] font-Poppins ml-[5px] text-[#999] text-[11px] leading-[10px]">(5.0)</p>
                            </div>
                        </div>
                        <Link to={'/product-details/'+productItem?.id+'?catId='+categoryObj?.id} className="title transition-all duration-[0.3s] ease-in-out mb-[12px] font-Poppins text-[15px] font-medium leading-[24px] text-[#2b2b2d] hover:text-[#64b496] flex justify-center">{productItem?.name}</Link>
                        <p className="cr-price font-Poppins text-[16px] text-[#7a7a7a] leading-[1.75] max-[1200px]:text-[14px]">
                            <span className="new-price font-Poppins text-[16px] leading-[1.75] max-[1200px]:text-[14px] font-bold text-[#64b496]">${productItem?.price}</span>
                            <span className="old-price font-Poppins ml-[5px] leading-[1.75] text-[13px] line-through text-[#7a7a7a] max-[1200px]:text-[12px]">$22.10</span>
                        </p>
                       {/* <div className="cr-add-button ml-[15px] max-[380px]:hidden">
                        <button onClick={(e)=>{e.stopPropagation();return addToCart(productItem)}} type="button" className="cr-button cr-shopping-bag font-bold h-[40px] transition-all duration-[0.3s] ease-in-out py-[8px] px-[22px] text-[14px] font-Manrope capitalize leading-[1.2] bg-[#64b496] text-[#fff] border-[1px] border-solid border-[#64b496] rounded-[5px] flex items-center justify-center hover:bg-[#000] hover:border-[#000] max-[1200px]:py-[8px] max-[1200px]:px-[15px]">Add to cart</button>
                      </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductItem;