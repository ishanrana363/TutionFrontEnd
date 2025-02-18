import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

const WhyChooseUs = () => {
    return (
        <div className=' max-w-6xl mx-auto ' >
            <div className="text-center py-8">
                <p className="text-[#4F7CAC] text-sm font-medium flex items-center justify-center">
                    <span className="mx-2"> <img src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1739895862/Line_383_m6pfoi.png" alt="" /> </span> Categories <span className="mx-2"> <img src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1739895862/Line_384_pfg4p0.png" alt="" /> </span>
                </p>
                <h2 className="text-4xl md:text-3xl font-bold text-[#2F3A4D]  mt-2">
                    Discover what makes our tutoring services <br /> stand out
                </h2>
            </div>
            <div className='flex justify-between w-[70%] mx-auto ' >
                <div className="bg-white shadow-lg rounded-lg p-6 text-center w-64">
                    <div className="bg-blue-100 w-16 h-16 mx-auto flex items-center justify-center rounded-full">
                        <img src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1739896500/Frame_2_nmgzdw.png" alt="" />
                    </div>
                    <h2 className="text-2xl font-semibold text-[#64A8E8] mt-3">Expert Tutors</h2>
                    <p className="text-[#667085] text-center mt-2 text-sm">
                        Our tutors are experienced professionals dedicated to offering expert
                        guidance and support.
                    </p>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6 text-center w-64">
                    <div className="bg-blue-100 w-16 h-16 mx-auto flex items-center justify-center rounded-full">
                        <img src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1739896500/Frame_1_uyctc3.png" alt="" />
                    </div>
                    <h2 className="text-2xl font-semibold text-[#64A8E8] mt-3">Tailored Matching</h2>
                    <p className="text-[#667085] text-center mt-2 text-sm">
                    Get matched with tutors who fit your unique learning needs, goals, and preferred teaching methods.
                    </p>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6 text-center w-64">
                    <div className="bg-blue-100 w-16 h-16 mx-auto flex items-center justify-center rounded-full">
                        <img src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1739896500/Frame_gg67t1.png" alt="" />
                    </div>
                    <h2 className="text-2xl font-semibold text-[#64A8E8] mt-3">Flexible Schedule</h2>
                    <p className="text-[#667085] text-center mt-2 text-sm">
                    Learn at your convenience with flexible online or in-person options, tailored to fit your unique schedule and needs.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;