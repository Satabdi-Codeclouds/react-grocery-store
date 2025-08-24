import react,{useState,useContext} from 'react'
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import ProductDetailsZoomSlider from './ProductDetailsZoomSlider'
import { CartContext } from "../../context/CartContext";
import Rating from './Rating';

export default function QuickViewProduct({ isOpen, onClose, product, category }) {

  const { addToCart } = useContext(CartContext);
  const handleQuantiy = (quantity,increase) => {
        if(increase)
            setQuantity((prevQty)=> prevQty+1)
        else {
            if(quantity > 1) setQuantity((prevQty)=> prevQty-1)
        }
    }
const [quantity,setQuantity] = useState(1);

  return (
    <Modal open={isOpen} onClose={onClose}>
      <div className="flex flex-wrap w-full mb-[-24px] aos-init aos-animate" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="600">
        <div className="min-[768px]:w-[50%] w-full px-[12px] mb-[24px]">
          <div className="vehicle-detail-banner banner-content clearfix h-full">
            <div className="banner-slider sticky top-[30px]">
              <ProductDetailsZoomSlider pructItem={product}/>
            </div>
          </div>
        </div>
        <div className="min-[768px]:w-[50%] w-full px-[12px] mb-[24px]">
          <div className="cr-size-and-weight-contain border-b-[1px] border-solid border-[#e9e9e9] pb-[20px] max-[768px]:mt-[24px]">
            <h2 className="heading mb-[15px] block text-[#2b2b2d] text-[22px] leading-[1.5] font-medium max-[1400px]:text-[26px] max-[992px]:text-[20px]">{product?.name}</h2>
            <p className="mb-[0] text-[14px] font-Poppins text-[#7a7a7a] leading-[1.75]">{product.description}</p>
          </div>
          <div className="cr-size-and-weight pt-[20px]">
            <div className="cr-review-star flex">
              <div className="cr-star mr-[10px]">
                {/* <i className="ri-star-fill text-[16px] text-[#f5885f]"></i>
                <i className="ri-star-fill text-[16px] text-[#f5885f]"></i>
                <i className="ri-star-fill text-[16px] text-[#f5885f]"></i>
                <i className="ri-star-fill text-[16px] text-[#f5885f]"></i>
                <i className="ri-star-fill text-[16px] text-[#f5885f]"></i> */}
                <Rating ratingScore={product.rating} />
              </div>
              <p className="mb-[0] text-[15px] font-Poppins text-[#7a7a7a] leading-[1.75] max-[380px]:hidden">( 75 Review )</p>
            </div>

            <div className="cr-product-price pt-[20px]">
              <span className="new-price font-Poppins text-[24px] font-semibold leading-[1.167] text-[#64b496] max-[768px]:text-[22px] max-[576px]:text-[20px]">${product.price}</span>
              <span className="old-price font-Poppins text-[16px] line-through leading-[1.75] text-[#7a7a7a]">${product.actualPrice}</span>
            </div>

            <div className="cr-add-card flex pt-[20px]">
              <div className="cr-qty-main h-full flex relative">
                <input readOnly type="text" placeholder="." value={quantity} minlength="1" maxlength="20" className="quantity h-[40px] w-[40px] mr-[5px] text-center border-[1px] border-solid border-[#e9e9e9] rounded-[5px]" />
                <button onClick={() => handleQuantiy(quantity, true)} type="button" className="plus w-[18px] h-[18px] p-[0] bg-[#fff] border-[1px] border-solid border-[#e9e9e9] rounded-[5px] leading-[0]">+</button>
                <button disabled={quantity === 1 ? true : false} onClick={() => handleQuantiy(quantity, false)} type="button" className="minus w-[18px] h-[18px] p-[0] bg-[#fff] border-[1px] border-solid border-[#e9e9e9] rounded-[5px] leading-[0] absolute bottom-[0] right-[0]">-</button>
              </div>
              <div className="cr-add-button ml-[15px] max-[380px]:hidden">
                <button onClick={(e) => { return addToCart(product, quantity) }} type="button" className="cr-button cr-shopping-bag font-bold h-[40px] transition-all duration-[0.3s] ease-in-out py-[8px] px-[22px] text-[14px] font-Manrope capitalize leading-[1.2] bg-[#64b496] text-[#fff] border-[1px] border-solid border-[#64b496] rounded-[5px] flex items-center justify-center hover:bg-[#000] hover:border-[#000] max-[1200px]:py-[8px] max-[1200px]:px-[15px]">Add to cart</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}