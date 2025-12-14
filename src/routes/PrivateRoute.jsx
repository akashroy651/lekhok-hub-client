import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {

    const {user, loading} =useAuth();
    const location = useLocation();


    if(loading){
        return <div className='flex'>
            <span className="loading loading-infinity loading-xl bg-red-500 mx-auto"></span>
        </div>
    }
    if(!user){
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }

    return children;
};

export default PrivateRoute;