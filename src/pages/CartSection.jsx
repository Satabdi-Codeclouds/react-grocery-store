import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import PopularProducts from "../components/products/PopularProducts";
import { Link } from "react-router-dom"

export default function CartSection() {
  const { cartItems, rempoveFromCart, clearCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
  const [totalUnitPrice,setTotalUnitPrice] = useState(0.00);
  useEffect(() => {
    let totalPrice = 0;
    cartItems.forEach(element => {
      totalPrice+=element.price
    });
    setTotalUnitPrice(totalPrice);
  }, [cartItems])
  return (
    <>
      <section className="section-cart pt-[100px] max-[1200px]:pt-[70px]">
        <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1600px]:max-w-[1500px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
          {/* Title and description section, currently hidden */}
          <div className="flex flex-wrap w-full hidden">
            <div className="w-full px-[12px]">
              <div
                className="mb-[30px]"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="400"
              >
                <div className="cr-banner mb-[15px] text-center">
                  <h2 className="font-Manrope text-[32px] font-bold leading-[1.2] text-[#2b2b2d] max-[1200px]:text-[28px] max-[992px]:text-[25px] max-[768px]:text-[22px]">
                    Cart
                  </h2>
                </div>
                <div className="cr-banner-sub-title w-full">
                  <p className="max-w-[600px] m-auto font-Poppins text-[14px] text-[#212529] leading-[22px] text-center max-[1200px]:w-[80%] max-[992px]:w-full">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore lacus vel facilisis.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Cart Table */}
          <div className="flex flex-wrap w-full">
            <div className="w-full px-[12px]">
              <div
                className="cr-cart-content max-[768px]:overflow-x-scroll"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="400"
              >
                <div className="flex flex-wrap w-full max-[768px]:w-[700px]">
                  <form action="#" className="w-full">
                    {cartItems?.length > 0 ?
                      <div className="cr-table-content max-h-[500px] overflow-y-auto">
                        <table className="w-full border-[1px] border-solid border-[#e9e9e9] rounded-[5px] min-w-full border-collapse">
                          <thead className="bg-gray-100 sticky top-0 z-10">
                            <tr className="border-[1px] border-solid border-[#e9e9e9]">
                              {["Product", "Price", "Quantity", "Total", "Action"].map((heading, idx) => (
                                <th
                                  key={idx}
                                  className={`p-[15px] text-[#444] text-[15px] font-semibold capitalize align-middle whitespace-nowrap leading-[1] tracking-[0] bg-[#e9e9e9] ${heading === "Quantity" ? "text-center" : "text-left"
                                    }`}
                                >
                                  {heading}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {cartItems.map((item, index) => (
                              <tr key={index} className="border-b-[1px] border-solid border-[#e9e9e9]">
                                <td className="cr-cart-name w-[40%] py-[25px] px-[14px] text-[#444] text-[16px] text-left bg-[#f7f7f8]">
                                  <a
                                    href="#"
                                    className="text-[#444] font-medium text-[14px] flex leading-[1.5] tracking-[0.6px] items-center"
                                  >
                                    <img
                                      src={"assets/images/1.jpg"}
                                      alt={item.name}
                                      className="cr-cart-img mr-[20px] w-[60px] border-[1px] border-solid border-[#e9e9e9] rounded-[5px]"
                                    />
                                    {item.name}
                                  </a>
                                </td>
                                <td className="cr-cart-price py-[25px] px-[14px] text-[#555] text-[15px] font-medium text-left bg-[#f7f7f8]">
                                  <span className="amount">${item.price.toFixed(2)}</span>
                                </td>
                                <td className="cr-cart-qty py-[25px] px-[14px] text-[#444] text-[16px] text-left bg-[#f7f7f8]">
                                  <div className="cart-qty-plus-minus w-[80px] h-[30px] mx-auto relative overflow-hidden flex bg-[#fff] border-[1px] border-solid border-[#e9e9e9] rounded-[5px] items-center justify-between">
                                    <button
                                      onClick={(e) => increaseQuantity(item.id)}
                                      type="button" className="plus h-[25px] w-[25px] -mt-[2px] border-0 bg-transparent flex justify-center items-center">+</button>
                                    <input
                                      type="text"
                                      placeholder="."
                                      // defaultValue={item.quantity}
                                      value={item.quantity}
                                      minLength={1}
                                      maxLength={20}
                                      className="quantity w-[30px] m-0 p-0 text-[#444] float-left text-[14px] font-semibold leading-[38px] h-auto text-center outline-0"
                                    />
                                    <button
                                      onClick={(e) => decreaseQuantity(item.id)}
                                      type="button" className="minus h-[25px] w-[25px] -mt-[2px] border-0 bg-transparent flex justify-center items-center">-</button>
                                  </div>
                                </td>
                                <td className="cr-cart-subtotal py-[25px] px-[14px] text-[#555] font-medium text-[15px] text-left bg-[#f7f7f8]">
                                  ${(parseFloat(item.price) * parseInt(item.quantity)).toFixed(2)}
                                </td>
                                <td className="cr-cart-remove py-[25px] px-[14px] w-[90px] text-[#555] font-medium text-[15px] text-right bg-[#f7f7f8]">
                                  <button
                                    type="button"
                                    onClick={(e) => { e.stopPropagation(); return rempoveFromCart(item.id) }}
                                    className="transition-all duration-[0.3s] ease-in-out mx-auto text-[#555] hover:text-[#fb5555]"
                                  >
                                    <i className="ri-delete-bin-line text-[22px]" />
                                  </button>
                                </td>
                              </tr>
                            ))}
                            <tr>
                              <td colSpan={5} className="cr-cart-name w-[40%] py-[25px] px-[14px] text-[#444] text-[16px] text-right">
                                <strong>Subtotal ({cartItems.length} items): ₹{totalUnitPrice.toFixed(2)}</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      : <div className="p-[25px] border-[1px] border-[solid] border-[#e0e0e0] rounded-[12px] overflow-hidden [box-shadow:0_2px_8px_rgba(0,0,0,0.05)] [transition:transform_0.2s_ease] bg-[#fff]">
                        <h3>Your Cart is empty</h3>
                      </div>}
                    {/* Cart Bottom Section */}
                    <div className="flex flex-wrap w-full">
                      <div className="w-full">
                        <div className="cr-cart-update-bottom pt-[30px] flex justify-between">
                          <Link
                            to={'/products'}
                            className="cr-button h-[40px] font-bold transition-all duration-[0.3s] ease-in-out py-[8px] px-[22px] text-[14px] font-Manrope capitalize leading-[1.2] bg-[#64b496] text-white border border-solid border-[#64b496] rounded-[5px] flex items-center justify-center hover:bg-black hover:border-black"
                          >
                            Continue Shopping
                          </Link>
                          {cartItems?.length > 0 ?
                            <Link
                              to={'/checkout'}
                              className="cr-button h-[40px] font-bold transition-all duration-[0.3s] ease-in-out py-[8px] px-[22px] text-[14px] font-Manrope capitalize leading-[1.2] bg-[#64b496] text-white border border-solid border-[#64b496] rounded-[5px] flex items-center justify-center hover:bg-black hover:border-black"
                            >
                              Check Out
                            </Link>
                            : ''}
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PopularProducts />
    </>
  );
};

