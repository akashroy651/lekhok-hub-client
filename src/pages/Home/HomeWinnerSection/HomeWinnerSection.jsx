import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const HomeWinnerSection = () => {
  const axiosSecure = useAxiosSecure();

  const { data = {} } = useQuery({
    queryKey: ["participants"],
    queryFn: async () => {
      const res = await axiosSecure.get("/participants");
      return res.data;
    },
  });

  const { leaderboard = [], totalEntryFee = 0 } = data;
  return (
    <div>
<div className="p-6">
  <h2 className="text-2xl font-bold mb-4">Leaderboard</h2>

  <p className="mb-4 font-semibold">
    Total Prize Pool: {totalEntryFee} ৳
  </p>

  <div className="overflow-x-auto">
    <table className="table-auto w-full border-collapse   min-w-[200px]">
      <thead className="bg-gray-100">
        <tr>
          <th className="border p-2 text-left">Rank</th>
          {/* <th className="border p-2 text-left">Email</th> */}
          <th className="border p-2 text-left">Title</th>
          <th className="border p-2 text-left">Total Score</th>
          {/* <th className="border p-2 text-left">Prize Money</th> */}
        </tr>
      </thead>
      <tbody>
        {leaderboard.map((user, ) => (
          <tr key={user.email} className="even:bg-gray-50">
            <td className="border p-2">{user.rank}</td>
            {/* <td className="border p-2">{user.email}</td> */}
            <td className="border p-2">{user.title}</td>
            <td className="border p-2">{user.totalScore}</td>
            {/* <td className="border p-2">{user.prize} ৳</td> */}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

    </div>
  );
};

export default HomeWinnerSection;
