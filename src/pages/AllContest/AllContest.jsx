import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaTrashCan } from "react-icons/fa6";

const AllContest = () => {
  const axiosSecure = useAxiosSecure();
  const { data: contests = [] } = useQuery({
    queryKey: ["allContests"],
    queryFn: async () => {
      const res = await axiosSecure.get("/contests");
      return res.data;
    },
  });
  console.log("all-contest", contests);
  return (
    <div>
      <h2>hey hello all contest : {contests.length} </h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Category</th>
              <th>EntryFee</th>
              <th>paymentStatus</th>
            </tr>
          </thead>
          <tbody>
            {contests.map((contest, index) => (
              <tr key={contest._id}>
                <th>{index + 1}</th>
                <td>{contest.title}</td>
                <td>{contest.category}</td>
                <td>{contest.entryFee}</td>
                <td>
                  {contest.paymentStatus === "paid" ? (
                    <span className="text-green-400 font-semibold">Paid</span>
                  ) : (
                    // <Link to={`/dashboard/payment/${contest._id}`}>
                    // <button
                    //  className="btn btn-primary
                    //   text-black btn-sm">Pay</button>
                    // </Link>

                    <p
                    //   onClick={() => handlePayment(contest)}
                      className=" font-semibold"
                    >
                       Pay
                    </p>
                  )}
                </td>

                {/* <td>
                  <button className="btn btn-square"></button>

                  <button
                    onClick={() => handleContestDelete(contest._id)}
                    className="btn btn-square"
                  >
                    <FaTrashCan></FaTrashCan>
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllContest;












//             <div className="p-4">
//     <h2 className="text-2xl font-bold mb-4">All Contests</h2>

//     {user.role === 'admin' ? (
//       // Admin → Table view
//       <table className="min-w-full border border-gray-300">
//         <thead className="bg-gray-100">
//           <tr>
//             <th>Title</th>
//             <th>Category</th>
//             <th>Creator</th>
//             <th>Entry Fee</th>
//             <th>Prize</th>
//             <th>Start</th>
//             <th>Deadline</th>
//             <th>Payment</th>
//           </tr>
//         </thead>
//         <tbody>
//           {contests.map(c => (
//             <tr key={c._id}>
//               <td>{c.title}</td>
//               <td>{c.category}</td>
//               <td>{c.creatorName}</td>
//               <td>{c.entryFee}</td>
//               <td>{c.prize}</td>
//               <td>{c.startDate}</td>
//               <td>{c.deadline}</td>
//               <td>{c.paymentStatus}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     ) : (
//       // Normal user → Card view
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {contests.map(c => (
//           <div key={c._id} className="border p-4 rounded shadow hover:shadow-lg">
//             <h3 className="font-bold text-lg mb-2">{c.title}</h3>
//             <p><strong>Category:</strong> {c.category}</p>
//             <p><strong>Entry Fee:</strong> {c.entryFee} tk</p>
//             <p><strong>Prize:</strong> {c.prize} tk</p>
//             <p><strong>Deadline:</strong> {c.deadline}</p>
//           </div>
//         ))}
//       </div>
//     )}
//   </div>