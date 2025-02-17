import { FaRegEye } from "react-icons/fa"; // Icon for input fields

const AvailabilityInformation = () => {
    return (
        <div className="max-w-3xl mx-auto p-4 bg-blue-50 rounded-lg shadow-md">
            {/* Section Title */}
            <h2 className="text-lg font-semibold mb-4">Availability Information</h2>

            {/* Grid Layout */}
            <div className="grid grid-cols-2 gap-4">
                {/* Tutoring Time */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Tutoring Time : To
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            className="w-full px-4 py-2 border-none focus:outline-0 bg-white cursor-pointer rounded-lg "
                        />
                        <FaRegEye className="absolute right-3 top-3 text-gray-400" />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Tutoring Time : Form
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            className="w-full px-4 py-2 border-none focus:outline-0 bg-white cursor-pointer rounded-lg"
                        />
                        <FaRegEye className="absolute right-3 top-3 text-gray-400" />
                    </div>
                </div>

                {/* City & Location */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        City
                    </label>
                    <select className="w-full px-4 py-2 border-none focus:outline-0 bg-white cursor-pointer rounded-lg">
                        <option>Select City</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Your Location
                    </label>
                    <select className="w-full px-4 py-2 border-none focus:outline-0 bg-white cursor-pointer rounded-lg">
                        <option>Select Location</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default AvailabilityInformation;
