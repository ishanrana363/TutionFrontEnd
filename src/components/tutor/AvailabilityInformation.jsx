import { FaRegEye } from "react-icons/fa"; // Icon for input fields
import { MdWatchLater } from "react-icons/md";

const AvailabilityInformation = () => {
    return (
        <div className="max-w-3xl mx-auto p-4  rounded-lg ">
            {/* Section Title */}
            <h2 className="text-lg font-semibold mb-4">Availability Information</h2>

            {/* Grid Layout */}
            <div className="grid grid-cols-2 gap-4">
                {/* Tutoring Time */}
                <div>
                    <label className="block text-sm font-medium text-[#3A3A3A] mb-1 ">
                        Tutoring Time : To
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            className="w-full px-4 py-2 border-none focus:outline-0 bg-white cursor-pointer rounded-lg "
                        />
                        <MdWatchLater className="absolute right-3 top-3 text-gray-400" />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-[#3A3A3A] mb-1 ">
                        Tutoring Time : Form
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            className="w-full px-4 py-2 border-none focus:outline-0 bg-white cursor-pointer rounded-lg"
                        />
                        <MdWatchLater className="absolute right-3 top-3 text-gray-400" />
                    </div>
                </div>

                {/* City & Location */}
                <div>
                    <label className="block text-sm font-medium text-[#3A3A3A] mb-1 ">
                        City
                    </label>
                    <select className="w-full px-4 py-2 border-none focus:outline-0 bg-white cursor-pointer rounded-lg">
                        <option>Select City</option>
                    </select>
                </div>

                {/* location */}

                <div>
                    <label className="block text-sm font-medium text-[#3A3A3A] mb-1 ">
                        Your Location
                    </label>
                    <select className="w-full px-4 py-2 border-none focus:outline-0 bg-white cursor-pointer rounded-lg">
                        <option>Select Location</option>
                    </select>
                </div>

                {/* salary */}

                <div>
                    <label className="block text-sm font-medium text-[#3A3A3A] mb-1 ">
                        Expected salary
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            className="w-full px-4 py-2 border-none focus:outline-0 bg-white cursor-pointer rounded-lg"
                        />
                        <MdWatchLater className="absolute right-3 top-3 text-gray-400 mb-1 " />
                    </div>
                </div>
                {/* Tutoring Styles */}
                <div>
                    <label className="block text-sm font-medium text-[#3A3A3A] mb-1 ">
                        Tutoring Styles
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
            {/* Preferred Locations */}
            <div>
                <div className="my-4" >
                    <label className="block text-sm font-medium text-[#3A3A3A] mb-1 ">
                        Preferred Locations
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


            <div>
                <div className="my-4" >
                    <label className="block text-sm font-medium text-[#3A3A3A] mb-1 ">
                        Tutoring Method
                    </label>
                    <div className="relative">
                        <textarea
                            rows={7}
                            placeholder="E.g: I base my teaching style on each students individual needs...................."
                            className="w-full px-10 py-10 border-none focus:outline-0 bg-white cursor-pointer rounded-lg"
                        />
                    </div>
                </div>
            </div>


            {/* other information  */}

            <h1 className="text-[#141414] text-xl font-semibold mb-6 " >Others Information</h1>

            <div className="grid grid-cols-2 gap-4">
                {/* Tutoring Time */}
                <div>
                    <label className="block text-sm font-medium text-[#3A3A3A] mb-1 ">
                        Preferable Categories
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            className="w-full px-4 py-2 border-none focus:outline-0 bg-white cursor-pointer rounded-lg "
                        />
                        <MdWatchLater className="absolute right-3 top-3 text-gray-400" />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-[#3A3A3A] mb-1 ">
                        Preferable Classes
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            className="w-full px-4 py-2 border-none focus:outline-0 bg-white cursor-pointer rounded-lg"
                        />
                        <MdWatchLater className="absolute right-3 top-3 text-gray-400" />
                    </div>
                </div>

                <div className="relative">
                    <label className="block text-sm font-medium text-[#3A3A3A] mb-1 ">
                        Preferable Subject
                    </label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 border-none focus:outline-0 bg-white cursor-pointer rounded-lg"
                    />
                    <MdWatchLater className="absolute right-3 top-9 text-gray-400 mb-1 " />
                </div>



                <div className="relative">
                    <label className="block text-sm font-medium text-[#3A3A3A] mb-1 ">
                        Place of Tutoring
                    </label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 border-none focus:outline-0 bg-white cursor-pointer rounded-lg"
                    />
                    <MdWatchLater className="absolute right-3 top-9 text-gray-400 mb-1 " />
                </div>



            </div>

            {/* Experience */}

            <div className="my-4" >
                <h1 className="text-[#141414] text-xl font-semibold " >Experience</h1>

                <div className="relative mt-2 ">
                    <label className="block text-sm font-medium text-[#3A3A3A] mb-1 ">
                        Total Experience
                    </label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 border-none focus:outline-0 bg-white cursor-pointer rounded-lg"
                    />
                    <MdWatchLater className="absolute right-3 top-9 text-gray-400 mb-1 " />
                </div>

                <div className="relative mt-2 ">
                    <label className="block text-sm font-medium text-[#3A3A3A] mb-1 ">
                        Experience Details
                    </label>
                    <textarea
                        type="text"
                        rows={7}
                        className="w-full px-4 py-2 border-none focus:outline-0 bg-white cursor-pointer rounded-lg"
                    />

                </div>
            </div>



        </div>
    );
};

export default AvailabilityInformation;
