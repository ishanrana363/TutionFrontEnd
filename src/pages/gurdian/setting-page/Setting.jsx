import { useState } from "react";
import { FaUser, FaPhone, FaLock } from "react-icons/fa";
import { MdVerified, MdLock } from "react-icons/md";

const tabs = [
    { name: "Name", icon: <FaUser />, key: "name" },
    { name: "Number", icon: <FaPhone />, key: "number" },
    { name: "Password", icon: <FaLock />, key: "password" },
    { name: "Verification", icon: <MdVerified />, key: "verification" },
    { name: "Profile Lock", icon: <MdLock />, key: "profile_lock" },
];

export default function Setting() {
    const [activeTab, setActiveTab] = useState("name");
    const [name, setName] = useState("Fahim");

    return (
        <>
            <div className="w-full mx-auto p-6 bg-blue-50 rounded-lg shadow-md">
                {/* Tabs */}
                <div className="flex space-x-4 items-center gap-2  p-2 rounded-lg ">
                    {tabs.map((tab) => (
                        <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key)}
                            className={`flex items-center  space-x-2 px-8 py-5 rounded-lg transition-all duration-300 ${activeTab === tab.key
                                ? "bg-gradient-to-r from-[#07569E] to-[#0093DD] text-white"
                                : "bg-white shadow text-[#64A8E8] "
                                }`}
                        >
                            {tab.icon}
                            <span>{tab.name}</span>
                        </button>
                    ))}
                </div>

                {/* Content */}

            </div>
            <div className="mt-6 p-6 bg-[#F1F8FF] rounded-lg shadow-md">
                {activeTab === "name" && (
                    <div>
                        <h2 className="text-xl font-semibold text-[#141414] mb-4">Update Name</h2>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className=" w-2xl px-3 py-2 focus:outline-0 border-none bg-white  rounded-md"
                        />
                        <button className="mt-4 font-medium px-4 py-2 bg-[#64A8E8] text-white rounded-md flex items-center space-x-2">
                            Update →
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}
