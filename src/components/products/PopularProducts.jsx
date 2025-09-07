import React, { useEffect, useState } from "react";
import ProductItem from './ProductItem';
import {Link} from 'react-router-dom';

const fetchProducts = async () => {
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

const filterProduct = (rspProductList) => {
    const filteredProductList = [];
    if (rspProductList?.categories?.length > 0) {
        rspProductList.categories.forEach((category, categoryIndex) => {
            const products = []
            if (category.id === 'cake-milk') {
                products.push(category.products[0])
                products.push(category.products[1])
            } else {
                products.push(category.products[0])
            }
          
            category.products = products
            filteredProductList.push(category)
        })
    }
    console.log(filteredProductList)
    return filteredProductList;
}
function PopularProducts() {

    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [msg, setMessage] = useState("");
    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        try {
            setLoading(true);
            setMessage("");
            const rsp = await fetchProducts();
            const filteredProductList = filterProduct(rsp)
            setProductList(filteredProductList)
        } catch (err) {
            setMessage("Something went wrong!");
        }
    }

    return (
        <>

            <section className="section-popular-product-shape relative pb-[100px] max-[1200px]:pb-[70px]">
                <div className="popular-product-container flex flex-wrap justify-between relative items-center mx-auto min-[1600px]:max-w-[1500px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px] aos-init aos-animate" data-aos="fade-up" data-aos-duration="2000">
                    <div className="flex flex-wrap w-full">
                        <div className="w-full px-[12px]">
                            <div className="mb-[30px]">
                                <div className="cr-banner mb-[15px] text-center max-[1200px]:pt-[70px]">
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
                               
                                <div className="min-[992px]:w-full w-[50%] max-[480px]:w-full px-[12px] max-[480px]:hidden mb-[24px]">
                                    <div className="cr-ice-cubes max-h-[500px] overflow-hidden relative rounded-[5px] max-[992px]:h-[297px]">
                                        <img src="assets/images/product-banner.jpg" alt="product banner" className="w-full rounded-[5px] max-[420px]:h-auto" />
                                        <div className="cr-ice-cubes-contain pt-[80px] pb-[20px] px-[20px] absolute top-[0] left-[0] flex flex-col flex-wrap items-baseline">
                                            <h4 className="title mb-[5px] font-Manrope text-[40px] text-[#fff] font-light leading-[1.2] max-[1400px]:text-[28px] max-[1200px]:text-[22px] max-[992px]:text-[28px] max-[768px]:text-[26px] max-[576px]:text-[28px]">Juicy </h4>
                                            <h5 className="sub-title mb-[5px] font-Manrope uppercase text-[38px] text-[#f7e8aa] font-black leading-[1.2] max-[1400px]:mb-[2px] max-[1400px]:text-[26px] max-[1200px]:mb-[0] max-[1200px]:text-[20px] max-[992px]:mb-[3px] max-[992px]:text-[24px] max-[768px]:mb-[0] max-[768px]:text-[22px] max-[576px]:mb-[2px] max-[576px]:text-[24px]">Fruits</h5>
                                            <span className="font-Poppins text-[16px] text-[#fff] max-[1400px]:text-[14px]">100% Natural</span>
                                            <Link to={"/products?category=apple-mango"} className="cr-button mt-[15px] h-[40px] font-bold transition-all duration-[0.3s] ease-in-out py-[5px] px-[15px] text-[14px] font-Manrope capitalize leading-[1.2] bg-[#64b496] text-[#fff] border-[1px] border-solid border-[#64b496] rounded-[5px] flex items-center justify-center hover:bg-[#000] hover:border-[#000]">Shop Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="min-[1200px]:w-[75%] min-[992px]:w-[66.66%] w-full mb-[24px]">
                            <div className="flex flex-wrap w-full mb-[-24px]">
                                {
                                    productList.length > 0 ? productList.map((element, index) => {
                                        return element.products.map((productItem,productItemIndex) => {
                                            return <ProductItem key={'product-item-'+productItemIndex} productItem={productItem} categoryObj={element}/>
                                        })
                                        
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
export default PopularProducts;