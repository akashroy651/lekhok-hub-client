import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const MyContest = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data: contest = []} = useQuery({
        queryKey:['myContest', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/contest?email=${user.email}`)
            return res.data;
        }
    })

    return (
        <div>
            <h2>All of my contest: {contest.length}</h2>
        </div>
    );
};

export default MyContest;