// import React from 'react';
// import useAxiosSecure from '../../../hooks/useAxiosSecure';
// import { useQuery } from '@tanstack/react-query';

// const ContestParticipant = () => {

//     const axiosSecure = useAxiosSecure();

//     const { data: status=[] } = useQuery({
//         queryKey: ['contests', 'paid'],
//         queryFn: async () => {
//             const res = await axiosSecure.get('/contests?paymentStatus=paid')
//             return res.data
//         }
//     })
 
// console.log('participant', status)

//     return (
//         <div>
            
//         </div>
//     );
// };

// export default ContestParticipant;




















import React, { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import Swal from "sweetalert2";

const ContestParticipant = () => {
  const axiosSecure = useAxiosSecure();

  const [selectedParticipant, setSelectedParticipant] = useState(null);
  const [scores, setScores] = useState({
    creativity: "",
    grammar: "",
    relevance: "",
    structure: "",
    engagement: "",
    formatting: "",
  });

  // load participants
  const { data: participants = [] } = useQuery({
    queryKey: ["contests", "paid"],
    queryFn: async () => {
      const res = await axiosSecure.get("contests?paymentStatus=paid");
      return res.data;
    },
  });

  console.log('selectedParticipant', selectedParticipant)

  // open modal with selected user
  const openScoreModal = (user) => {
    setSelectedParticipant(user);
  };

  // handle form inputs
  const handleChange = (e) => {
    setScores({ ...scores, [e.target.name]: e.target.value });
  };


 const data = selectedParticipant
  ? {
      _id: selectedParticipant._id,
      title: selectedParticipant.title,
      creatorEmail: selectedParticipant.creatorEmail,
      category: selectedParticipant.category,
      entryFee: selectedParticipant.entryFee,
      prize: selectedParticipant.prize,
    }
  : null;

  // submit score

const handleScoreSubmit = async (e) => {
  e.preventDefault();




if (!data) {
  console.error("No participant selected!");
  Swal.fire({
    icon: "error",
    title: "No participant selected!",
  });
  return;
}

  const totalScore =
   Number(scores.creativity) +
      Number(scores.grammar) +
      Number(scores.relevance) +
      Number(scores.structure) +
      Number(scores.engagement) +
      Number(scores.formatting);
console.log('totalScore', totalScore)



  try {


  



    await axiosSecure.post('/participants', { participant: data, scores, totalScore});
    Swal.fire({
      icon: 'success',
      title: 'Score saved successfully',
      showConfirmButton: false,
      timer: 1500
    });
    setSelectedParticipant(null);
    setScores({});
    // refetch();
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Failed to save score',
      text: error.message
    });
  }
};

console.log('abcdef',scores)






//   console.log('djdndjfnjd', participants)

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">
        Contest Participants ({participants.length})
      </h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Submission</th>
              <th>Score</th>
            </tr>
          </thead>

          <tbody>
            {participants.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.creatorEmail}</td>
                <td>
                  <Link to={`/dashboard/contest/${user._id}`}
                   
                    className="text-blue-600 underline"
                  >
                    View
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => openScoreModal(user)}
                    className="btn btn-sm btn-primary text-black"
                  >
                    Give Score
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {selectedParticipant && (
        <div className="modal modal-open bg-black bg-opacity-50">
          <div className="modal-box">
            <h3 className="font-bold mb-3">
              Score for {selectedParticipant.creatorEmail}
            </h3>

            <form onSubmit={handleScoreSubmit} className="space-y-2">
              <input
                name="creativity"
                type="number"
                max="25"
                placeholder="Creativity (max 25)"
                required
                className="input input-bordered w-full"
                onChange={handleChange}
              />

              <input
                name="grammar"
                type="number"
                max="20"
                placeholder="Grammar (max 20)"
                required
                className="input input-bordered w-full"
                onChange={handleChange}
              />

              <input
                name="relevance"
                type="number"
                max="20"
                placeholder="Relevance (max 20)"
                required
                className="input input-bordered w-full"
                onChange={handleChange}
              />

              <input
                name="structure"
                type="number"
                max="15"
                placeholder="Structure (max 15)"
                required
                className="input input-bordered w-full"
                onChange={handleChange}
              />

              <input
                name="engagement"
                type="number"
                max="10"
                placeholder="Engagement (max 10)"
                required
                className="input input-bordered w-full"
                onChange={handleChange}
              />

              <input
                name="formatting"
                type="number"
                max="10"
                placeholder="Formatting (max 10)"
                required
                className="input input-bordered w-full"
                onChange={handleChange}
              />

              <button type="submit" className="btn btn-success w-full mt-4">
                Save Score
              </button>
            </form>

            <button
              onClick={() => setSelectedParticipant(null)}
              className="btn btn-error mt-3 w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContestParticipant;


























//   const handleScoreSubmit = async (e) => {
//     e.preventDefault();

//     const totalScore =
//       Number(scores.creativity) +
//       Number(scores.grammar) +
//       Number(scores.relevance) +
//       Number(scores.structure) +
//       Number(scores.engagement) +
//       Number(scores.formatting);

//     await axiosSecure.patch(
//       `/participants`,
//       { scores, totalScore }
//     );

//     alert("Score saved");
//     setSelectedParticipant(null);
//     setScores({});
//     refetch();
//   };