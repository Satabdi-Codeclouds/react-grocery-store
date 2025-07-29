import React, { useEffect, useState } from "react";
import ProductItem from '../components/products/ProductItem';
import useFetch from "../hooks/useFetch";
import ProductFilterSidebar from "../components/products/ProductFilterSidebar";



const ProductList = () => {
    const [msg, setMessage] = useState("");
    const { data: prodList, loading, error } = useFetch(`/assets/data/all-products.json`);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        setFilteredData(prodList?.categories)
    }, [prodList])

    const filterProducts = (values) => {
            const min = values[0]
            const max = values[1]
            let filteredData = [];
            if (prodList?.categories?.length > 0) {
                filteredData = prodList?.categories.map((catObj) => {
                    const filteredProducts = catObj.products.filter((prodObj) => {
                        return prodObj.price >= min && prodObj.price <= max
                    })
                    return {
                        ...catObj,
                        products: filteredProducts
                    }
                })
            }

         setFilteredData(filteredData)
    }

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
                                    <p className="max-w-[600px] m-auto font-Poppins text-[14px] text-[#7a7a7a] leading-[22px] text-center max-[1200px]:w-[80%] max-[992px]:w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                        ut labore lacus vel facilisis. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-content flex flex-wrap w-full mb-[-24px]" id="MixItUpDA2FB7">
                        <div className="min-[1200px]:w-[25%] min-[992px]:w-[33.33%] w-full mb-[24px]">
                            <ProductFilterSidebar filterHandler={filterProducts} productList={prodList}/>
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
                                    !loading ? filteredData?.length > 0 ? filteredData.map((category, index) => {
                                        return category?.products.map((catProduct, catProductIndex) => {
                                            return <ProductItem productItem={catProduct} categoryObj={category} />
                                        })

                                    }) : <div className="w-full p-[10px] text-center"><p>No Product found</p></div>
                                        : <div className="w-full p-[10px] text-center"><p>loading...</p></div>
                                }


                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductList;