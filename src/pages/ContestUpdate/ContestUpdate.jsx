import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';

const ContestUpdate = () => {
    const { id } = useParams();
    const axiosSecure = useAxiosSecure();

    const {register, handleSubmit,setValue, formState:{ errors }} = useForm();

    const { data: contest = []} = useQuery({
        queryKey: ['contests', id],
        queryFn: async () => {
            const res = await  axiosSecure.get(`/contests/${id}`)
            return res.data
        }
    })

    useEffect (() => {
        if(!contest) return;
       setValue("title", contest.title);
      setValue("category", contest.category);
      setValue("entryFee", contest.entryFee);
      setValue("prize", contest.prize);
      setValue("description", contest.description);
      setValue("startDate", contest.startDate);
      setValue("deadline", contest.deadline);
    }, [setValue , contest])

    return (
        <div>
            <h2>new update</h2>
            <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Update New Contest</h2>

      <form  className="space-y-4">
        
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
        </div>
    );
};

export default ContestUpdate;