import { useState } from "react";

const JobRequest = () => {
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

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
            date: "2024-02-10", // Example date field
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
            date: "2024-02-12", // Example date
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
            date: "2024-02-12", // Example date
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
            date: "2024-02-12", // Example date
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
            date: "2024-02-12", // Example date
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
            date: "2024-02-12", // Example date
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
            date: "2024-02-12", // Example date
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
            date: "2024-02-12", // Example date
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
            date: "2024-02-12", // Example date
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
            date: "2024-02-12", // Example date
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
            date: "2024-02-12", // Example date
        },
    ];

    // Initialize filteredData with all data on first render
    useState(() => {
        setFilteredData(data);
    }, []);

    const handleSearch = () => {
        const filtered = data.filter((item) => {
            if (fromDate && new Date(item.date) < new Date(fromDate)) return false;
            if (toDate && new Date(item.date) > new Date(toDate)) return false;
            return true;
        });
        setFilteredData(filtered);
        setCurrentPage(1); // Reset to the first page after filtering
    };

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const currentData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handlePageChange = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    return (
        <>
            <div className="flex items-center gap-4 mb-4">
                <label className="text-sm font-medium">From Date:</label>
                <input
                    type="date"
                    className="border rounded-md p-2 text-sm"
                    value={fromDate}
                    onChange={(e) => setFromDate(e.target.value)}
                />
                <label className="text-sm font-medium">To Date:</label>
                <input
                    type="date"
                    className="border rounded-md p-2 text-sm"
                    value={toDate}
                    onChange={(e) => setToDate(e.target.value)}
                />
                <button
                    onClick={handleSearch}
                    className="px-4 py-2 bg-[#F1F8FF]  rounded-md text-black "
                >
                    Search
                </button>
            </div>

            <div className="overflow-x-scroll overflow-y-scroll p-2 h-[60vh] ">
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
                            <th className="p-3 text-left">Date</th>
                            <th className="p-3 text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentData.map((item, index) => (
                            <tr key={index} className="border-b">
                                <td className="p-3">{item.jobTitle}</td>
                                <td className="p-3">{item.guardianName}</td>
                                <td className="p-3">{item.tuitionType}</td>
                                <td className="p-3">{item.subject}</td>
                                <td className="p-3">{item.location}</td>
                                <td className="p-3">{item.salary}</td>
                                <td className="p-3">{item.class}</td>
                                <td className="p-3">{item.tutoringTime}</td>
                                <td className="p-3">{item.preferredTutor}</td>
                                <td className="p-3">{item.date}</td>
                                <td className="p-3 cursor-pointer ">...</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {
                currentData.length<0 && (
                    <h1>Data not found</h1>
                )
            }

            <div className="flex justify-end items-center mt-4">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-[#F1F8FF]  rounded-md text-black    disabled:bg-gray-300"
                >
                    Previous
                </button>
                <span className="text-sm">
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-[#F1F8FF]  rounded-md text-black    disabled:bg-gray-300"
                >
                    Next
                </button>
            </div>
        </>
    );
};

export default JobRequest;
