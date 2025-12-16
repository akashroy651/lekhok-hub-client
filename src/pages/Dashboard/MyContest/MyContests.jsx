import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrashCan } from "react-icons/fa6";
import Swal from "sweetalert2";
import { Link } from "react-router";

const MyContests = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: contests = [], refetch } = useQuery({
    queryKey: ["myContest", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/contests?email=${user.email}`);
      return res.data;
    },
  });

  const handleContestDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {

          axiosSecure.delete(`/contests/${id}`)
          .then(res => {
            console.log(res.data)
            // yes delete  korar por  delete success show jonno
            if(res.data.deletedCount) {
              // refresh the data in the ui mne (page theke)
                 refetch()
                Swal.fire({
                title: "Deleted!",
                text: "Your contest has been deleted.",
                icon: "success",
              });
             
            }
          })


        
      }
    });
  };

  const handlePayment = async (contest) => {
     const  paymentInfo = {
            entryFee:contest.entryFee,
            contestId: contest._id,
            creatorEmail:contest.creatorEmail,
            contestTitle: contest.title,
        }
        const res= await axiosSecure.post('/payment-checkout-session', paymentInfo);

        console.log(res.data.url)
        // window.location.href= res.data.url;
        window.location.assign(res.data.url);
  }

  return (
    <div>
      <h2>All of my contest: {contests.length}</h2>
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
                  {
                    contest.paymentStatus === 'paid' ?
                    <span className="text-green-400 font-semibold">Paid</span>
                    :
                    // <Link to={`/dashboard/payment/${contest._id}`}>
                    // <button
                    //  className="btn btn-primary
                    //   text-black btn-sm">Pay</button>
                    // </Link>
                
                    <button
                    onClick={() => handlePayment(contest)}
                     className="btn btn-primary
                      text-black btn-sm">Pay</button>
                   
                  }
                </td>

                <td>
                  <button className="btn btn-square">

                  </button>

                  <button
                    onClick={() => handleContestDelete(contest._id)}
                    className="btn btn-square"
                  >
                    <FaTrashCan></FaTrashCan>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyContests;
