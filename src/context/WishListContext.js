import react, { createContext, useEffect, useState } from 'react'
import ToastService from './../utility/ToastService';

export const WishListContext = createContext();

export  function WishListContextProvider({children}) {
    const [wishListItems,setWishListItems] = useState(()=>{
        const storedItems = localStorage.getItem('wishListItems')
        return storedItems ? JSON.parse(storedItems) : []
    });
    const [currentProductStatus,setCurrentProductStatus] = useState(null)
    useEffect(()=>{
      if(currentProductStatus && Object.prototype.hasOwnProperty.call(currentProductStatus,'wished')) {
        if(currentProductStatus.wished) {
            ToastService.custom('Add product in Wishlist Successfully!', { autoClose: 5000 });
            return;
        }
        ToastService.custom('Removed product from Wishlist Successfully!', { autoClose: 5000 })
      }
    },[currentProductStatus])
    
    useEffect(()=>{
        localStorage.setItem('wishListItems',JSON.stringify(wishListItems))
    },[wishListItems]);

    const toggleWishList = (product) => {
        setWishListItems((prevItems)=>{
            const exist = prevItems.find((items)=>items.id === product.id);
            /** due to toggle if product exist then we are removing from wishlist */
            setCurrentProductStatus({...product,wished: exist ? false : true});
            return exist ? prevItems.filter((existingItem)=> existingItem.id !== product.id) : [...prevItems,product]
        })
    }

    const isWished = (productId) => {
        if(productId)
       return wishListItems.some((item) => item.id === productId);
    }
    return <WishListContext.Provider value={{toggleWishList,isWished,wishListItems}}>{children}</WishListContext.Provider>
}