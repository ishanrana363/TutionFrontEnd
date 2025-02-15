import React from 'react';

const ContactInformation = () => {
    return (
        <div className="bg-[#F1F8FF] p-6 rounded-lg overflow-y-scroll h-[60vh] shadow-md w-full">
            <h2 className="text-lg font-semibold mb-4">Contact Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                    <label className="block text-sm font-medium">Name</label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full mt-1 p-2 border rounded-lg"
                    />
                </div>

                {/* Contact Number */}
                <div>
                    <label className="block text-sm font-medium">Contact number</label>
                    <input
                        type="text"
                        placeholder="Enter contact number"
                        className="w-full mt-1 p-2 border rounded-lg"
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-medium">Email</label>
                    <select className="w-full mt-1 p-2 border rounded-lg">
                        <option>Select email</option>
                    </select>
                </div>

                {/* Gender */}
                <div>
                    <label className="block text-sm font-medium">Gender</label>
                    <select className="w-full mt-1 p-2 border rounded-lg">
                        <option value={""} >Select gender</option>
                        <option value={"male"} >Male</option>
                        <option value={"female"} >Female</option>
                    </select>
                </div>

                {/* Facebook ID Link */}
                <div>
                    <label className="block text-sm font-medium">Facebook ID Link</label>
                    <select className="w-full mt-1 p-2 border rounded-lg">
                        <option>Select Facebook link</option>
                    </select>
                </div>

                {/* City */}
                <div>
                    <label className="block text-sm font-medium">City</label>
                    <input
                        type="text"
                        placeholder="Enter city"
                        className="w-full mt-1 p-2 border rounded-lg"
                    />
                </div>

                {/* Location */}
                <div className="col-span-2">
                    <label className="block text-sm font-medium">Location</label>
                    <select className="w-full mt-1 p-2 border rounded-lg">
                        <option>Select location</option>
                    </select>
                </div>
            </div>

            {/* Details Address */}
            <div className="mt-4">
                <label className="block text-sm font-medium">Details Address</label>
                <textarea
                    placeholder="Write your details address here"
                    className="w-full mt-1 p-2 border rounded-lg h-24"
                />
            </div>

            {/* Update Button */}
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Update All Information
            </button>
        </div>
    );
};

export default ContactInformation;
