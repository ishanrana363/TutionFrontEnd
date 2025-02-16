import React from 'react';

const VerifyAccount = () => {
    return (
        <div>
            <h2 className="text-xl font-semibold text-[#141414] ">Profile Verification</h2>
            <p className='text-sm text-[#2F3A4D]  mb-3 mt-1 ' >Make Your Profile Verified, Request for Verification</p>
            <button className=" flex items-center space-x-2 px-6 py-2 bg-[#64A8E8] text-white rounded-md shadow-md  transition">
                <span>Request For Verification</span> →
            </button>
        </div>
    );
};

export default VerifyAccount;