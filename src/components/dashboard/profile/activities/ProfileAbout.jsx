import React from "react";

const ProfileAbout = ({ getUserData, setEditModal }) => {
  return (
    <div className="w-full">
      <p className="text-xl first-letter:uppercase">
        {getUserData?.bio || getUserData?.username + " has no bio"}
      </p>
      <div className="text-right text-sm">
        <button
          onClick={() => setEditModal(true)}
          className="border border-black py-2 px-5 rounded-full text-black mt-[3rem] hover:bg-black hover:text-white transition-all duration-100">
          Edit
        </button>
      </div>
    </div>
  );
};

export default ProfileAbout;