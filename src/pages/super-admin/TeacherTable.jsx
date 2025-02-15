import { MoreVertical } from 'lucide-react';
import React, { useState } from 'react'

const TeacherTable = () => {
    const teachers = [
        { name: "Khalid Ahmed Shanto", tutorId: "#12545", email: "example123@gmail.com", phone: "01830376175" },
        { name: "Khalid Ahmed Shanto", tutorId: "#12545", email: "example123@gmail.com", phone: "01830376175" },
        { name: "Khalid Ahmed Shanto", tutorId: "#12545", email: "example123@gmail.com", phone: "01830376175" },
        { name: "Khalid Ahmed Shanto", tutorId: "#12545", email: "example123@gmail.com", phone: "01830376175" },
        { name: "Khalid Ahmed Shanto", tutorId: "#12545", email: "example123@gmail.com", phone: "01830376175" },
        { name: "Khalid Ahmed Shanto", tutorId: "#12545", email: "example123@gmail.com", phone: "01830376175" },
        { name: "Khalid Ahmed Shanto", tutorId: "#12545", email: "example123@gmail.com", phone: "01830376175" },
        { name: "Khalid Ahmed Shanto", tutorId: "#12545", email: "example123@gmail.com", phone: "01830376175" }
    ];
    const [openMenu, setOpenMenu] = useState(null);

    return (
        <>
            <h1 className=' text-[#64A8E8] font-bold text-[32px] ' >Tutor List</h1>
            <div className="overflow-x-scroll overflow-y-scroll h-[50vh] ">
                <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
                    <thead>
                        <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-left">Teacher Name</th>
                            <th className="py-3 px-6 text-left">Tutor ID</th>
                            <th className="py-3 px-6 text-left">Email</th>
                            <th className="py-3 px-6 text-left">Phone Number</th>
                            <th className="py-3 px-6 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700 text-sm font-light">
                        {teachers.map((teacher, index) => (
                            <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                                <td className="py-3 px-6 text-left">{teacher.name}</td>
                                <td className="py-3 px-6 text-left">{teacher.tutorId}</td>
                                <td className="py-3 px-6 text-left">{teacher.email}</td>
                                <td className="py-3 px-6 text-left">{teacher.phone}</td>
                                <td className="py-3 px-6 text-center relative">
                                    <button
                                        onClick={() => setOpenMenu(openMenu === index ? null : index)}
                                        className="p-2 rounded-full hover:bg-gray-200"
                                    >
                                        <MoreVertical className="w-5 h-5 text-gray-600" />
                                    </button>
                                    {openMenu === index && (
                                        <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 shadow-lg rounded-md">
                                            <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">View</button>
                                            <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Edit</button>
                                            <button className="block w-full text-left px-4 py-2 text-red-500 hover:bg-red-100">Delete</button>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default TeacherTable


