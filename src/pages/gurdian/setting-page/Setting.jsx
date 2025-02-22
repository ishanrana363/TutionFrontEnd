import { useState } from "react";
import { FaUser, FaPhone, FaLock } from "react-icons/fa";
import { MdVerified, MdLock } from "react-icons/md";
import NameUpdate from "../../../components/gurdian-setting/NameUpdate";
import PhoneNumberUpdate from "../../../components/gurdian-setting/PhoneNumberUpdate";
import PasswordUpdate from "../../../components/gurdian-setting/PasswordUpdate";
import VerifyAccount from "../../../components/gurdian-setting/VerifyAccount";
import EditProfile from "../../../components/gurdian-setting/EditProfile";

const tabs = [
    { name: "Name", icon: <FaUser />, key: "name" },
    { name: "Number", icon: <FaPhone />, key: "number" },
    { name: "Password", icon: <FaLock />, key: "password" },
    { name: "Verification", icon: <MdVerified />, key: "verification" },
    { name: "Edit Profile", icon: <FaUser />, key: "profile_lock" },
];

export default function Setting() {
    const [activeTab, setActiveTab] = useState("name");

    return (
        <>
            <div className="w-full mx-auto p-6 bg-blue-50 rounded-lg shadow-md">
                {/* Tabs */}
                <div className="flex space-x-4 p-2 rounded-lg">
                    {tabs.map((tab) => (
                        <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key)}
                            className={`flex items-center space-x-2 px-10 py-5 rounded-lg transition-all duration-300 ${activeTab === tab.key
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
                        <VerifyAccount></VerifyAccount>
                    </div>
                )}

                {activeTab === "profile_lock" && (
                    <div>
                        <EditProfile></EditProfile>
                    </div>
                )}
            </div>
        </>
    );
}
