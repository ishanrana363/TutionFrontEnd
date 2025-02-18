import React, { useState } from 'react';
import { FaLock, FaPassport, FaPhone, FaUser } from 'react-icons/fa';
import { MdPortableWifiOff, MdVerified } from 'react-icons/md';
import Name from '../../../components/tutor/setting/Name';

const TutorSettingPage = () => {
    const [activeTab, setActiveTab] = useState("name");

    const tabs = [
        { name: "Name", icon: <FaUser />, key: "name" },
        { name: "Number", icon: <FaPhone />, key: "number" },
        { name: "Password", icon: <FaPassport />, key: "password" },
        { name: "Verification", icon: <MdVerified />, key: "verification" },
        { name: "Profile Lock", icon: <MdPortableWifiOff />, key: "profile Lock" },
    ];
    return (
        <div className='my-10' >
            {/* Tabs */}
            <div className="flex space-x-2 bg-blue-50 px-4 py-8 rounded-lg shadow-md">
                {tabs.map((tab) => (
                    <button
                        key={tab.name}
                        onClick={() => setActiveTab(tab.key)}
                        className={`px-12 py-3 flex items-center gap-3 rounded-lg transition-all duration-300 ${activeTab === tab.name
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
            <div>
                <div className="mt-6 p-6 bg-[#F1F8FF] rounded-lg shadow-md">
                    {activeTab === "name" &&  <Name></Name> }
                </div>
            </div>
        </div>
    );
};

export default TutorSettingPage;