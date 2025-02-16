import { BsPersonFill } from 'react-icons/bs';
import { FaBook, FaChalkboardTeacher, FaClock, FaDollarSign, FaMapMarkerAlt } from 'react-icons/fa';
import { IoMdCalendar } from 'react-icons/io';

const PostedJobPage = () => {
    return (
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
    );
};

export default PostedJobPage;