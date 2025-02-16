import React from 'react';

const PhoneNumberUpdate = () => {
    return (
        <div>
            <h2 className="text-xl font-semibold text-[#141414] mb-4">Update Number</h2>
            <input
                type="text"
                className="w-full px-3 py-2 focus:outline-none border-none bg-white rounded-md"
            />
            <button className="mt-4 font-medium px-4 py-2 bg-[#64A8E8] text-white rounded-md flex items-center space-x-2">
                Update →
            </button>
        </div>
    );
};

export default PhoneNumberUpdate;