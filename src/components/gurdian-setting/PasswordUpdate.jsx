import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function PasswordUpdate() {
    const [showPassword, setShowPassword] = useState({
        current: false,
        new: false,
        confirm: false,
    });

    const togglePasswordVisibility = (field) => {
        setShowPassword((prev) => ({
            ...prev,
            [field]: !prev[field],
        }));
    };

    return (
        <div className="w-full max-w-lg  p-6 bg-blue-50 rounded-lg ">
            <h2 className="text-xl font-semibold text-[#141414] mb-4">Password</h2>
            
            {/* Password Fields */}
            {["current", "new", "confirm"].map((field, index) => (
                <div key={index} className="relative mb-4">
                    <input
                        type={showPassword[field] ? "text" : "password"}
                        placeholder={
                            field === "current"
                                ? "Current Password"
                                : field === "new"
                                ? "New Password"
                                : "Confirm Password"
                        }
                        className="w-full px-4 py-2 pr-10 bg-white focus:outline-0 border-none rounded-md focus:outline-none shadow-sm"
                    />
                    <button
                        type="button"
                        className="absolute right-3 top-3 text-gray-500"
                        onClick={() => togglePasswordVisibility(field)}
                    >
                        {showPassword[field] ? <FaEyeSlash /> : <FaEye />}
                    </button>
                </div>
            ))}

            {/* Update Button */}
            <button className="mt-4 flex items-center space-x-2 px-6 py-2 bg-[#64A8E8] text-white rounded-md shadow-md  transition">
                <span>Update</span> →
            </button>
        </div>
    );
}
