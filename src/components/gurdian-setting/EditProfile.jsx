import React from 'react';
import { Link } from 'react-router-dom';

const EditProfile = () => {
    return (
        <div>
            <h2 className="text-xl font-semibold text-[#141414] ">Edit Profile</h2>
            <p className='text-sm text-[#2F3A4D]  mb-3 mt-1 ' >Upgrade Your Profile in Every Moment</p>
            <button className=" flex items-center space-x-2 px-6 py-2 bg-[#64A8E8] text-white rounded-md shadow-md  transition">
                <Link to={"/edit-profile"}><span>Edit Profile</span> →</Link>
            </button>
        </div>
    );
};

export default EditProfile;