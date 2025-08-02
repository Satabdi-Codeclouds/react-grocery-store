import React, { useContext, useEffect, useState } from "react";
import { CartContext } from '../context/CartContext';
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { loginContext } from "../context/LoginContext";
import { LoginModalContext } from "../context/LoginModalContext";
import CountryStateCity from '../Loccation-list.json';
import Message from '../utility/message.json';

const CheckoutSection = () => {
    const { cartItems, clearCart } = useContext(CartContext)
    const { user } = useContext(loginContext);
    const { openModal, closeModal } = useContext(LoginModalContext);
    const navigate = useNavigate();
    const [totalUnitPrice, setTotalUnitPrice] = useState(0.00);
    const [locationList, setLocationList] = useState(() => { return CountryStateCity.countries })
    const [billingSameAsShipping, setBillingSameAsShipping] = useState('yes');
    const [selectedPaymentMethod,setSelectedPaymentMethod] = useState("upi")

    useEffect(() => {
        if (cartItems.length <= 0) {
            navigate('/my-cart', { replace: true })
            return;
        }
        let totalPrice = 0;
        cartItems.forEach(element => {
            totalPrice += element.price
        });
        setTotalUnitPrice(totalPrice);
    }, [cartItems])
    const deliverycharges = 5.00
    // const {path} = useLocation();
    //   useEffect(()=>{
    //     if(!user?.id) <Navigate
    //   },[user])



    const [billingFormData, setBillingFormData] = useState({
        firstname: '',
        lastname: '',
        address: '',
        country: '',
        state: '',
        city: '',
        postalCode: '',
    });

    const [shippingFormData, setshippingFormData] = useState({
        firstname: '',
        lastname: '',
        address: '',
        country: '',
        state: '',
        city: '',
        postalCode: '',
    });

    const [stateList, setStateList] = useState([])
    const [cityList, setCityList] = useState([])

    const [shippingStateList, setshippingStateList] = useState([])
    const [shippingCityList, setshippingCityList] = useState([])


    useEffect(() => {

        if (billingFormData.country) {
            const selectedCountryObj = locationList.filter((element) => element.name === billingFormData.country);
            setStateList(selectedCountryObj[0]?.states ?? [])
            setBillingFormData((prevFormData) => {
                return { ...prevFormData, state: '', city: '' }
            })
        }

    }, [billingFormData.country])

    useEffect(() => {
        if (billingFormData.state && stateList.length > 0) {
            const selectedStateObj = stateList.filter((element) => element.name === billingFormData.state);
            setCityList(selectedStateObj[0]?.city ?? [])
            setBillingFormData((prevFormData) => {
                return { ...prevFormData, city: '' }
            })
        }
    }, [billingFormData.state])

    useEffect(() => {

        if (shippingFormData.country) {
            const selectedCountryObj = locationList.filter((element) => element.name === shippingFormData.country);
            setshippingStateList(selectedCountryObj[0]?.states ?? [])
            setshippingFormData((prevFormData) => {
                return { ...prevFormData, state: '', city: '' }
            })
        }

    }, [shippingFormData.country])

    useEffect(() => {
        if (shippingFormData.state && shippingStateList.length > 0) {
            const selectedStateObj = shippingStateList.filter((element) => element.name === shippingFormData.state);
            setshippingCityList(selectedStateObj[0]?.city ?? [])
            setshippingFormData((prevFormData) => {
                return { ...prevFormData, city: '' }
            })
        }
    }, [shippingFormData.state])

    const [billingFormErrors, setBillingFormErrors] = useState({});
    const [shippingFormErrors, setShippingFormErrors] = useState({});

    const validateBillingForm = () => {
        const billingErrors = {}
        Object.keys(billingFormData).forEach((field) => {
            if (!billingFormData[field]) {
                billingErrors[field] = Message.validation[field] ? Message.validation[field] : `This field cannot be blank!`;
            }
        })
        return billingErrors;
    }

    const validateShippingForm = () => {
        const shippingErrors = {}
        Object.keys(shippingFormData).forEach((field) => {
            if (!shippingFormData[field]) {
                shippingErrors[field] = Message.validation[field] ? Message.validation[field] : `This field cannot be blank!`;
            }
        })
        return shippingErrors;
    }

    const handleSubmit = (event) => {
        event.stopPropagation();
        let noError = true;
        const billingFormValidationError = validateBillingForm();
        if (Object.keys(billingFormValidationError).length > 0) {
            setBillingFormErrors(billingFormValidationError);
            noError = false;
        }
        if (billingSameAsShipping === "no") {
            const shippingFormValidationError = validateShippingForm();
            if (Object.keys(shippingFormValidationError).length > 0) {
                setShippingFormErrors(shippingFormValidationError);
                noError = false;
            }
        }
        return noError;
    }

    const handleOrder = (event) => {
        if (!user?.id) {
            openModal();
            return;
        }
        if (!handleSubmit(event)) {
            return false;
        }
        navigate('/track-order', { replace: true })
        return;
    }

    const handChange = (event) => {
        const fld = event.target.name;
        const fldValue = event.target.value;
        setBillingFormData((prevFormData) => {
            return { ...prevFormData, [fld]: fldValue }
        })
        if (fldValue && Object.prototype.hasOwnProperty.call(billingFormErrors, fld)) {
            setBillingFormErrors((prevErrors) => {
                delete prevErrors[fld]
                return { ...prevErrors };
            })
        }
    }

    const handShippingFormChange = (event) => {
        const fld = event.target.name;
        const fldValue = event.target.value;
        setshippingFormData((prevFormData) => {
            return { ...prevFormData, [fld]: fldValue }
        })
        if (fldValue && Object.prototype.hasOwnProperty.call(shippingFormErrors, fld)) {
            setShippingFormErrors((prevErrors) => {
                delete prevErrors[fld]
                return { ...prevErrors };
            })
        }
    }

    const billingSameAsShippingHandler = (event) => {
        setBillingSameAsShipping(event.target.value)
         setShippingFormErrors({})
    }

    const handlePayementMethod = (event) => {
        setSelectedPaymentMethod(event.target.value)
    }


    return (
        <section className="cr-checkout-section py-[100px] max-[1200px]:py-[70px]">
            <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1600px]:max-w-[1500px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                <div className="flex flex-wrap w-full mb-[-24px]">
                    <div className="cr-checkout-rightside min-[992px]:w-[33.33%] min-[768px]:w-full w-full px-[12px] mb-[24px]">
                        <div className="cr-sidebar-wrap border-[1px] border-solid border-[#e9e9e9] mb-[30px] p-[15px] bg-[#fff] rounded-[5px]">
                            <div className="cr-sidebar-block">
                                <div className="cr-sb-title">
                                    <h3 className="cr-sidebar-title text-[20px] font-semibold tracking-[0] mb-[0] relative text-[#000] leading-[1.2]">Summary</h3>
                                </div>
                                <div className="cr-sb-block-content mb-[0] mt-[15px]">
                                    <div className="cr-checkout-summary">
                                        <div className="flex justify-between items-center mb-[10px]">
                                            <span className="text-left text-[#7a7a7a] text-[14px] leading-[24px] tracking-[0]">Sub-Total</span>
                                            <span className="text-right text-[#000] text-[15px] leading-[24px] font-medium">${totalUnitPrice.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between items-center mb-[10px]">
                                            <span className="text-left text-[#7a7a7a] text-[14px] leading-[24px] tracking-[0]">Delivery Charges</span>
                                            <span className="text-right text-[#000] text-[15px] leading-[24px] font-medium">${deliverycharges.toFixed(2)}</span>
                                        </div>
                                        <div className="cr-checkout-summary-total flex justify-between items-center mb-[0] border-t-[1px] border-solid border-[#e9e9e9] pt-[19px] mt-[16px]">
                                            <span className="text-left font-Manrope text-[16px] font-semibold text-[#2b2b2d] leading-[24px] tracking-[0]">Total Amount</span>
                                            <span className="text-right font-Manrope text-[16px] font-semibold text-[#2b2b2d] leading-[24px] tracking-[0]">${(totalUnitPrice + deliverycharges).toFixed(2)}</span>
                                        </div>
                                    </div>
                                    <div className="cr-checkout-pro mt-[34px]">
                                        {cartItems.length > 0 ? cartItems.map((product) => {

                                            return <div className="w-full mb-[15px]">
                                                <div className="cr-product-inner flex flex-row items-center">
                                                    <div className="cr-pro-image-outer w-[80px] mr-[15px]">
                                                        <div className="cr-pro-image overflow-hidden">
                                                            <a href="product-left-sidebar.html" className="image">
                                                                <img className="main-image" src="assets/images/10.jpg" alt="Product w-full" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="cr-pro-content cr-product-details justify-start w-[calc(100%-143px)] p-[0] flex flex-col border-[0]">
                                                        <h5 className="cr-pro-title text-left mb-[.5rem] pr-[15px] text-[15px] leading-[1.2] max-[1200px]:mb-[0]">
                                                            <a href="product-left-sidebar.html" className="text-[15px] text-[#000] font-medium leading-[1.2]">{product?.name}</a>
                                                        </h5>
                                                        <div className="cr-pro-rating mb-[5px] text-left">
                                                            <i className="ri-star-fill text-[14px] text-[#f4a263]"></i>
                                                            <i className="ri-star-fill text-[14px] text-[#f4a263]"></i>
                                                            <i className="ri-star-fill text-[14px] text-[#f4a263]"></i>
                                                            <i className="ri-star-fill text-[14px] text-[#f4a263]"></i>
                                                            <i className="ri-star-line text-[14px] text-[#f4a263]"></i>
                                                        </div>
                                                        <p className="cr-price font-Poppins text-[16px] leading-[1.75] text-[#7a7a7a] text-left max-[1200px]:text-[14px]">
                                                            <span className="new-price text-[#64b496] font-bold">${product?.price}</span>
                                                            <span className="old-price ml-[5px] text-[13px] line-through max-[1200px]:text-[12px]">$123.25</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                        }) : ''}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="cr-sidebar-wrap cr-checkout-pay-wrap border-[1px] border-solid border-[#e9e9e9] mb-[30px] p-[15px] bg-[#fff] rounded-[5px]">
                            <div className="cr-sidebar-block">
                                <div className="cr-sb-title">
                                    <h3 className="cr-sidebar-title text-[20px] font-semibold tracking-[0] mb-[0] relative text-[#000] leading-[1.2]">Payment Method</h3>
                                </div>
                                <div className="cr-sb-block-content mb-[0] mt-[15px]">
                                    <div className="cr-checkout-pay">
                                        <div className="cr-pay-desc text-[#7a7a7a] text-[14px] font-light leading-[24px] mb-[15px] block tracking-[0]">Please select the preferred payment method to use on this order.</div>
                                        <form action="#" className="payment-options flex flex-col">
                                            <span className="cr-pay-option mb-[10px]">
                                                <span>
                                                    <input onChange={handlePayementMethod} type="radio" id="pay1" name="paymentMethod" value="cashOnDelivery" checked={selectedPaymentMethod === "cashOnDelivery"} />
                                                    <label for="pay1" className="mb-[0] relative pl-[26px] cursor-pointer leading-[16px] inline-block text-[#7a7a7a] tracking-[0] text-[14px]">Cash On Delivery</label>
                                                </span>
                                            </span>
                                            <span className="cr-pay-option mb-[10px]">
                                                <span>
                                                    <input onChange={handlePayementMethod}  type="radio" id="pay2" name="paymentMethod" value="upi" checked={selectedPaymentMethod === "upi"} />
                                                    <label for="pay2" className="mb-[0] relative pl-[26px] cursor-pointer leading-[16px] inline-block text-[#7a7a7a] tracking-[0] text-[14px]">UPI</label>
                                                </span>
                                            </span>
                                            <span className="cr-pay-option">
                                                <span>
                                                    <input onChange={handlePayementMethod}  type="radio" id="pay3" name="paymentMethod" value="bankTransfer" checked={selectedPaymentMethod === "bankTransfer"} />
                                                    <label for="pay3" className="mb-[0] relative pl-[26px] cursor-pointer leading-[16px] inline-block text-[#7a7a7a] tracking-[0] text-[14px]">Bank Transfer</label>
                                                </span>
                                            </span>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cr-sidebar-wrap cr-check-pay-img-wrap border-[1px] border-solid border-[#e9e9e9] mb-[0] p-[15px] bg-[#fff] rounded-[5px]">
                            <div className="cr-sidebar-block">
                                <div className="cr-sb-title text-[20px] font-semibold tracking-[0] mb-[0] relative text-[#000] leading-[1.2]">
                                    <h3 className="cr-sidebar-title">Payment Method</h3>
                                </div>
                                <div className="cr-sb-block-content mb-[0] mt-[15px]">
                                    <div className="cr-check-pay-img-inner flex justify-between w-full flex-wrap">
                                        <div className="cr-check-pay-img">
                                            <img src="assets/images/payment.png" alt="payment" className="w-full" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cr-checkout-leftside min-[992px]:w-[66.66%] min-[768px]:w-full w-full px-[12px] mb-[24px]">
                        <div className="cr-checkout-content">
                            <div className="cr-checkout-inner">

                                <div className="cr-checkout-wrap p-[24px] border-[1px] border-solid border-[#e9e9e9] bg-[#fff] rounded-[5px]">
                                    <div className="cr-checkout-block cr-check-bill">
                                        <h3 className="cr-checkout-title text-[20px] font-semibold tracking-[0] mb-[26px] relative block text-[#2b2b2d] text-manrope leading-[1.2] max-[576px]:text-[18px]">Billing Details</h3>
                                        <div className="cr-bl-block-content">
                                            <div className="cr-check-subtitle mb-[10px] text-[#2b2b2d] text-[15px] font-medium tracking-[0] leading-[1]">Billing Address same as shipping</div>
                                            <span className="cr-bill-option mb-[24px] block">
                                                <span className="mr-[45px]">
                                                    <input onChange={billingSameAsShippingHandler} checked={billingSameAsShipping === "yes"} value={"yes"} type="radio" id="bill1" name="billingSameAsShipping" />
                                                    <label for="bill1" className="relative pl-[26px] cursor-pointer leading-[16px] text-[14px] inline-block text-[#7a7a7a] tracking-[0] mb-[15px]">yes</label>
                                                </span>
                                                <span className="mr-[45px]">
                                                    <input onChange={billingSameAsShippingHandler} checked={billingSameAsShipping === "no"} value={"no"} type="radio" id="bill2" name="billingSameAsShipping" />
                                                    <label for="bill2" className="relative pl-[26px] cursor-pointer leading-[16px] text-[14px] inline-block text-[#7a7a7a] tracking-[0] mb-[15px]">No</label>
                                                </span>
                                            </span>
                                            <div className="cr-check-bill-form mb-[-24px]">
                                                <form action="#" method="post" className="flex flex-row flex-wrap mx-[-15px]">
                                                    <span className="cr-bill-wrap cr-bill-half w-[50%] max-[576px]:w-full px-[15px]">
                                                        <label className="mb-[7px] inline-block text-[#2b2b2d] text-[15px] font-medium tracking-[0] leading-[1]">First Name*</label>
                                                        <span className="relative">
                                                            <input value={billingFormData.firstname} onChange={handChange} type="text" name="firstname" placeholder="Enter your first name" className="h-[50px] bg-transparent border-[1px] border-solid border-[#e9e9e9] text-[#2b2b2d] text-[14px] mb-[26px] px-[15px] w-full outline-[0] rounded-[5px]" required="" />
                                                            {billingFormErrors.firstname &&
                                                                <span className="absolute top-[36px] left-[0] text-[12px] text-[red] font-medium">{billingFormErrors.firstname}</span>}
                                                        </span>
                                                    </span>
                                                    <span className="cr-bill-wrap cr-bill-half w-[50%] max-[576px]:w-full px-[15px]">
                                                        <label className="mb-[7px] inline-block text-[#2b2b2d] text-[15px] font-medium tracking-[0] leading-[1]">Last Name*</label>
                                                        <span className="relative">
                                                            <input value={billingFormData.lastname} onChange={handChange} type="text" name="lastname" placeholder="Enter your last name" className="h-[50px] bg-transparent border-[1px] border-solid border-[#e9e9e9] text-[#2b2b2d] text-[14px] mb-[26px] px-[15px] w-full outline-[0] rounded-[5px]" required="" />
                                                            {billingFormErrors.lastname &&
                                                                <span className="absolute top-[36px] left-[0] text-[12px] text-[red] font-medium">{billingFormErrors.lastname}</span>}
                                                        </span>
                                                    </span>
                                                    <span className="cr-bill-wrap w-full px-[15px]">
                                                        <label className="mb-[7px] inline-block text-[#2b2b2d] text-[15px] font-medium tracking-[0] leading-[1]">Address</label>
                                                        <span className="relative">
                                                            <input value={billingFormData.address} onChange={handChange} type="text" name="address" className="h-[50px] bg-transparent border-[1px] border-solid border-[#e9e9e9] text-[#2b2b2d] text-[14px] mb-[26px] px-[15px] w-full outline-[0] rounded-[5px]" placeholder="Address Line 1" />
                                                            {billingFormErrors.address &&
                                                                <span className="absolute top-[36px] left-[0] text-[12px] text-[red] font-medium">{billingFormErrors.address}</span>}
                                                        </span>
                                                    </span>
                                                    <span className="cr-bill-wrap cr-bill-half w-[50%] max-[576px]:w-full px-[15px]">
                                                        <label className="mb-[7px] inline-block text-[#2b2b2d] text-[15px] font-medium tracking-[0] leading-[1]">Country *</label>
                                                        <span className="cr-bl-select-inner relative flex w-full h-[50px] border-[1px] border-solid border-[#e9e9e9] text-[14px] p-[0] mb-[24px] rounded-[5px]">

                                                            <select value={billingFormData.country} name="country" id="cr-select-country"
                                                                onChange={handChange} className="cr-bill-select appearance-none outline-[0] border-[0] bg-[#fff] flex-[1] px-[10px] text-[#7a7a7a] cursor-pointer rounded-[5px]"><option value="">Country</option>
                                                                {locationList?.length > 0 ?
                                                                    locationList.map((country, countryIndex) => {
                                                                        return <option key={countryIndex + '-billCtnry'} value={country.name}>{country.name}</option>

                                                                    })
                                                                    : ''}
                                                            </select>
                                                            {billingFormErrors.country &&
                                                                <span className="absolute top-[46px] left-[0] text-[12px] text-[red] font-medium">{billingFormErrors.country}</span>}
                                                        </span>
                                                    </span>
                                                    <span className="cr-bill-wrap cr-bill-half w-[50%] max-[576px]:w-full px-[15px]">
                                                        <label className="mb-[7px] inline-block text-[#2b2b2d] text-[15px] font-medium tracking-[0] leading-[1]">Region State</label>
                                                        <span className="cr-bl-select-inner relative flex w-full h-[50px] border-[1px] border-solid border-[#e9e9e9] text-[14px] p-[0] mb-[24px] rounded-[5px]">

                                                            <select value={billingFormData.state} onChange={handChange} name="state" id="cr-select-state" className="cr-bill-select appearance-none outline-[0] border-[0] bg-[#fff] flex-[1] px-[10px] text-[#7a7a7a] cursor-pointer rounded-[5px]">
                                                                <option value="">Region/State</option>
                                                                {stateList?.length > 0 ?
                                                                    stateList.map((state, stateIndex) => {
                                                                        return <option key={stateIndex + '-billSt'} value={state.name}>{state.name}</option>

                                                                    })
                                                                    : ''}

                                                            </select>
                                                            {billingFormErrors.state &&
                                                                <span className="absolute top-[46px] left-[0] text-[12px] text-[red] font-medium">{billingFormErrors.state}</span>}

                                                        </span>
                                                    </span>
                                                    <span className="cr-bill-wrap cr-bill-half w-[50%] max-[576px]:w-full px-[15px]">
                                                        <label className="mb-[7px] inline-block text-[#2b2b2d] text-[15px] font-medium tracking-[0] leading-[1]">City *</label>
                                                        <span className="cr-bl-select-inner relative flex w-full h-[50px] border-[1px] border-solid border-[#e9e9e9] text-[14px] p-[0] mb-[24px] rounded-[5px]">

                                                            <select value={billingFormData.city} onChange={handChange} name="city" id="cr-select-city" className="cr-bill-select appearance-none outline-[0] border-[0] bg-[#fff] flex-[1] px-[10px] text-[#7a7a7a] cursor-pointer rounded-[5px]">
                                                                <option >City</option>
                                                                {cityList?.length > 0 ?
                                                                    cityList.map((city, cityIndex) => {
                                                                        return <option key={cityIndex + '-billCity'} value={city.name}>{city.name}</option>

                                                                    })
                                                                    : ''}
                                                            </select>
                                                            {billingFormErrors.city &&
                                                                <span className="absolute top-[46px] left-[0] text-[12px] text-[red] font-medium">{billingFormErrors.city}</span>}
                                                        </span>
                                                    </span>
                                                    <span className="cr-bill-wrap cr-bill-half w-[50%] max-[576px]:w-full px-[15px]">
                                                        <span className="relative">
                                                            <label className="mb-[7px] inline-block text-[#2b2b2d] text-[15px] font-medium tracking-[0] leading-[1]">Post Code</label>
                                                            <input value={billingFormData.postalCode} onChange={handChange} type="text" name="postalCode" className="h-[50px] bg-transparent border-[1px] border-solid border-[#e9e9e9] text-[#2b2b2d] text-[14px] mb-[26px] px-[15px] w-full outline-[0] rounded-[5px]" placeholder="Post Code" />
                                                            {billingFormErrors.postalCode &&
                                                                <span className="absolute top-[74px] left-[0] text-[12px] text-[red] font-medium">{billingFormErrors.postalCode}</span>}
                                                        </span>
                                                    </span>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    {billingSameAsShipping === 'no' && 
                                    <div className="cr-checkout-block cr-check-bill mt-[20px]">
                                        <h3 className="cr-checkout-title text-[20px] font-semibold tracking-[0] mb-[26px] relative block text-[#2b2b2d] text-manrope leading-[1.2] max-[576px]:text-[18px]">Shipping Details</h3>
                                        <div className="cr-bl-block-content">


                                            <div className="cr-check-bill-form mb-[-24px]">
                                                <form action="#" method="post" className="flex flex-row flex-wrap mx-[-15px]">
                                                    <span className="cr-bill-wrap cr-bill-half w-[50%] max-[576px]:w-full px-[15px]">
                                                        <label className="mb-[7px] inline-block text-[#2b2b2d] text-[15px] font-medium tracking-[0] leading-[1]">First Name*</label>
                                                        <span className="relative">
                                                            <input value={shippingFormData.firstname} onChange={handShippingFormChange} type="text" name="firstname" placeholder="Enter your first name" className="h-[50px] bg-transparent border-[1px] border-solid border-[#e9e9e9] text-[#2b2b2d] text-[14px] mb-[26px] px-[15px] w-full outline-[0] rounded-[5px]" required="" />
                                                            {shippingFormErrors.firstname &&
                                                                <span className="absolute top-[36px] left-[0] text-[12px] text-[red] font-medium">{shippingFormErrors.firstname}</span>}
                                                        </span>
                                                    </span>
                                                    <span className="cr-bill-wrap cr-bill-half w-[50%] max-[576px]:w-full px-[15px]">
                                                        <label className="mb-[7px] inline-block text-[#2b2b2d] text-[15px] font-medium tracking-[0] leading-[1]">Last Name*</label>
                                                        <span className="relative">
                                                            <input value={shippingFormData.lastname} onChange={handShippingFormChange} type="text" name="lastname" placeholder="Enter your last name" className="h-[50px] bg-transparent border-[1px] border-solid border-[#e9e9e9] text-[#2b2b2d] text-[14px] mb-[26px] px-[15px] w-full outline-[0] rounded-[5px]" required="" />
                                                            {shippingFormErrors.lastname &&
                                                                <span className="absolute top-[36px] left-[0] text-[12px] text-[red] font-medium">{shippingFormErrors.lastname}</span>}
                                                        </span>
                                                    </span>
                                                    <span className="cr-bill-wrap w-full px-[15px]">
                                                        <label className="mb-[7px] inline-block text-[#2b2b2d] text-[15px] font-medium tracking-[0] leading-[1]">Address</label>
                                                        <span className="relative">
                                                            <input value={shippingFormData.address} onChange={handShippingFormChange} type="text" name="address" className="h-[50px] bg-transparent border-[1px] border-solid border-[#e9e9e9] text-[#2b2b2d] text-[14px] mb-[26px] px-[15px] w-full outline-[0] rounded-[5px]" placeholder="Address Line 1" />
                                                            {shippingFormErrors.address &&
                                                                <span className="absolute top-[36px] left-[0] text-[12px] text-[red] font-medium">{shippingFormErrors.address}</span>}
                                                        </span>
                                                    </span>
                                                    <span className="cr-bill-wrap cr-bill-half w-[50%] max-[576px]:w-full px-[15px]">
                                                        <label className="mb-[7px] inline-block text-[#2b2b2d] text-[15px] font-medium tracking-[0] leading-[1]">Country *</label>
                                                        <span className="cr-bl-select-inner relative flex w-full h-[50px] border-[1px] border-solid border-[#e9e9e9] text-[14px] p-[0] mb-[24px] rounded-[5px]">

                                                            <select value={shippingFormData.country} name="country" id="cr-select-country"
                                                                onChange={handShippingFormChange} className="cr-bill-select appearance-none outline-[0] border-[0] bg-[#fff] flex-[1] px-[10px] text-[#7a7a7a] cursor-pointer rounded-[5px]"><option value="">Country</option>
                                                                {locationList?.length > 0 ?
                                                                    locationList.map((country, countryIndex) => {
                                                                        return <option key={countryIndex + '-shpCtnry'} value={country.name}>{country.name}</option>

                                                                    })
                                                                    : ''}
                                                            </select>
                                                            {shippingFormErrors.country &&
                                                                <span className="absolute top-[46px] left-[0] text-[12px] text-[red] font-medium">{shippingFormErrors.country}</span>}
                                                        </span>
                                                    </span>
                                                    <span className="cr-bill-wrap cr-bill-half w-[50%] max-[576px]:w-full px-[15px]">
                                                        <label className="mb-[7px] inline-block text-[#2b2b2d] text-[15px] font-medium tracking-[0] leading-[1]">Region State</label>
                                                        <span className="cr-bl-select-inner relative flex w-full h-[50px] border-[1px] border-solid border-[#e9e9e9] text-[14px] p-[0] mb-[24px] rounded-[5px]">

                                                            <select value={shippingFormData.state} onChange={handShippingFormChange} name="state" id="cr-select-state" className="cr-bill-select appearance-none outline-[0] border-[0] bg-[#fff] flex-[1] px-[10px] text-[#7a7a7a] cursor-pointer rounded-[5px]">
                                                                <option value="">Region/State</option>
                                                                {shippingStateList?.length > 0 ?
                                                                    shippingStateList.map((state, stateIndex) => {
                                                                        return <option key={stateIndex + '-shpSt'} value={state.name}>{state.name}</option>

                                                                    })
                                                                    : ''}

                                                            </select>
                                                            {shippingFormErrors.state &&
                                                                <span className="absolute top-[46px] left-[0] text-[12px] text-[red] font-medium">{shippingFormErrors.state}</span>}

                                                        </span>
                                                    </span>
                                                    <span className="cr-bill-wrap cr-bill-half w-[50%] max-[576px]:w-full px-[15px]">
                                                        <label className="mb-[7px] inline-block text-[#2b2b2d] text-[15px] font-medium tracking-[0] leading-[1]">City *</label>
                                                        <span className="cr-bl-select-inner relative flex w-full h-[50px] border-[1px] border-solid border-[#e9e9e9] text-[14px] p-[0] mb-[24px] rounded-[5px]">

                                                            <select value={shippingFormData.city} onChange={handShippingFormChange} name="city" id="cr-select-city" className="cr-bill-select appearance-none outline-[0] border-[0] bg-[#fff] flex-[1] px-[10px] text-[#7a7a7a] cursor-pointer rounded-[5px]">
                                                                <option >City</option>
                                                                {shippingCityList?.length > 0 ?
                                                                    shippingCityList.map((city, cityIndex) => {
                                                                        return <option key={cityIndex + '-shpCity'} value={city.name}>{city.name}</option>

                                                                    })
                                                                    : ''}
                                                            </select>
                                                            {shippingFormErrors.city &&
                                                                <span className="absolute top-[46px] left-[0] text-[12px] text-[red] font-medium">{shippingFormErrors.city}</span>}
                                                        </span>
                                                    </span>
                                                    <span className="cr-bill-wrap cr-bill-half w-[50%] max-[576px]:w-full px-[15px]">
                                                        <span className="relative">
                                                            <label className="mb-[7px] inline-block text-[#2b2b2d] text-[15px] font-medium tracking-[0] leading-[1]">Post Code</label>
                                                            <input value={shippingFormData.postalCode} onChange={handShippingFormChange} type="text" name="postalCode" className="h-[50px] bg-transparent border-[1px] border-solid border-[#e9e9e9] text-[#2b2b2d] text-[14px] mb-[26px] px-[15px] w-full outline-[0] rounded-[5px]" placeholder="Post Code" />
                                                            {shippingFormErrors.postalCode &&
                                                                <span className="absolute top-[74px] left-[0] text-[12px] text-[red] font-medium">{shippingFormErrors.postalCode}</span>}
                                                        </span>
                                                    </span>
                                                </form>
                                            </div>
                                        </div>
                                    </div>}
                                </div>
                                <span className="cr-check-order-btn flex justify-end p-[0]">
                                    <button type="button" onClick={handleOrder} className="mt-[30px] cr-button h-[40px] font-bold transition-all duration-[0.3s] ease-in-out py-[8px] px-[22px] text-[14px] font-Manrope capitalize leading-[1.2] bg-[#64b496] text-[#fff] border-[1px] border-solid border-[#64b496] rounded-[5px] flex items-center justify-center hover:bg-[#000] hover:border-[#000]">Place Order</button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CheckoutSection;
