import React from "react";

const Banner = () => {
    return (
        <div className="bg-white  flex flex-col md:flex-row items-center max-w-6xl mx-auto">
            <div className="md:w-1/2 text-center md:text-left space-y-4">
                <h1 className="text-3xl md:text-5xl font-bold">
                    Connecting <span className="text-blue-500">Tutors</span> with the Perfect <span className="text-black">Students</span>
                </h1>
                <p className="text-gray-600">
                    Find qualified tutors or teaching opportunities with ease. TuitionBridge simplifies the way tutors and guardians connect for personalized learning.
                </p>
                <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition">
                    Find A Tutor
                </button>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4 mt-6 md:mt-0">
                <img src="/images/tutor1.jpg" alt="Tutor 1" className="rounded-lg shadow-md w-full h-40 object-cover" />
                <img src="/images/tutor2.jpg" alt="Tutor 2" className="rounded-lg shadow-md w-full h-40 object-cover" />
                <img src="/images/tutor3.jpg" alt="Tutor 3" className="rounded-lg shadow-md w-full h-40 object-cover" />
                <img src="/images/tutor4.jpg" alt="Tutor 4" className="rounded-lg shadow-md w-full h-40 object-cover" />
            </div>
        </div>
    );
};

export default Banner;
