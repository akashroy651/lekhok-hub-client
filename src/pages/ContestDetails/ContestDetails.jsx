import React from 'react';

import { useQuery } from '@tanstack/react-query';

import { useParams } from 'react-router';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const ContestDetails = () => {
     const { id } = useParams(); // URL থেকে _id নেয়
  const axiosSecure = useAxiosSecure();

  const { data: contest = {} } = useQuery({
    queryKey: ['contests', id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/contests/${id}`);
      return res.data;
    }
  });
    return (
        <div>
             <h2>hello details</h2>
             <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="shadow-lg rounded-xl p-6 bg-white space-y-4">

        <h1 className="text-2xl font-bold text-center text-blue-600">
          {contest.title}
        </h1>

        <div className="space-y-3 text-gray-700">

          <p>
            <span className="font-semibold">Category:</span> {contest.category}
          </p>

          <p>
            <span className="font-semibold">Entry Fee:</span> ৳{contest.entryFee}
          </p>

          <p>
            <span className="font-semibold">Prize:</span> ৳{contest.prize}
          </p>

          <p>
            <span className="font-semibold">Start Date:</span> {contest.startDate}
          </p>

          <p>
            <span className="font-semibold">Deadline:</span> {contest.deadline}
          </p>

          <p className="text-justify leading-6">
            <span className="font-semibold">Description:</span> {contest.description}
          </p>

          <div className="border-t pt-4 text-sm text-gray-500">
            <p>
              <span className="font-semibold">Created By:</span> {contest.creatorName}
            </p>

            <p>
              <span className="font-semibold">Email:</span> {contest.creatorEmail}
            </p>
          </div>
        </div>

        <button
          disabled={contest.paymentStatus === "paid"}
          className={`w-full py-2 rounded-lg font-medium ${
            contest.paymentStatus === "paid"
              ? "bg-green-500 text-white cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {contest.paymentStatus === "paid" ? "Already Paid ✔" : "Pay  Now 💳"}
        </button>

      </div>
    </div>
        </div>
    );
};

export default ContestDetails;