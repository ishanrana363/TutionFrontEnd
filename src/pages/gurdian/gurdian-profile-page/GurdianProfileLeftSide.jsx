import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const GurdianProfileLeftSide = () => {
    return (
        <div>
            <div className='w-full h-[65vh]  px-4 bg-[#F1F8FF] py-7 rounded-xl shadow'>
                <div className='w-24 h-24 mx-auto border-4 border-[#07569E] rounded-full'>
                    <img src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1739633149/Ellipse_3898_n1xkxy.png" alt="Profile" />
                </div>
                <div className='text-center mt-3'>
                    <h1 className='font-bold text-2xl text-[#141414]'>Fahim Islam</h1>
                    <p className='text-[#656A7B] text-sm'>Student ID : 3265</p>
                </div>

                {/* Email Section */}
                <div className='flex items-center gap-3 mt-4'>
                    <MdEmail className='text-xl text-[#07569E]' />
                    <div>
                        <h1 className='text-[#1C1C1C] font-bold'>Email</h1>
                        <p className='text-[#656A7B]'>ishanrana094@gmail.com</p>
                    </div>
                </div>

                {/* Phone Section */}
                <div className='flex items-center gap-3 my-4'>
                    <FaPhoneAlt className='text-xl text-[#07569E]' />
                    <div>
                        <h1 className='text-[#1C1C1C] font-bold'>Phone Number</h1>
                        <p className='text-[#656A7B]'>01830376175</p>
                    </div>
                </div>

                {/* Address Section */}
                <div className='flex items-center gap-3 my-4'>
                    <img className='w-6' src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1739634331/Group_jogzzm.png" alt="Location" />
                    <div>
                        <h1 className='text-[#1C1C1C] font-bold'>Address</h1>
                        <p className='text-[#656A7B]'>Mirpur-10, Dhaka</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GurdianProfileLeftSide;