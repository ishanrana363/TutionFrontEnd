import React, { useState } from 'react';
import { FaLock, FaPhone, FaPhoneAlt, FaUser } from 'react-icons/fa';
import { MdEmail, MdVerified } from 'react-icons/md';
import AvailabilityInformation from '../../../components/tutor/AvailabilityInformation';
import EducatonInfo from '../../../components/tutor/EducatonInfo';
import PersonalInfo from '../../../components/tutor/PersonalInfo';

const tabs = [
    { name: "Tuition Related", icon: <FaUser />, key: "Information" },
    { name: "Education Related", icon: <FaPhone />, key: "Information" },
    { name: "Personal Related", icon: <FaLock />, key: "Information" },
    { name: "Credential Related", icon: <MdVerified />, key: "Information" },
];

const TutorProfile = () => {
    const [activeTab, setActiveTab] = useState("Tuition Related");

    return (
        <div className="flex flex-col lg:flex-row gap-6 p-4">
            {/* Left Sidebar - Profile Section */}
            <div className="lg:w-1/4 w-full">
                <div className="h-auto lg:h-[65vh] px-4 bg-[#F1F8FF] py-7 rounded-xl shadow-md">
                    <div className="w-24 h-24 mx-auto border-4 border-[#07569E] rounded-full overflow-hidden">
                        <img src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1739633149/Ellipse_3898_n1xkxy.png" alt="Profile" />
                    </div>
                    <div className="text-center mt-3">
                        <h1 className="font-bold text-2xl text-[#141414]">Fahim Islam</h1>
                        <p className="text-[#656A7B] text-sm">Student ID: 3265</p>
                    </div>

                    {/* Contact Info */}
                    <div className="mt-4 space-y-4">
                        <div className="flex items-center gap-3">
                            <MdEmail className="text-xl text-[#07569E]" />
                            <div>
                                <h1 className="text-[#1C1C1C] font-bold">Email</h1>
                                <p className="text-[#656A7B]">ishanrana094@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <FaPhoneAlt className="text-xl text-[#07569E]" />
                            <div>
                                <h1 className="text-[#1C1C1C] font-bold">Phone Number</h1>
                                <p className="text-[#656A7B]">01830376175</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <img className="w-6" src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1739634331/Group_jogzzm.png" alt="Location" />
                            <div>
                                <h1 className="text-[#1C1C1C] font-bold">Address</h1>
                                <p className="text-[#656A7B]">Mirpur-10, Dhaka</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Section - Tabs and Content */}
            <div className=" w-full">
                {/* Tabs */}
                <div className="flex space-x-2 bg-blue-50 p-2 rounded-lg shadow-md">
                    {tabs.map((tab) => (
                        <button
                            key={tab.name}
                            onClick={() => setActiveTab(tab.name)}
                            className={`px-3 py-3 flex items-center gap-3 rounded-lg transition-all duration-300 ${activeTab === tab.name
                                ? "bg-gradient-to-r from-[#07569E] to-[#0093DD] text-white"
                                : "bg-white shadow text-[#64A8E8]"
                                }`}
                        >
                            <div className="w-4 h-4 flex justify-center items-center">
                                {tab.icon}
                            </div>
                            <div className="text-center">
                                <span className="font-semibold text-sm block">{tab.name}</span>
                                <span className="text-xs text-[#656A7B]">{tab.key}</span>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Tab Content Section */}
                <div className="mt-6 p-6 bg-[#F1F8FF] rounded-lg shadow-md">
                    {activeTab === "Tuition Related" && <AvailabilityInformation />}
                    {activeTab === "Education Related" && <EducatonInfo></EducatonInfo> }
                    {activeTab === "Personal Related" && <PersonalInfo></PersonalInfo>  }
                    {activeTab === "Credential Related" && <h1 className="text-lg font-semibold">Credential Info Coming Soon</h1>}
                </div>

            </div>


        </div>
    );
}

export default TutorProfile;
