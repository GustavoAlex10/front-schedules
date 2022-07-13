import React from 'react';
import { Navigate, Outlet } from "react-router-dom"


export const useAuth = () => {

    //   const user = useContext(AuthenticationContext);
    const user = false;
    return user;
}



const ProtectedRoutes = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Navigate to="/404" />;
}


export default ProtectedRoutes;