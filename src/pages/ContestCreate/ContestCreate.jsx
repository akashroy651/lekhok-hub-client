import React from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router";

const ContestCreate = () => {

      const {
        register,
        handleSubmit,
        formState: { errors }
        } = useForm();

     const { user } = useAuth();
    //  console.log('user email check', user.email)  

      const axiosSecure = useAxiosSecure();  

      const navigate = useNavigate();

  const contestSubmit = (data) => {
    console.log("New Contest Data:", data);

    const contestData = {
        ...data,
        creatorName: user.displayName || "Anonymous",
        creatorEmail: user.email

    }
    

    Swal.fire({
  title: "Confirm contest?",
  text: "Do you agree to create this contest!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, Create!"
}).then((result) => {
  if (result.isConfirmed) {

    // save the parcel info to the data base
    axiosSecure.post('/contests', contestData)
    .then( res => {
        console.log('after saving contest',res.data)
        if (res.data.insertedId)  {
            navigate('/dashboard/my-contests')
            Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Join contest please pay!",
                    showConfirmButton: false,
                    timer: 2500
                    });
        }
    })
    //<
    // Swal.fire({
    //   title: "Deleted!",
    //   text: "Your file has been deleted.",
    //   icon: "success"
    // });
  }
});
  };



  return (
   <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-3xl font-bold mb-6">Add New Contest</h2>

      <form onSubmit={handleSubmit(contestSubmit)} className="space-y-4">
        
        {/* Contest Title */}
        <div>
          <label className="block font-semibold">Contest Title</label>
          <input 
            type="text"
            {...register("title", { required: true })}
            className="input input-bordered w-full mt-1"
            placeholder="Enter contest title"
          />
          {errors.title && <p className="text-red-500">Title is required</p>}
        </div>

        {/* Category */}
        <div>
          <label className="block font-semibold">Category</label>
          <select 
            {...register("category", { required: true })}
            className="select select-bordered w-full mt-1"
          >
            <option value="">Select Category</option>
            <option value="Article Writing">Article Writing</option>
            {/* <option value="Photo Contest">Photo Contest</option> */}
            <option value="Other">Other</option>
          </select>
          {errors.category && <p className="text-red-500">Category is required</p>}
        </div>

        {/* Entry Fee */}
        <div>
          <label className="block font-semibold">Entry Fee (in $)</label>
          <p>Entry fee must be between 50 and 1000 taka</p>
          <input
            type="number"
            {...register("entryFee", {
                 required: true,
                  min: 50 ,
                max: 1000,
            })}
            className="input input-bordered w-full mt-1"
             placeholder="Entry Fee (50 - 1000 tk)"
          />
          {errors.entryFee && <p className="text-red-500">Entry Fee is required</p>}
        
            {errors.entryFee && (
            <p className="text-red-500">
            Entry Fee must be between 50 and 1000 taka </p>
                )} 
        </div>

        {/* Prize Money */}
        <div>
          <label className="block font-semibold">Prize Money (in $)</label>
          <input
            type="number"
            {...register("prize", { required: true, min: 0 })}
            className="input input-bordered w-full mt-1"
            placeholder="Enter prize amount"
          />
          {errors.prize && <p className="text-red-500">Prize money is required</p>}
        </div>

        {/* Description */}
        <div>
          <label className="block font-semibold">Description / Guidelines</label>
          <textarea
            {...register("description", { required: true })}
            className="textarea textarea-bordered w-full mt-1"
            placeholder="Write contest details and guidelines"
          ></textarea>
          {errors.description && <p className="text-red-500">Description is required</p>}
        </div>

        {/* Start Date */}
        <div>
          <label className="block font-semibold">Start Date</label>
          <input
            type="date"
            {...register("startDate", { required: true })}
            className="input input-bordered w-full mt-1"
          />
          {errors.startDate && <p className="text-red-500">Start Date is required</p>}
        </div>

        {/* Submission Deadline */}
        <div>
          <label className="block font-semibold">Submission Deadline</label>
          <input
            type="date"
            {...register("deadline", { required: true })}
            className="input input-bordered w-full mt-1"
          />
          {errors.deadline && <p className="text-red-500">Deadline is required</p>}
        </div>

        {/* Cover Image */}
        {/* <div>
          <label className="block font-semibold">Optional Cover Image</label>
          <input
            type="file"
            {...register("coverImage")}
            className="file-input w-full mt-1"
          />
        </div> */}

        {/* Submit Button */}
        <button 
          type="submit"
          className="btn btn-primary text-black mt-4 w-full"
        >
          Add Contest
        </button>

      </form>
    </div>
  );
};

export default ContestCreate;
