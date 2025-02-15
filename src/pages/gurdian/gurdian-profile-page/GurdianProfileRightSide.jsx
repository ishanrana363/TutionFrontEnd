import React from 'react'
import { FaUser } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const GurdianProfileRightSide = () => {
    const location = useLocation();
    const pathName = location.pathname;
    return (
        <div>
            <div className=' w-full  p-4 rounded-xl shadow'>
                <div className='flex gap-10 ' >
                    <Link to={"/gurdian-dashboard/profile"} className={` rounded-xl shadow  ${pathName == "/gurdian-dashboard/profile" ? "   text-white bg-gradient-to-r from-[#07569E] to-[#0093DD]" : " text-black "}  `} >
                        <div className="flex items-center   px-4 py-2 rounded-lg w-fit shadow-lg">
                            <div className=" bg-opacity-20 p-2 rounded-lg flex items-center justify-center">
                                <FaUser className=" text-[#64A8E8] text-lg" />
                            </div>
                            <span className="ml-2 font-semibold">Personal <br /> <h1>Information</h1> </span>
                        </div>
                    </Link>
                    <Link to={"/gurdian-dashboard/profile/addictional-info"} className={` rounded-xl shadow  ${pathName == "/gurdian-dashboard/profile/addictional-info" ? " text-white bg-gradient-to-r from-[#07569E] to-[#0093DD]" : " text-black "}  `} >
                        <div className="flex items-center    px-4 py-2 rounded-lg w-fit shadow-lg">
                            <div className=" bg-opacity-20 p-2 rounded-lg flex items-center justify-center">
                                <img src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1739637801/Frame_qwyo8d.png" alt="" />
                            </div>
                            <span className="ml-2 font-semibold">Personal <br /> <h1>Information</h1> </span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default GurdianProfileRightSide
