import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const ContestWinner = () => {

    const axiosSecure = useAxiosSecure();

    const {} = useQuery({
        queryKey: ['participants'],
        queryFn: async () => {
            const res = await axiosSecure.get("/participants")
        }
    })

    return (
        <div>
            <h2>hi ContestWinner</h2>
        </div>
    );
};

export default ContestWinner;