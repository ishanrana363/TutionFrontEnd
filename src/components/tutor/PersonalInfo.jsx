import { MdWatchLater } from 'react-icons/md';

const PersonalInfo = () => {
    return (
        <>
            {/* Primary Incomation */}
            <div>
                <h1 className=' text-[#141414] font-semibold  text-xl my-4  ' >Primary Incomation</h1>
                <div>
                    <div className="grid grid-cols-2 gap-4">
                        {/* Identity Type */}
                        <div>
                            <label className="block text-sm font-medium text-[#3A3A3A] mb-1 ">
                                Identity Type
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 border-none focus:outline-0 bg-white cursor-pointer rounded-lg "
                                />
                                <MdWatchLater className="absolute right-3 top-3 text-gray-400" />
                            </div>
                        </div>

                        {/* Identity Number */}

                        <div>
                            <label className="block text-sm font-medium text-[#3A3A3A] mb-1 ">
                                Identity Number
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 border-none focus:outline-0 bg-white cursor-pointer rounded-lg"
                                />

                            </div>
                        </div>


                        {/* Religion */}

                        <div>
                            <label className="block text-sm font-medium text-[#3A3A3A] mb-1 ">
                                Religion
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 border-none focus:outline-0 bg-white cursor-pointer rounded-lg"
                                />
                                <MdWatchLater className="absolute right-3 top-3 text-gray-400" />
                            </div>
                        </div>

                        {/* Nationality */}

                        <div>
                            <label className="block text-sm font-medium text-[#3A3A3A] mb-1 ">
                                Nationality
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
                </div>
            </div>
            {/* Full Address */}
            <div>
                <div>
                    <h1 className=' text-[#141414] font-semibold  text-xl my-4  ' >Full Address</h1>
                    <div className='flex gap-10 ' >
                        <div className="relative mt-2 w-full ">

                            <textarea
                                type="text"
                                placeholder='E.g : Level 2, Rangs Nahraz, House 14, Road: Shahajalal avenue, Sector 4, Uttara'
                                rows={7}
                                className="w-full px-4 py-2 border-none focus:outline-0 bg-white cursor-pointer rounded-lg"
                            />

                        </div>
                        <div className='' >
                            <h1 className=' text-[#141414] font-semibold  text-xl   ' >Gender</h1>
                            <div className='my-2 flex items-center gap-3 ' >
                                <input type="checkbox" className="w-4 h-4 text-blue-500 mt-1 rounded border-gray-300 focus:ring-blue-500" />
                                <label htmlFor="">Male</label>
                            </div>
                            <div className=' flex items-center gap-3 ' >
                                <input type="checkbox" className="w-4 h-4 text-blue-500 rounded border-gray-300 focus:ring-blue-500" />
                                <label htmlFor="">Female</label>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-3.5 my-2 ' >
                        <div className='w-full' >
                            <label className="block text-sm font-medium text-[#3A3A3A] mb-1 ">
                                Date Of Birth
                            </label>
                            <div className="relative">
                                <input
                                    type="date"
                                    className=" w-full px-4 py-2 border-none focus:outline-0 bg-white cursor-pointer rounded-lg"
                                />
                            </div>
                        </div>
                        {/* Additional Number */}
                        <div className='w-full' >
                            <label className="block text-sm font-medium text-[#3A3A3A] mb-1 ">
                                Additional Number
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 border-none focus:outline-0 bg-white cursor-pointer rounded-lg "
                                />
                                {/* <MdWatchLater className="absolute right-3 top-3 text-gray-400" /> */}
                            </div>
                        </div>
                    </div>

                    <div className='flex gap-3.5 my-2 ' >

                        {/* Facebook Profile URL */}
                        <div className='w-full' >
                            <label className="block text-sm font-medium text-[#3A3A3A] mb-1 ">
                                Additional Number
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 border-none focus:outline-0 bg-white cursor-pointer rounded-lg "
                                />
                                {/* <MdWatchLater className="absolute right-3 top-3 text-gray-400" /> */}
                            </div>
                        </div>
                        {/* LinkedIn Profile URL */}
                        <div className='w-full' >
                            <label className="block text-sm font-medium text-[#3A3A3A] mb-1 ">
                                LinkedIn Profile URL
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 border-none focus:outline-0 bg-white cursor-pointer rounded-lg "
                                />
                                {/* <MdWatchLater className="absolute right-3 top-3 text-gray-400" /> */}
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            {/* Emergency Information */}
            <div>
                <h1><h1 className=' text-[#141414] font-semibold  text-xl my-4  ' >Emergency Information</h1></h1>
                <div>
                    <div className="grid grid-cols-2 gap-4">
                        {/* Father’s Name */}
                        <div>
                            <label className="block text-sm font-medium text-[#3A3A3A] mb-1 ">
                            Father’s Name
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 border-none focus:outline-0 bg-white cursor-pointer rounded-lg "
                                />
                            </div>
                        </div>

                        {/* Phone Number */}

                        <div>
                            <label className="block text-sm font-medium text-[#3A3A3A] mb-1 ">
                                Phone Number
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 border-none focus:outline-0 bg-white cursor-pointer rounded-lg"
                                />

                            </div>
                        </div>


                        {/* Mother’s Name */}

                        <div>
                            <label className="block text-sm font-medium text-[#3A3A3A] mb-1 ">
                                Mother’s Name
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 border-none focus:outline-0 bg-white cursor-pointer rounded-lg"
                                />
                            </div>
                        </div>

                        {/* Phone Number */}

                        <div>
                            <label className="block text-sm font-medium text-[#3A3A3A] mb-1 ">
                                Phone Number
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 border-none focus:outline-0 bg-white cursor-pointer rounded-lg"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className=' flex justify-end my-2.5 ' >
                <button className='bg-[#64A8E8] text-white shadow rounded-xl px-4 py-2 ' >Update All Information</button>
            </div>
        </>
    );
};

export default PersonalInfo;