import { useState } from "react";
import { FaUser, FaPhone, FaLock } from "react-icons/fa";
import { MdVerified, MdLock } from "react-icons/md";
import NameUpdate from "../../../components/gurdian-setting/NameUpdate";
import PhoneNumberUpdate from "../../../components/gurdian-setting/PhoneNumberUpdate";
import PasswordUpdate from "../../../components/gurdian-setting/PasswordUpdate";

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
    const [number, setNumber] = useState("+1234567890");

    return (
        <>
            <div className="w-full mx-auto p-6 bg-blue-50 rounded-lg shadow-md">
                {/* Tabs */}
                <div className="flex space-x-4 p-2 rounded-lg">
                    {tabs.map((tab) => (
                        <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key)}
                            className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${activeTab === tab.key
                                ? "bg-gradient-to-r from-[#07569E] to-[#0093DD] text-white"
                                : "bg-white shadow text-[#64A8E8]"
                                }`}
                        >
                            {tab.icon}
                            <span>{tab.name}</span>
                        </button>
                    ))}
                </div>


            </div>
            {/* Content Section */}
            <div className="mt-6 p-6 bg-[#F1F8FF] rounded-lg shadow-md">
                {activeTab === "name" && (
                    <NameUpdate></NameUpdate>
                )}

                {activeTab === "number" && (
                    <div>
                        <PhoneNumberUpdate></PhoneNumberUpdate>
                    </div>
                )}

                {activeTab === "password" && (
                    <div>
                        <PasswordUpdate></PasswordUpdate>
                    </div>
                )}

                {activeTab === "verification" && (
                    <div>
                        <h2 className="text-xl font-semibold text-[#141414] mb-4">Verify Your Account</h2>
                        <button className="mt-4 font-medium px-4 py-2 bg-green-500 text-white rounded-md flex items-center space-x-2">
                            Send Verification Code
                        </button>
                    </div>
                )}

                {activeTab === "profile_lock" && (
                    <div>
                        <h2 className="text-xl font-semibold text-[#141414] mb-4">Enable Profile Lock</h2>
                        <button className="mt-4 font-medium px-4 py-2 bg-red-500 text-white rounded-md flex items-center space-x-2">
                            Enable Lock
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}
