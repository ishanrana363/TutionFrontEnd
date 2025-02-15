import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";

const JobRequest = () => {
    const [menuIndex, setMenuIndex] = useState(null);

    const data = [
        {
            jobTitle: "Need Bangla Medium Teacher",
            guardianName: "Muskan Maha",
            tuitionType: "Home Tutoring",
            subject: "Bangla, English, Math...",
            location: "Mirpur 10",
            salary: "8000BDT",
            class: "HSC",
            tutoringTime: "05:00PM",
            preferredTutor: "Male",
        },
        {
            jobTitle: "Need Bangla Medium Teacher",
            guardianName: "Muskan Maha",
            tuitionType: "Home Tutoring",
            subject: "Bangla, English, Math...",
            location: "Mirpur 10",
            salary: "8000BDT",
            class: "HSC",
            tutoringTime: "05:00PM",
            preferredTutor: "Female",
        },
        {
            jobTitle: "Need Bangla Medium Teacher",
            guardianName: "Muskan Maha",
            tuitionType: "Home Tutoring",
            subject: "Bangla, English, Math...",
            location: "Mirpur 10",
            salary: "8000BDT",
            class: "HSC",
            tutoringTime: "05:00PM",
            preferredTutor: "Female",
        },
    ];

    return (
        <div className="overflow-x-auto p-2">
            <table className="min-w-full border text-sm border-gray-300 shadow-md rounded-lg">
                <thead>
                    <tr className="bg-gray-200 text-gray-700">
                        <th className="p-3 text-left">Job Title</th>
                        <th className="p-3 text-left">Guardian Name</th>
                        <th className="p-3 text-left">Tuition Type</th>
                        <th className="p-3 text-left">Subject</th>
                        <th className="p-3 text-left">Location</th>
                        <th className="p-3 text-left">Salary</th>
                        <th className="p-3 text-left">Class</th>
                        <th className="p-3 text-left">Tutoring Time</th>
                        <th className="p-3 text-left">Preferred Tutor</th>
                        <th className="p-3 text-left">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index} className="border-t text-sm hover:bg-gray-100">
                            <td className="p-3">{item.jobTitle}</td>
                            <td className="p-3">{item.guardianName}</td>
                            <td className="p-3">{item.tuitionType}</td>
                            <td className="p-3">{item.subject}</td>
                            <td className="p-3">{item.location}</td>
                            <td className="p-3">{item.salary}</td>
                            <td className="p-3">{item.class}</td>
                            <td className="p-3">{item.tutoringTime}</td>
                            <td className="p-3">{item.preferredTutor}</td>
                            <td className="p-3 relative">
                                <button
                                    className="text-gray-500 hover:text-gray-700"
                                    onClick={() => setMenuIndex(menuIndex === index ? null : index)}
                                >
                                    ⋮
                                </button>
                                {menuIndex === index && (
                                    <div className="absolute z-40 right-0 mt-7 w-16 flex border rounded-lg bg-green-400  shadow-lg">
                                        <button className="block  text-left px-2 py-2  text-sm "> <GrUpdate /></button>
                                        <button className="block  text-left px-2 py-2 text-sm "> <FaTrash /> </button>
                                    </div>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default JobRequest;
