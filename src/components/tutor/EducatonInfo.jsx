import React from 'react'
import { MdWatchLater } from 'react-icons/md'

const EducatonInfo = () => {
    return (
        <>
            <h1 className=' text-[#141414] font-bold text-xl ' >Educational Information</h1>
            <div>
                <div className="grid grid-cols-2 gap-4">
                    {/* Level Of Education */}
                    <div>
                        <label className="block text-sm font-medium text-[#3A3A3A] mb-1 ">
                            Level Of Education
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                className="w-full px-4 py-2 border-none focus:outline-0 bg-white cursor-pointer rounded-lg "
                            />
                            <MdWatchLater className="absolute right-3 top-3 text-gray-400" />
                        </div>
                    </div>
                    {/* Curriculum */}
                    <div>
                        <label className="block text-sm font-medium text-[#3A3A3A] mb-1 ">
                            Curriculum
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                className="w-full px-4 py-2 border-none focus:outline-0 bg-white cursor-pointer rounded-lg"
                            />
                            <MdWatchLater className="absolute right-3 top-3 text-gray-400" />
                        </div>
                    </div>


                    {/* Exam / Degree Title*/}
                    <div>
                        <label className="block text-sm font-medium text-[#3A3A3A] mb-1 ">
                            Exam / Degree Title
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                className="w-full px-4 py-2 border-none focus:outline-0 bg-white cursor-pointer rounded-lg"
                            />
                            <MdWatchLater className="absolute right-3 top-3 text-gray-400" />
                        </div>
                    </div>

                    {/* {/* Id Card/} */}

                    <div>
                        <label className="block text-sm font-medium text-[#3A3A3A] mb-1 ">
                            Id Card
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                className="w-full px-4 py-2 border-none focus:outline-0 bg-white cursor-pointer rounded-lg"
                            />
                            <MdWatchLater className="absolute right-3 top-3 text-gray-400" />
                        </div>
                    </div>

                    {/* Major / Group */}

                    <div>
                        <label className="block text-sm font-medium text-[#3A3A3A] mb-1 ">
                            Major / Group
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                className="w-full px-4 py-2 border-none focus:outline-0 bg-white cursor-pointer rounded-lg"
                            />
                            <MdWatchLater className="absolute right-3 top-3 text-gray-400 mb-1 " />
                        </div>
                    </div>


                    {/* Result*/}
                    <div>
                        <label className="block text-sm font-medium text-[#3A3A3A] mb-1 ">
                            Result
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                className="w-full px-4 py-2 border-none focus:outline-0 bg-white cursor-pointer rounded-lg"
                            />
                            <MdWatchLater className="absolute right-3 top-3 text-gray-400" />
                        </div>
                    </div>


                    {/* institure*/}
                    <div>
                        <label className="block text-sm font-medium text-[#3A3A3A] mb-1 ">
                            Institute
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                className="w-full px-4 py-2 border-none focus:outline-0 bg-white cursor-pointer rounded-lg"
                            />
                            <MdWatchLater className="absolute right-3 top-3 text-gray-400" />
                        </div>

                    </div>


                </div>
                <div className='flex justify-between items-center my-6 ' >
                    <div>
                        <div className='my-2 flex items-center gap-3 ' >
                            <input type="checkbox" className="w-4 h-4 text-blue-500 mt-1 rounded border-gray-300 focus:ring-blue-500" />
                            <label htmlFor="">Yes</label>
                        </div>
                        <div className=' flex items-center gap-3 ' >
                            <input type="checkbox" className="w-4 h-4 text-blue-500 rounded border-gray-300 focus:ring-blue-500" />
                            <label htmlFor="">No</label>
                        </div>
                    </div>
                    <div className='flex gap-3.5 ' >
                        <div>
                            <label className="block text-sm font-medium text-[#3A3A3A] mb-1 ">
                                From Date
                            </label>
                            <div className="relative">
                                <input
                                    type="date"
                                    className=" px-4 py-2 border-none focus:outline-0 bg-white cursor-pointer rounded-lg"
                                />
                            </div>
                        </div>
                        <div className='' >
                            <label className="block text-sm font-medium text-[#3A3A3A] mb-1 ">
                                To  Date
                            </label>
                            <div className="relative">
                                <input
                                    type="date"
                                    className=" px-4 py-2 border-none focus:outline-0 bg-white cursor-pointer rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-end' >
                <button className='bg-[#64A8E8] py-2 px-4 rounded-xl shadow text-white  ' >Update All Information</button>
            </div>
        </>
    )
}

export default EducatonInfo
