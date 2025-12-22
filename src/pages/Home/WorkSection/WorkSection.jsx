import React from "react";
import { FaPenNib, FaUsers, FaTools, FaEdit } from "react-icons/fa";

const WorkSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">How It Works!</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Card 1 */}
        <div className="card bg-base-100 hover-3d shadow-sm hover:shadow-xl shadow-blue-200  p-3">
          <figure className="px-4 pt-4 flex items-center justify-center">
            <FaPenNib className="text-5xl text-primary" />
          </figure>
          <div className="card-body items-center  text-center">
            <h2 className="card-title">Contest Create</h2>
            <p className="">
              Create your contest easily with full custom rules & settings.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card bg-base-100 hover-3d shadow-sm hover:shadow-xl shadow-blue-200  p-3">
          <figure className="px-4 pt-4 flex items-center justify-center">
            <FaUsers className="text-5xl text-primary" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Contest Participate</h2>
            <p className="">
              Participate in exciting contests & compete to win rewards.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card bg-base-100 hover-3d shadow-sm hover:shadow-xl shadow-blue-200 p-3">
          <figure className="px-4 pt-4 flex items-center justify-center">
            <FaTools className="text-5xl text-primary" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Contest Manage</h2>
            <p className="">
              Approve, manage participants, and control contest flow easily.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="card bg-base-100 hover-3d hover:shadow-xl shadow-sm shadow-blue-200  p-3">
          <figure className="px-4 pt-4 flex items-center justify-center">
            <FaEdit className="text-5xl text-primary" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Contest Editing</h2>
            <p className="">
              Edit, refine & improve content before final publishing.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WorkSection;
