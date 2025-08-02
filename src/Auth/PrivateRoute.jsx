import { useContext } from 'react';
import {loginContext} from '../context/LoginContext';
import { Navigate } from 'react-router-dom';
export default function PrivateRoute({children}) {

    const {user} = useContext(loginContext)
    
    return (user?.id ? <>{children}</> : <Navigate to={"/"}/>)
}