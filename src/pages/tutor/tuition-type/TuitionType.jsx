import { useState } from "react";
import { FaChalkboardTeacher, FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function TuitionType() {
    const [isOpen, setIsOpen] = useState(true);
    const [dateOpen, setDateOpen] = useState(true);
    const [amountOpen, setAmountOpen] = useState(true); // Separate state for amount section
    const [categories, setCategories] = useState(true);
    const [genders, setGenders] = useState(true);
    const [tutorGender, setTutorGender] = useState(true);

    const tuitionOptions = [
        "Home Tutoring",
        "Online Tutoring",
        "Group Tutoring",
        "Package Tutoring",
    ];
    const gender = [
        "Male",
        "Female",
    ];

    const category = [
        "Bangla",
        "English",
        "Religious Studies",
        "Admission Test",
        "Arts",
        "Test Preparation",
        "Professional Skill Development",
        "Uni Help",
        "Madrasa Medium",
        "Special Child Education",
        "Language"

    ];

    return (
        <div className="flex lg:flex-row " >
            <div className="  " >
                {/* Search by Date Section */}
                <div className="w-full max-w-sm my-3 p-4 bg-blue-50 rounded-lg shadow-md">
                    <div
                        className="flex justify-between items-center cursor-pointer text-blue-600 font-semibold text-lg"
                        onClick={() => setDateOpen(!dateOpen)}
                    >
                        <span className="text-[#64A8E8] text-xl">Date</span>
                        {dateOpen ? <FaChevronUp className="text-[#566672]" /> : <FaChevronDown className="text-[#566672]" />}
                    </div>

                    <hr className="my-2 border-gray-300" />

                    {dateOpen && (
                        <div className="space-y-3">
                            <h1 className="font-medium text-[#667085]">Search by Date</h1>
                            <div className="flex gap-2.5">
                                <input placeholder="Posted Date From" type="text" className="border-2 py-1 px-1 rounded-md border-[#64A8E8] focus:outline-0 w-full" />
                                <input placeholder="Posted Date To" type="text" className="border-2 py-1 px-1 rounded-md border-[#64A8E8] focus:outline-0 w-full" />
                            </div>
                        </div>
                    )}
                </div>

                {/* Tuition Type Section */}
                <div className="w-full max-w-sm p-4 bg-blue-50 rounded-lg shadow-md">
                    <div
                        className="flex justify-between items-center cursor-pointer text-blue-600 font-semibold text-lg"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className="text-[#64A8E8] text-xl">Tuition type</span>
                        {isOpen ? <FaChevronUp className="text-[#566672]" /> : <FaChevronDown className="text-[#566672]" />}
                    </div>

                    <hr className="my-2 border-gray-300" />

                    {isOpen && (
                        <div className="space-y-3">
                            {tuitionOptions.map((option, index) => (
                                <label key={index} className="flex items-center justify-between text-gray-700">
                                    <span>{option}</span>
                                    <input type="checkbox" className="w-5 h-5 text-blue-500 rounded border-gray-300 focus:ring-blue-500" />
                                </label>
                            ))}
                        </div>
                    )}
                </div>

                {/* Search by amount */}
                <div className="w-full max-w-sm my-3 p-4 bg-blue-50 rounded-lg shadow-md">
                    <div
                        className="flex justify-between items-center cursor-pointer text-blue-600 font-semibold text-lg"
                        onClick={() => setAmountOpen(!amountOpen)} // Uses separate state
                    >
                        <span className="text-[#64A8E8] text-xl">Search by Amount</span>
                        {amountOpen ? <FaChevronUp className="text-[#566672]" /> : <FaChevronDown className="text-[#566672]" />}
                    </div>

                    <hr className="my-2 border-gray-300" />

                    {amountOpen && (
                        <div className="space-y-3">
                            <h1 className="font-medium text-[#667085]">Enter Amount Range</h1>
                            <div className="flex gap-2.5">
                                <input placeholder="Min" type="text" className="border-2 py-1 px-1 rounded-md border-[#64A8E8] focus:outline-0 w-full" />
                                <input placeholder="Max" type="text" className="border-2 py-1 px-1 rounded-md border-[#64A8E8] focus:outline-0 w-full" />
                            </div>
                            <div>
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    className="w-full max-w-md appearance-none h-2 bg-blue-500 rounded-lg outline-none cursor-pointer"
                                />
                            </div>
                        </div>
                    )}
                </div>

                {/* Search by Category */}
                <div className="w-full max-w-sm my-3 p-4 bg-blue-50 rounded-lg shadow-md">
                    <div
                        className="flex justify-between items-center cursor-pointer text-blue-600 font-semibold text-lg"
                        onClick={() => setCategories(!categories)} // Uses separate state
                    >
                        <span className="text-[#64A8E8] text-xl">Categories</span>
                        {categories ? <FaChevronUp className="text-[#566672]" /> : <FaChevronDown className="text-[#566672]" />}
                    </div>

                    <hr className="my-2 border-gray-300" />

                    {categories && (
                        <div className="space-y-3">
                            {category.map((option, index) => (
                                <label key={index} className="flex items-center justify-between text-gray-700">
                                    <span>{option}</span>
                                    <input type="checkbox" className="w-5 h-5 text-blue-500 rounded border-gray-300 focus:ring-blue-500" />
                                </label>
                            ))}
                        </div>
                    )}
                </div>

                {/* Search by Student gender */}
                <div className="w-full max-w-sm my-3 p-4 bg-blue-50 rounded-lg shadow-md">
                    <div
                        className="flex justify-between items-center cursor-pointer text-blue-600 font-semibold text-lg"
                        onClick={() => setGenders(!genders)} // Uses separate state
                    >
                        <span className="text-[#64A8E8] text-xl">Student Gender</span>
                        {genders ? <FaChevronUp className="text-[#566672]" /> : <FaChevronDown className="text-[#566672]" />}
                    </div>

                    <hr className="my-2 border-gray-300" />

                    {genders && (
                        <div className="space-y-3">
                            {gender.map((option, index) => (
                                <label key={index} className="flex items-center justify-between text-gray-700">
                                    <span>{option}</span>
                                    <input type="checkbox" className="w-5 h-5 text-blue-500 rounded border-gray-300 focus:ring-blue-500" />
                                </label>
                            ))}
                        </div>
                    )}
                </div>

                {/* Search by tutor gender */}
                <div className="w-full max-w-sm my-3 p-4 bg-blue-50 rounded-lg shadow-md">
                    <div
                        className="flex justify-between items-center cursor-pointer text-blue-600 font-semibold text-lg"
                        onClick={() => setTutorGender(!tutorGender)} // Uses separate state
                    >
                        <span className="text-[#64A8E8] text-xl">Tutor Gender</span>
                        {tutorGender ? <FaChevronUp className="text-[#566672]" /> : <FaChevronDown className="text-[#566672]" />}
                    </div>

                    <hr className="my-2 border-gray-300" />

                    {tutorGender && (
                        <div className="space-y-3">
                            {gender.map((option, index) => (
                                <label key={index} className="flex items-center justify-between text-gray-700">
                                    <span>{option}</span>
                                    <input type="checkbox" className="w-5 h-5 text-blue-500 rounded border-gray-300 focus:ring-blue-500" />
                                </label>
                            ))}
                        </div>
                    )}
                </div>

            </div>
            <div>
                <div className=" max-w-3xl  mx-auto p-5 bg-white shadow-md rounded-lg border border-gray-200">
                    <h2 className="text-xl font-semibold text-[#000000] mb-3">
                        Need English Medium (Cambridge) Tutor For Standard 1 Student - 5 Days/Week
                    </h2>
                    <div className='flex justify-between items-center mb-6 ' >
                        <div>
                            <div className="text-sm text-gray-600 mb-3">
                                <span className="font-semibold ml-2 ">Job ID :</span> 123645
                            </div>
                            <div className="flex items-start gap-2 p-2 rounded-lg w-fit">
                                <FaChalkboardTeacher className="text-[#4E83B5] text-lg mt-1.5 " />
                                <div>
                                    <p className="text-[#656A7B] text-sm">Tuition Type</p>
                                    <p className="text-[#2F3A4D] font-semibold">Home Tutoring</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-2 p-2 rounded-lg w-fit">
                                <FaChalkboardTeacher className="text-[#4E83B5] text-lg mt-1.5 " />
                                <div>
                                    <p className="text-[#656A7B] text-sm">Location</p>
                                    <p className="text-[#2F3A4D] font-semibold">Mirpur-10, Dhaka</p>
                                </div>
                            </div>
                        </div>


                        <div>
                            <div className="text-sm text-gray-600 mb-3">
                                <span className="font-semibold ml-2 ">Posted Date : 12/12/2023</span>
                            </div>
                            <div className="flex items-start gap-2 p-2 rounded-lg w-fit">
                                <FaChalkboardTeacher className="text-[#4E83B5] text-lg mt-1.5 " />
                                <div>
                                    <p className="text-[#656A7B] text-sm">Salary</p>
                                    <p className="text-[#2F3A4D] font-semibold">8000</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-2 p-2 rounded-lg w-fit">
                                <FaChalkboardTeacher className="text-[#4E83B5] text-lg mt-1.5 " />
                                <div>
                                    <p className="text-[#656A7B] text-sm">Tutoring Time</p>
                                    <p className="text-[#2F3A4D] font-semibold">5:00PM</p>
                                </div>
                            </div>
                        </div>


                        <div className='mt-7.5' >

                            <div className="flex items-start gap-2 p-2 rounded-lg w-fit">
                                <FaChalkboardTeacher className="text-[#4E83B5] text-lg mt-1.5 " />
                                <div>
                                    <p className="text-[#656A7B] text-sm">Subject</p>
                                    <p className="text-[#2F3A4D] font-semibold">Math, English, Bangla </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-2 p-2 rounded-lg w-fit">
                                <FaChalkboardTeacher className="text-[#4E83B5] text-lg mt-1.5 " />
                                <div>
                                    <p className="text-[#656A7B] text-sm">Posted Date</p>
                                    <p className="text-[#2F3A4D] font-semibold">20 Dec, 2024</p>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className="flex justify-between items-center gap-4">
                        <div>
                            <h1 className='flex items-center gap-3 ' > <img src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1739669977/Group_uw3fwy.png" alt="" /> <span className='font-bold' > <span className='text-[#00A65A]' >Male</span > <span className=' text-[#2F3A4D] ' >Tutor Preferred</span> </span></h1>
                        </div>
                        <div className='space-x-5' >
                            <button className="px-4 py-2 text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-100">
                                Direction
                            </button>
                            <button className="px-4 py-2  text-white rounded-lg bg-[#64A8E8]  ">
                                Apply For Job
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
