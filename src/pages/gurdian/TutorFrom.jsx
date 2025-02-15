import React from 'react'

const TutorFrom = () => {
    return (
        <div className='flex lg:gap-12 h-[80vh] overflow-y-scroll  ' >
            <div>
                <img src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1739631555/10716587_4544309_1_gbsppz.png" alt="" />
            </div>
            <div className="w-full mx-auto p-6 bg-blue-50 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-blue-600">Need Tutor?</h2>
                <p className="text-gray-600 mb-1">Please Give Us Details</p>
                <form className="space-y-1">
                    <div>
                        <label className="block text-gray-700">Job Title*</label>
                        <input type="text" className="w-full p-1 border rounded-md" placeholder="Enter your job title" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Tuition Type*</label>
                        <select className="w-full p-1 border rounded-md">
                            <option>Home Tutoring</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700">Select Class*</label>
                        <select className="w-full p-1 border rounded-md">
                            <option>HSC</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700">Salary*</label>
                        <input type="text" className="w-full p-1 border rounded-md" placeholder="8000BDT" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Subject*</label>
                        <input type="text" className="w-full p-1 border rounded-md" placeholder="Math, English, Bangla" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Location*</label>
                        <input type="text" className="w-full p-1 border rounded-md" placeholder="Mirpur-10" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Tutoring Time*</label>
                        <input type="text" className="w-full p-1 border rounded-md" placeholder="05:00PM" />
                    </div>
                    <button className="px-5 my-3 bg-[#64A8E8] text-white py-2 rounded-md ">Continue →</button>
                </form>
            </div>
        </div>
    )
}

export default TutorFrom
