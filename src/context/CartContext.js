import React,{createContext,useEffect,useState} from 'react';

export const CartContext = createContext();

export function CartProvider({children}) {

    const [cartItems,setCartItems] = useState(()=>{
        const storedCartITems = localStorage.getItem('cartItems')
        return storedCartITems ? JSON.parse(storedCartITems) : [];
    });

    useEffect(()=>{
        localStorage.setItem('cartItems',JSON.stringify(cartItems))
    },[cartItems])

    const addToCart = (product,quantity=1) => {
        setCartItems((prevItems)=>{
            const existing = prevItems.find((item)=>(item.id) === (product.id));
            if(existing){
                return prevItems.map((item)=>{
                    if((item.id) === (product.id)) {
                       return {...item,quantity: item.quantity + parseInt(quantity) }
                    }
                    return item
                })
            }
            return [...prevItems,{...product,quantity:parseInt(quantity)}]
        })
    }

    const rempoveFromCart = (productId) => {
        setCartItems((prevItems) => {
            return prevItems.filter((item) => { 
                return  (item.id) !== (productId);
            })
        })
    }

    const clearCart = () => { 
        setCartItems([])
    }

    const increaseQuantity = (productId) => {
        setCartItems((prevItems)=>{
            return prevItems.map((item)=>{
                return item.id === productId ? {...item,quantity:item.quantity+1} : item
            })
        })
    }

    const decreaseQuantity = (productId) => {
        setCartItems((prevItems)=>{
            return prevItems.map((item)=>{
               return item.id === productId ? {...item,quantity:item.quantity-1} : item
            }).filter((item)=>item.quantity > 0)
        })
    }

    return (
        <CartContext.Provider value={{cartItems,addToCart,rempoveFromCart,clearCart,increaseQuantity,decreaseQuantity}}>{children}</CartContext.Provider>
    )
}