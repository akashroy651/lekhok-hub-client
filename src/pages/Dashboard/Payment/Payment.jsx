import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const Payment = () => {


    const { contestId } = useParams();
    const axiosSecure = useAxiosSecure();


    const { isLoading, data: contest } = useQuery({
        queryKey: ['contest', contestId],
        queryFn: async () => {
            const res = await axiosSecure.get(`/contests/${contestId}`);
            return res.data;
        } 
    })

    const handlePayment = async ()=>{
      const  paymentInfo = {
            entryFee:contest.entryFee,
            contestId: contest._id,
            creatorEmail:contest.creatorEmail,
            contestTitle: contest.title,
        }

        const res = await axiosSecure.post('/create-checkout-session', paymentInfo)
        console.log(res.data)
        // window.location.href= res.data.url;
    }

    if(isLoading){
      return  <div className='flex'>
            <span className="loading loading-infinity loading-xl bg-red-500 mx-auto"></span>
        </div>
    }

    return (
        <div>
            <h2>please pay tk:{contest.entryFee} : {contest.title}</h2>
            <button onClick={handlePayment} className='btn btn-primary text-black'>Pay</button>
        </div>
    );
};

export default Payment;