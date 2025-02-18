import React from "react";

const Banner = () => {
    return (
        <div className="relative h-screen bg-[url('https://res.cloudinary.com/dj2edy2rg/image/upload/v1739891753/Home_up5akt.png')] bg-cover bg-center">
            {/* Overlay for better readability */}

            <div className="relative flex flex-col md:flex-row items-center  gap-9 mx-auto max-w-6xl py-4 ">
                <div className="md:w-1/2 w-full text-center md:text-left space-y-4 bg-white bg-opacity-80 p-6 rounded-lg ">
                    <h1 className="text-3xl md:text-5xl font-bold">
                        Connecting <span className=" text-[#64A8E8] ">Tutors</span> with the Perfect <span className="text-black">Students</span>
                    </h1>
                    <p className="text-gray-700">
                        Find qualified tutors or teaching opportunities with ease. TuitionBridge simplifies the way tutors and guardians connect for personalized learning.
                    </p>
                    <button className="bg-[#64A8E8] text-white px-6 py-3 rounded-lg shadow-md  transition">
                        Find A Tutor
                    </button>
                </div>

                <div className=" grid grid-cols-2  gap-4 mt-6 md:mt-0">
                    <img src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1739892407/Frame_143_udhgly.png" alt="Tutor 1" className="rounded-lg  w-full h-64 object-cover" />
                    <img src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1739892405/Frame_145_snzdx9.png" alt="Tutor 2" className="rounded-lg  w-full h-64 object-cover" />
                    <img src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1739892405/Frame_144_v0sqoy.png" alt="Tutor 3" className="rounded-lg  w-full h-64 object-cover" />
                    <img src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1739892405/Frame_146_pgw7iw.png" alt="Tutor 4" className="rounded-lg  w-full h-64 object-cover" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
