import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const PasswordUpdate = () => {
    const [showPassword, setShowPassword] = useState({
        current: false,
        new: false,
        confirm: false,
    });

    const toggleVisibility = (field) => {
        setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
    };

    return (
        <div className="bg-blue-50 p-6 rounded-lg max-w-md  ">
            <h2 className="text-lg text-[#141414] font-semibold mb-4">Password</h2>
            <div className="space-y-4">
                {[
                    { label: "Current Password", field: "current" },
                    { label: "New Password", field: "new" },
                    { label: "Confirm Password", field: "confirm" },
                ].map(({ label, field }) => (
                    <div key={field} className="relative">
                        <input
                            type={showPassword[field] ? "text" : "password"}
                            placeholder={label}
                            className="w-full p-2 border-none bg-white rounded-md shadow-sm focus:outline-none "
                        />
                        <button
                            type="button"
                            onClick={() => toggleVisibility(field)}
                            className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                        >
                            {showPassword[field] ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                ))}
                <button className=" px-10 text-white py-2 rounded-md shadow-md bg-[#64A8E8] transition">
                    Update →
                </button>
            </div>
        </div>
    );
};

export default PasswordUpdate;
