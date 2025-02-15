import React from 'react';

const AdditionalDetails = () => {
    return (
        <div className="bg-[#F1F8FF] p-6 h-[70vh]  overflow-x-scroll rounded-lg shadow-md w-full">
            <h2 className="text-lg font-bold text-[#141414] mb-4">Additional Details</h2>

            {/* Your Profession */}
            <div>
                <label className="block text-[#3A3A3A] text-sm font-medium">Your Profession</label>
                <input
                    type="text"
                    placeholder="Enter your profession"
                    className="w-full bg-white mt-1 p-2 border-none focus:outline-0 rounded-lg"
                />
            </div>

            {/* How did you hear about us? */}
            <div className="mt-4">
                <label className="block text-sm text-[#3A3A3A]  font-medium">
                    How did you hear about us:
                </label>
                <input
                    type="text"
                    placeholder=""
                    className="w-full mt-1 border-none focus:outline-0 bg-white p-2 border rounded-lg"
                />
                <div className="mt-2 space-y-2 bg-[#F1F8FF] ">
                    <div className="flex items-center">
                        <input type="radio" name="referral" className="mr-2 bg-[#F1F8FF] " />
                        <span>From Friends and Family</span>
                    </div>
                    <div className="flex items-center">
                        <input type="radio" name="referral" className="mr-2 bg-[#F1F8FF] " />
                        <span>From Facebook</span>
                    </div>
                    <div className="flex items-center">
                        <input type="radio" name="referral" className="mr-2 bg-[#F1F8FF] " />
                        <span>From Google</span>
                    </div>
                    <div className="flex items-center">
                        <input type="radio" name="referral" className="mr-2 bg-[#F1F8FF] " />
                        <span>From Shop</span>
                    </div>
                    <div className="flex items-center">
                        <input type="radio" name="referral" className="mr-2 bg-[#F1F8FF] " />
                        <span>Others</span>
                    </div>
                </div>
            </div>

            {/* Additional Details */}
            <h2 className="text-lg font-bold mt-6 mb-4 text-[#141414]  ">Additional Details</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                    <label className="block text-sm text-[#3A3A3A] font-medium">Name</label>
                    <input
                        type="text"
                        placeholder="Enter name"
                        className="w-full border-none focus:outline-0 bg-white mt-1 p-2 border rounded-lg"
                    />
                </div>

                {/* Contact Number */}
                <div>
                    <label className="block text-[#3A3A3A] text-sm font-medium">Contact Number</label>
                    <input
                        type="text"
                        placeholder="Enter contact number"
                        className="w-full border-none focus:outline-0 bg-white mt-1 p-2 border rounded-lg"
                    />
                </div>

                {/* Relation */}
                <div>
                    <label className="block text-[#3A3A3A] text-sm font-medium">Relation</label>
                    <input
                        type="text"
                        placeholder="Enter relation"
                        className="w-full border-none focus:outline-0 bg-white mt-1 p-2 border rounded-lg"
                    />
                </div>

                {/* Full Address */}
                <div>
                    <label className="block text-[#3A3A3A] text-sm font-medium">Full Address</label>
                    <input
                        type="text"
                        placeholder="Enter full address"
                        className="w-full border-none focus:outline-0 bg-white mt-1 p-2 border rounded-lg"
                    />
                </div>
            </div>

            {/* Update Button */}
            <button className="mt-4 px-4 py-2 bg-[#64A8E8] text-sm font-medium text-white rounded-lg ">
                Update All Information
            </button>
        </div>
    );
};

export default AdditionalDetails;
