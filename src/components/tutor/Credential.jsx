import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const Credential = () => {
    const [certificates, setCertificates] = useState([
        "https://res.cloudinary.com/dj2edy2rg/image/upload/v1739844801/Frame_2147224972_cvdjwv.png",
        "https://res.cloudinary.com/dj2edy2rg/image/upload/v1739844801/Frame_2147224972_cvdjwv.png"
    ]);
    return (
        <div>
            <div className="p-6  rounded-lg ">
                {/* Uploaded Certificates */}
                <div className="flex gap-4 mb-4">
                    {certificates.map((cert, index) => (
                        <div key={index} className="w-[330px] h-[200px] border-2 border-blue-500 rounded-lg overflow-hidden">
                            <img src={cert} alt={`Certificate ${index + 1}`} className="w-full h-full object-cover" />
                        </div>
                    ))}
                    {/* Upload Placeholder */}
                    <div className="w-[330px] h-[200px] flex items-center justify-center bg-gray-200 border-dashed border-2 border-gray-400 rounded-lg cursor-pointer">
                        <FaPlus className="text-gray-600 text-4xl" />
                    </div>
                </div>
                {/* Certificate Categories */}
                <div className='my-8 flex items-start gap-12   ' >
                    <div className="text-sm text-gray-700">
                        <ul>
                            <li>• SSC/ O Level Marksheets/ Certificate</li>
                            <li>• HSC/ A Level Marksheets/ Certificate</li>
                            <li>• Others</li>

                        </ul>

                    </div>
                    <div className="text-sm text-gray-700" >
                        <ul>
                            <li>• Admission Test Marksheets/ Certificate</li>
                            <li>• NID/ Passport/ Birth Certificate</li>
                        </ul>
                    </div>
                </div>
                {/* Update Button */}
                <div className="mt-4 text-right">
                    <button className="px-4 py-2 bg-[#64A8E8] text-white rounded-lg shadow transition">
                        Update All Information
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Credential;