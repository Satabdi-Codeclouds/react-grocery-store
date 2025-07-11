import React from "react";
import { useState } from 'react';
function Header() {

    const menuItems = [
        {
            item: "Home",
            link: "home",
            child: []
        },
        {
            item: "Category",
            link: "category",
            child: [
                {
                    item: "Shop Left sidebar",
                    link: "shop-left-sidebar",

                }
            ]
        },

        {
            item: "Products",
            link: "products",
            child: []
        },
        {
            item: "Pages",
            link: "pages",
            child: [
                {
                    item: "About Us",
                    link: "about",
                },
                {
                    item: "Contact Us",
                    link: "Contact",
                },
                {
                    item: "Cart",
                    link: "cart",
                },
                {
                    item: "Checkout",
                    link: "checkout",
                },
                {
                    item: "Wishlist",
                    link: "wishlist",
                },
                {
                    item: "Faq",
                    link: "faq",
                },
                {
                    item: "Login",
                    link: "login",
                },
            ]
        },


    ]

    const [items, setItems] = useState(menuItems)
    return (
        <>
            <header className="h-[142px] max-[992px]:h-[133px] max-[576px]:h-[173px] bg-[#fff] border-b-[1px] border-solid border-[#e9e9e9]">
                <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1600px]:max-w-[1500px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                    <div className="flex flex-wrap w-full">
                        <div className="w-full px-[12px]">
                            <div
                                className="top-header py-[20px] flex flex-row gap-[10px] justify-between border-b-[1px] border-solid border-[#e9e9e9] relative z-[4] max-[576px]:py-[15px] max-[576px]:block">
                                <a href="index.html"
                                    className="cr-logo max-[576px]:mb-[15px] max-[576px]:flex max-[576px]:justify-center">
                                    <img src="assets/images/logo.png" alt="logo"
                                        className="logo block h-[35px] w-[115px] max-[576px]:w-[100px]" />
                                    <img src="assets/images/dark-logo.png" alt="logo"
                                        className="dark-logo hidden h-[35px] w-[115px] max-[576px]:w-[100px]" />
                                </a>
                                <form className="font-Manrope cr-search relative max-[576px]:max-w-[350px] max-[576px]:m-auto">
                                    <input
                                        className="search-input w-[600px] h-[45px] pl-[15px] pr-[175px] border-[1px] border-solid border-[#64b496] rounded-[5px] outline-[0] max-[1400px]:w-[400px] max-[992px]:max-w-[350px] max-[576px]:w-full max-[420px]:pr-[45px] "
                                        type="text" placeholder="Search For items..." />
                                    <select
                                        className="form-select mr-[10px] w-[120px] h-[calc(100%-2px)] border-[0] tracking-[0] absolute top-[1px] pt-[0.375rem] pb-[0.375rem] pl-[0.5rem] outline-[0] right-[45px] text-[13px] border-l-[1px] border-solid border-[#64b496] rounded-[0] max-[420px]:hidden"
                                        aria-label="Default select example">
                                        <option selected>All Categories</option>
                                        <option value="1">Mens</option>
                                        <option value="2">Womens</option>
                                        <option value="3">Electronics</option>
                                    </select>
                                    <a href="javascript:void(0)"
                                        className="search-btn w-[45px] bg-[#64b496] absolute right-[0] top-[0] bottom-[0] rounded-r-[5px] flex items-center justify-center">
                                        <i className="ri-search-line text-[14px] text-[#fff]"></i>
                                    </a>
                                </form>
                                <div className="cr-right-bar flex max-[992px]:hidden">
                                    <ul className="navbar-nav m-auto relative z-[3]">
                                        <li className="nav-item dropdown relative">
                                            <a className="nav-link dropdown-toggle cr-right-bar-item transition-all duration-[0.3s] ease-in-out flex items-center relative text-[14px] font-medium text-[#000] z-[1] relative py-[11px] pr-[30px] pl-[8px] max-[1200px]:py-[8px]"
                                                href="javascript:void(0)">
                                                <i className="ri-user-3-line pr-[5px] text-[21px] leading-[17px]"></i>
                                                <span
                                                    className="transition-all duration-[0.3s] ease-in-out font-Poppins text-[15px] leading-[15px] text-[15px] font-medium text-[#000] tracking-[0.03rem] font-Manrope">Account</span>
                                            </a>
                                            <ul
                                                className="dropdown-menu transition-all duration-[0.3s] ease-in-out py-[8px] min-w-[160px] mt-[35px] absolute text-left opacity-0 invisible left-auto bg-[#fff] rounded-[5px] block z-[9] border-[1px] border-solid border-[#e9e9e9]">

                                                <li className="w-full mr-[0]">
                                                    <a className="dropdown-item transition-all duration-[0.3s] ease-in-out py-[7px] px-[20px] bg-[#fff] relative capitalize block w-full text-[#777] text-[13px] font-normal"
                                                        href="checkout.html">Checkout</a>
                                                </li>
                                                <li className="w-full mr-[0]">
                                                    <a className="dropdown-item transition-all duration-[0.3s] ease-in-out py-[7px] px-[20px] bg-[#fff] relative capitalize block w-full text-[#777] text-[13px] font-normal"
                                                        href="login.html">Login</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <a href="wishlist.html"
                                        className="cr-right-bar-item pr-[30px] transition-all duration-[0.3s] ease-in-out flex items-center">
                                        <i className="ri-heart-3-line pr-[5px] text-[21px] leading-[17px]"></i>
                                        <span
                                            className="transition-all duration-[0.3s] ease-in-out font-Poppins text-[15px] leading-[15px] font-medium text-[#000]">Wishlist</span>
                                    </a>
                                    <a href="javascript:void(0)"
                                        className="cr-right-bar-item Shopping-toggle transition-all duration-[0.3s] ease-in-out flex items-center">
                                        <i className="ri-shopping-cart-line pr-[5px] text-[21px] leading-[17px]"></i>
                                        <span
                                            className="transition-all duration-[0.3s] ease-in-out font-Poppins text-[15px] leading-[15px] font-medium text-[#000]">Cart</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cr-fix" id="cr-main-menu-desk">
                    <div
                        className="flex flex-wrap justify-between relative items-center mx-auto min-[1600px]:max-w-[1500px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                        <div className="cr-menu-list w-full px-[12px] relative flex items-center flex-row justify-between">
                            <div className="cr-category-icon-block py-[10px] max-[992px]:hidden">
                                <div className="cr-category-menu relative">
                                    <div
                                        className="cr-category-toggle w-[35px] h-[35px] border-[1px] border-solid border-[#e9e9e9] rounded-[5px] cursor-pointer flex items-center justify-center">
                                        <i className="ri-menu-2-line text-[22px] text-[#2b2b2d] leading-[14px] block"></i>
                                    </div>
                                </div>

                            </div>
                            <nav
                                className="justify-between relative flex flex-wrap items-center max-[992px]:w-full max-[992px]:py-[10px]">
                                <a href="javascript:void(0)"
                                    className="navbar-toggler py-[7px] px-[14px] hidden text-[16px] leading-[1] max-[992px]:flex max-[992px]:p-[0] max-[992px]:border-[0]">
                                    <i className="ri-menu-3-line max-[992px]:text-[20px]"></i>
                                </a>
                                <div className="cr-header-buttons hidden max-[992px]:flex max-[992px]:items-center">
                                    <ul
                                        className="navbar-nav relative z-[3] m-auto max-[1200px]:mr-[-5px] max-[992px]:m-[0] flex flex-col">
                                        <li className="nav-item dropdown relative">
                                            <a className="nav-link py-[11px] px-[8px] text-[14px] font-medium text-[#000] z-[1] relative max-[1200px]:py-[8px] max-[1200px]:px-[0] max-[992px]:mr-[20px]"
                                                href="javascript:void(0)">
                                                <i className="ri-user-3-line text-[20px]"></i>
                                            </a>
                                            <ul
                                                className="dropdown-menu transition-all duration-[0.3s] ease-in-out py-[8px] min-w-[160px] mt-[35px] absolute text-left opacity-0 invisible left-auto right-0 bg-[#fff] rounded-[5px] block z-[9] border-[1px] border-solid border-[#e9e9e9]">

                                                <li className="w-full">
                                                    <a className="dropdown-item transition-all duration-[0.3s] ease-in-out w-full block py-[7px] px-[20px] bg-[#fff] relative capitalize text-[13px] text-[#777]"
                                                        href="checkout.html">Checkout</a>
                                                </li>
                                                <li className="w-full">
                                                    <a className="dropdown-item transition-all duration-[0.3s] ease-in-out w-full block py-[7px] px-[20px] bg-[#fff] relative capitalize text-[13px] text-[#777]"
                                                        href="login.html">Login</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <a href="wishlist.html"
                                        className="cr-right-bar-item transition-all duration-[0.3s] ease-in-out mr-[16px] max-[992px]:mr-[20px]">
                                        <i className="ri-heart-line text-[20px]"></i>
                                    </a>
                                    <a href="javascript:void(0)"
                                        className="cr-right-bar-item Shopping-toggle transition-all duration-[0.3s] ease-in-out mr-[16px] max-[992px]:m-[0]">
                                        <i className="ri-shopping-cart-line text-[20px]"></i>
                                    </a>
                                </div>
                                <div className="min-[992px]:flex min-[992px]:basis-auto grow-[1] items-center hidden"
                                    id="navbarSupportedContent">
                                    <ul
                                        className="navbar-nav flex min-[992px]:flex-row items-center m-auto relative z-[3] min-[992px]:flex-row max-[1200px]:mr-[-5px] max-[992px]:m-[0]">

                                        {
                                            items.map((element, index) => {

                                                return <li
                                                    className="nav-item dropdown relative mr-[25px] max-[1400px]:mr-[20px] max-[1200px]:mr-[30px]">
                                                    <a className="nav-link dropdown-toggle font-Poppins text-[14px] font-medium block text-[#000] z-[1] flex items-center relative py-[11px] px-[8px] max-[1200px]:py-[8px] max-[1200px]:px-[0]"
                                                        href="javascript:void(0)">
                                                        {element.item}
                                                    </a>
                                                    {
                                                        element?.child.length > 0 ?
                                                            <ul
                                                                className="dropdown-menu transition-all duration-[0.3s] ease-in-out py-[8px] min-w-[160px] mt-[35px] absolute text-left opacity-0 invisible left-auto bg-[#fff] rounded-[5px] block z-[9] border-[1px] border-solid border-[#e9e9e9]">
                                                                {element.child.map((childElement, childIndex) => {


                                                               return  <li className="w-full mr-[0]">
                                                                        <a className="dropdown-item transition-all duration-[0.3s] ease-in-out font-Poppins py-[7px] px-[20px] bg-[#fff] relative capitalize text-[13px] text-[#777] hover:text-[#64b496] whitespace-nowrap tracking-[0.03rem] block w-full"
                                                                            href="shop-left-sidebar.html">{childElement.item}</a>
                                                                    </li>
                                                                })}
                                                            </ul>
                                                            : ''
                                                    }
                                                </li>
                                            })
                                        }





                                    </ul>
                                </div>
                            </nav>
                            <div className="cr-calling flex justify-end items-center max-[1200px]:hidden">
                                <i className="ri-phone-line pr-[5px] text-[20px]"></i>
                                <a href="javascript:void(0)" className="text-[15px] font-medium font-Manrope">+123 ( 456 ) ( 7890 )</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>


        </>
    )
}
export default Header;