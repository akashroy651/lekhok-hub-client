import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const ContestWinner = () => {
  const axiosSecure = useAxiosSecure();

  const { data = {} } = useQuery({
    queryKey: ["participants"],
    queryFn: async () => {
      const res = await axiosSecure.get("/participants");
      return res.data;
    },
  });

  console.log("data k", data);
  const { leaderboard = [], totalEntryFee = 0 } = data;
  console.log("totalEntryFee", totalEntryFee);
  console.log("leaderboard", leaderboard);
  return (
    <div>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Leaderboard</h2>

        <p className="mb-4 font-semibold">
          Total Prize Pool: {totalEntryFee} ৳
        </p>

        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Rank</th>
              {/* <th>Email</th> */}
              <th>Title</th>
              <th>Total Score</th>
              <th>Prize Money</th>
            </tr>
          </thead>

          <tbody>
            {leaderboard.map((user) => (
              <tr key={user.email}>
                <td>{user.rank}</td>
                <td>{user.email}</td>
                <td>{user.title}</td>
                <td>{user.totalScore}</td>
                <td>{user.prize} ৳</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContestWinner;
