import React from 'react';
import useAuth from '../hooks/useAuth';
import useRole from '../hooks/useRole';
import { Link } from 'react-router';

const AdminRoute = ({children}) => {

    const { user, loading } = useAuth();
    const { role , roleLoading} = useRole();

    if(loading || roleLoading){

        return <div className='flex'>
            <span className="loading loading-infinity loading-xl bg-red-500 mx-auto"></span>
        </div>
    }

    if(role !== 'admin'){
        return <div className='flex flex-col justify-center items-center h-screen'>
            <p className='text-3xl font-bold mb-3 text-red-500'> Access is Forbidden</p>
           <div>
             <Link to="/" className='btn mr-4 bg-cyan-300 hover:bg-cyan-200'>Back to Home</Link>
             <Link to="/dashboard" className='btn bg-lime-300 hover:bg-lime-400'>Back to DashBoard</Link>
           </div>
        </div>
    }

    return children;
};

export default AdminRoute;