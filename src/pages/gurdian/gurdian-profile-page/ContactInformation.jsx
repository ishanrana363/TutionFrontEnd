import React from 'react';

const ContactInformation = () => {
    return (
        <div className="bg-[#F1F8FF] p-6 rounded-lg overflow-y-scroll h-[60vh] shadow-md w-full">
            <h2 className="text-lg font-bold text-[#141414] mb-4">Contact Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                    <label className="block text-sm text-[#3A3A3A] font-medium">Name</label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full mt-1 border-none focus:outline-0 bg-white p-2 border rounded-lg"
                    />
                </div>

                {/* Contact Number */}
                <div>
                    <label className="block text-sm text-[#3A3A3A] font-medium">Contact number</label>
                    <input
                        type="text"
                        placeholder="Enter contact number"
                        className="w-full border-none focus:outline-0 bg-white mt-1 p-2  rounded-lg"
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm text-[#3A3A3A] font-medium">Email</label>
                    <select className="w-full border-none focus:outline-0 bg-white mt-1 p-2  rounded-lg">
                        <option>Select email</option>
                    </select>
                </div>

                {/* Gender */}
                <div>
                    <label className="block text-sm text-[#3A3A3A] font-medium">Gender</label>
                    <select className="w-full border-none focus:outline-0 bg-white mt-1 p-2  rounded-lg">
                        <option value={""} >Select gender</option>
                        <option value={"male"} >Male</option>
                        <option value={"female"} >Female</option>
                    </select>
                </div>

                {/* Facebook ID Link */}
                <div>
                    <label className="block text-sm text-[#3A3A3A] font-medium">Facebook ID Link</label>
                    <select className="w-full border-none focus:outline-0 bg-white mt-1 p-2  rounded-lg">
                        <option>Select Facebook link</option>
                    </select>
                </div>

                {/* City */}
                <div>
                    <label className="block text-sm text-[#3A3A3A] font-medium">City</label>
                    <input
                        type="text"
                        placeholder="Enter city"
                        className="w-full border-none focus:outline-0 bg-white mt-1 p-2  rounded-lg"
                    />
                </div>

                {/* Location */}
                <div className="col-span-2">
                    <label className="block  text-sm text-[#3A3A3A] font-medium">Location</label>
                    <select className="w-full border-none focus:outline-0 bg-white mt-1 p-2  rounded-lg">
                        <option>Select location</option>
                    </select>
                </div>
            </div>

            {/* Details Address */}
            <div className="mt-4">
                <label className="block text-sm text-[#3A3A3A] font-medium">Details Address</label>
                <textarea
                    placeholder="Write your details address here"
                    className="w-full mt-1 p-2 border-none focus:outline-0 bg-white rounded-lg h-24"
                />
            </div>

            {/* Update Button */}
            <button className="mt-4 text-sm px-4 py-2 bg-[#64A8E8] text-white rounded-lg ">
                Update All Information
            </button>
        </div>
    );
};

export default ContactInformation;
