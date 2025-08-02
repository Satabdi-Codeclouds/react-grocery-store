import react, { createContext, useEffect, useState } from "react";

export const loginContext = createContext();

export const LoginContextProvider = ({children}) => {

  
    const [user, setUser] = useState(()=>{
        const storedUser = localStorage.getItem('user')
        return storedUser ? JSON.parse(storedUser) : null;
    });
    const [loading, setLoading] = useState(false);
    const [apiError, setApiError] = useState(null);

      useEffect(()=>{
        localStorage.setItem('user',JSON.stringify(user))
    },[user])


    const login = async (payload) => {
        try {
            setApiError(null)
            setLoading(true)
            const response = await fetch(`/assets/data/user-details.json`)
            if (!response.ok) {
                throw new Error('Something went wrong')
            }
            const result = await response.json();
            if (result.length > 0) {
                let foundUserObj = null;
                result.forEach(userObj => {
                    if ((userObj.userName === payload.userName ||
                        userObj.email === payload.userName) && (
                            userObj.password === btoa(payload.password)
                        )
                    ) {
                        foundUserObj = userObj
                    }
                });
                if (!foundUserObj) {
                    setApiError('Invalid credentials!')
                    return {success:false,user:null}
                }
                const rspUser = {
                    id: foundUserObj.id,
                    email:foundUserObj.email,
                    name:foundUserObj.name,
                    userName:foundUserObj.userName
                } 
                setUser(rspUser)
                return {success:true, user: {...rspUser}}
            }


        } catch (err) {
            setApiError(err.message || 'Something went wrong');
        } finally {
            setLoading(false)
        }
    }

    const logout = () => {
        setUser(null)
    }

    return (<loginContext.Provider value={{login,logout,user,apiError,loading}}>{children}</loginContext.Provider>)
}