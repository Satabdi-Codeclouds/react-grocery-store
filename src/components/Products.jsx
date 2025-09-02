import React, { useEffect, useState } from "react";
// import ProductItem from './products/PopularProducts';
const fetchProducts = () => {
  return fetch(
    `/assets/data/all-products.json`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      //  Authorization: `Bearer ${tokenData.token}`,
      },
    }
  ).then((data) => data.json());

}
function Products() {
    const [productList,setProductList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [msg, setMessage] = useState("");
    // const filterProduct = (rspProductList) => {
    //     const filteredProductList = [];
    //     console.log(rspProductList.length)
    //     if(rspProductList?.length > 0) {
    //         rspProductList.forEach((element,index) => {
    //             if(element.id === 'cake-milk') {
    //                 filteredProductList.push(element.products[0])
    //                 filteredProductList.push(element.products[1])
    //             }else{
    //                  filteredProductList.push(element.products[0])
    //             }
    //         })
    //         console.log(filteredProductList)
    //         setProductList(filteredProductList)
    //     }
    // }
    // const getProducts = async () => {
    //     try{
    //         setLoading(true);
    //         setMessage("");
    //         const rsp = await fetchProducts();
    //         console.log(rsp?.categories)
    //         filterProduct(rsp?.categories)
    //     }catch(err){
    //         setMessage("Something went wrong!");
    //     }
    // } 
    useEffect(()=>{
      //  getProducts();
    },[])
    return (
        <>

            <section className="section-popular-product-shape relative pb-[100px] max-[1200px]:pb-[70px]">
                <div className="popular-product-container flex flex-wrap justify-between relative items-center mx-auto min-[1600px]:max-w-[1500px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px] aos-init aos-animate" data-aos="fade-up" data-aos-duration="2000">
                    <div className="flex flex-wrap w-full">
                        <div className="w-full px-[12px]">
                            <div className="mb-[30px]">
                                <div className="cr-banner mb-[15px] text-center">
                                    <h2 className="font-Manrope text-[32px] font-bold leading-[1.2] text-[#2b2b2d] max-[1200px]:text-[28px] max-[992px]:text-[25px] max-[768px]:text-[22px]">Popular Products</h2>
                                </div>
                                <div className="cr-banner-sub-title w-full">
                                    <p className="max-w-[600px] m-auto font-Poppins text-[14px] text-[#7a7a7a] leading-[22px] text-center max-[1200px]:w-[80%] max-[992px]:w-full">Explore a wide range of fresh groceries, daily essentials, and pantry must-haves — everything you need in one place.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-content flex flex-wrap w-full mb-[-24px]" id="MixItUpDA2FB7">
                        <div className="min-[1200px]:w-[25%] min-[992px]:w-[33.33%] w-full mb-[24px]">
                            <div className="flex flex-wrap w-full mb-[-24px] sticky top-[0]">
                                <div className="min-[992px]:w-full w-[50%] max-[480px]:w-full px-[12px] mb-[24px]">
                                   

                                   
                                </div>
                                <div className="min-[992px]:w-full w-[50%] max-[480px]:w-full px-[12px] max-[480px]:hidden mb-[24px]">
                                    <div className="cr-ice-cubes max-h-[500px] overflow-hidden relative rounded-[5px] max-[992px]:h-[297px]">
                                        <img src="assets/images/product-banner.jpg" alt="product banner" className="w-full rounded-[5px] max-[420px]:h-auto" />
                                        <div className="cr-ice-cubes-contain pt-[80px] pb-[20px] px-[20px] absolute top-[0] left-[0] flex flex-col flex-wrap items-baseline">
                                            <h4 className="title mb-[5px] font-Manrope text-[40px] text-[#fff] font-light leading-[1.2] max-[1400px]:text-[28px] max-[1200px]:text-[22px] max-[992px]:text-[28px] max-[768px]:text-[26px] max-[576px]:text-[28px]">Juicy </h4>
                                            <h5 className="sub-title mb-[5px] font-Manrope uppercase text-[38px] text-[#f7e8aa] font-black leading-[1.2] max-[1400px]:mb-[2px] max-[1400px]:text-[26px] max-[1200px]:mb-[0] max-[1200px]:text-[20px] max-[992px]:mb-[3px] max-[992px]:text-[24px] max-[768px]:mb-[0] max-[768px]:text-[22px] max-[576px]:mb-[2px] max-[576px]:text-[24px]">Fruits</h5>
                                            <span className="font-Poppins text-[16px] text-[#fff] max-[1400px]:text-[14px]">100% Natural</span>
                                            <a href="shop-left-sidebar.html" className="cr-button mt-[15px] h-[40px] font-bold transition-all duration-[0.3s] ease-in-out py-[5px] px-[15px] text-[14px] font-Manrope capitalize leading-[1.2] bg-[#64b496] text-[#fff] border-[1px] border-solid border-[#64b496] rounded-[5px] flex items-center justify-center hover:bg-[#000] hover:border-[#000]">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="min-[1200px]:w-[75%] min-[992px]:w-[66.66%] w-full mb-[24px]">
                            <div className="flex flex-wrap w-full mb-[-24px]">
                                    {
                                       productList.length > 0 ?  productList.map((element,index)=> {
                                        return <div className="mix bakery min-[1400px]:w-[25%] min-[1200px]:w-[33.33%] w-[50%] max-[480px]:w-full px-[12px] mb-[24px]" >
                                                <div className="cr-product-card h-full p-[12px] border-[1px] border-solid border-[#e9e9e9] bg-[#fff] rounded-[5px] overflow-hidden flex-col max-[480px]:w-full">
                                                    <div className="cr-product-image rounded-[5px] flex items-center justify-center relative">
                                                        <div className="cr-image-inner zoom-image-hover w-full h-full flex items-center justify-center relative overflow-hidden max-[992px]:pointer-events-none" style={{ position: 'relative', overflow: 'hidden' }}>
                                                            <img src="assets/images/17.jpg" alt="product-1" className="w-full rounded-[5px]" />
                                                            <img role="presentation" alt="" src="assets/images/17.jpg" className="zoomImg" style={{
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
                                                        <a className="cr-shopping-bag h-[35px] w-[35px] absolute bottom-[-16px] flex items-center justify-center m-0 p-0 bg-[#f7f7f8] border-[1px] border-solid border-[#e9e9e9] rounded-[100%]" href="javascript:void(0)">
                                                            <i className="ri-shopping-bag-line text-[#64b496]"></i>
                                                        </a>
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
                                                        <a href="product-left-sidebar.html" className="title transition-all duration-[0.3s] ease-in-out mb-[12px] font-Poppins text-[15px] font-medium leading-[24px] text-[#2b2b2d] hover:text-[#64b496] flex justify-center">Delicious white baked fresh bread
                                                            and toast</a>
                                                        <p className="cr-price font-Poppins text-[16px] text-[#7a7a7a] leading-[1.75] max-[1200px]:text-[14px]">
                                                            <span className="new-price font-Poppins text-[16px] leading-[1.75] max-[1200px]:text-[14px] font-bold text-[#64b496]">$20</span>
                                                            <span className="old-price font-Poppins ml-[5px] leading-[1.75] text-[13px] line-through text-[#7a7a7a] max-[1200px]:text-[12px]">$22.10</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        }) : ''
                                    }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                </>
                )
}
export default Products;