import { createContext, useState } from "react";

export const LoginModalContext = createContext();

export  function LoginModalContextProvider({children}) {
    const [isOpen,setIsOpen] = useState(false)
    const openModal = () => {
        setIsOpen(true)
    }
    const closeModal = () => {
        setIsOpen(false)
    }

    return (<LoginModalContext.Provider value={{isOpen,openModal,closeModal}}>{children}</LoginModalContext.Provider>)
}