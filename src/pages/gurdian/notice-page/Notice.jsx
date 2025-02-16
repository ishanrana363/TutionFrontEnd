import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Notice = () => {
    return (
        <>
            <div>
                <h1 className='text-[#64A8E8] text-xl font-bold ' >Read Our all Important Notice</h1>
            </div>
            <div className=" mx-auto p-4">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">1. How does TuitionBridge.com work?</h2>
                <p className="text-gray-700 mb-4">
                    TuitionBridge.com is a platform designed to connect guardians seeking tutors with qualified educators. Guardians can post job listings specifying their requirements, such as subjects, location, and preferred timing. Tutors can browse these listings, apply for jobs, and get matched based on their expertise. The platform offers a streamlined process:
                </p>
                <ul className="list-none space-y-2">
                    <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-[#2F3A4D]  mt-1" />
                        <span><strong>Step 1:</strong> Guardians create a job post detailing their needs.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-[#2F3A4D]  mt-1" />
                        <span><strong>Step 2:</strong> Tutors apply or are auto-matched to jobs that fit their skills and location.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-[#2F3A4D]  mt-1" />
                        <span><strong>Step 3:</strong> Both parties can communicate securely through the platform to finalize details.</span>
                    </li>
                </ul>
                <p className="text-gray-700 mt-4">
                    Our intuitive dashboard makes it easy to manage appointments, track progress, and handle payments—all in one place.
                </p>
            </div>
        </>
    );
};

export default Notice;