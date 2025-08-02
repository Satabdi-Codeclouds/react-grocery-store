import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductItem from './ProductItem';

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

const filterProducts = (list, categoryId) => {
    if (list?.categories?.length > 0) {
        const releatedCategory = list?.categories.filter((element) => element.id === categoryId);
        return releatedCategory
    }
    return [];
}

export default function RelatedProducts({ categoryId }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [msg, setMessage] = useState("");
    useEffect(() => {
        getProducts();
    }, [categoryId]);

    const getProducts = async () => {
        try {
            setLoading(true);
            setMessage("");
            const rsp = await fetchProducts();
            const filteredProductList = filterProducts(rsp, categoryId)
            setProductList(filteredProductList)
        } catch (err) {
            setMessage("Something went wrong!");
        }
    }
    return (

        <div className="slider-container">
            <Slider {...settings}>
                {productList.map((categoryObj) => {
                    return categoryObj.products.map((productObj) => {
                        return <ProductItem fromRelatedProduct={true} productItem={productObj} categoryObj={categoryObj} />
                    })
                })}

            </Slider>
        </div>
    );
}