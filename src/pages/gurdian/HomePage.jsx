import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <div className="flex lg:flex-row flex-col items-center gap-10 bg-[#F1F8FF] py-6 px-6 rounded  " >
                <div className="flex flex-col items-center justify-center p-4 bg-white shadow-lg rounded-xl w-44">
                    <div className="relative flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
                        <img src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1739628446/Frame_7_a2dlye.png" alt="" />
                    </div>
                    <p className="mt-2 text-xl font-bold text-black">00</p>
                    <p className="text-[#64A8E8] text-[20px] font-semibold ">Pending Jobs</p>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-white shadow-lg rounded-xl w-44">
                    <div className="relative flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
                        <img src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1739628446/Frame_7_a2dlye.png" alt="" />
                    </div>
                    <p className="mt-2 text-xl font-bold text-black">00</p>
                    <p className="text-[#64A8E8] text-[20px] font-semibold ">Live Jobs</p>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-white shadow-lg rounded-xl w-44">
                    <div className="relative flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
                        <img src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1739629362/Frame_11_ct9ofz.png" alt="" />
                    </div>
                    <p className="mt-2 text-xl font-bold text-black">00</p>
                    <p className="text-[#64A8E8] text-[20px] font-semibold ">Appointed Jobs</p>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-white shadow-lg rounded-xl w-44">
                    <div className="relative flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
                        <img src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1739629304/Frame_10_nlnr7e.png" alt="" />
                    </div>
                    <p className="mt-2 text-xl font-bold text-black">00</p>
                    <p className="text-[#64A8E8] text-[20px] font-semibold ">Confirmed Jobs</p>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-white shadow-lg rounded-xl w-44">
                    <div className="relative flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
                        <img src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1739629259/Frame_9_jfwumv.png" alt="" />
                    </div>
                    <p className="mt-2 text-xl font-bold text-black">00</p>
                    <p className="text-[#64A8E8] text-[20px] font-semibold ">Cancel Jobs</p>
                </div>
            </div>



            <div className="my-10" >
                <div>
                    <h1 className="text-[#64A8E8] font-bold text-3xl " >Profile</h1>
                </div>

                <div className=" flex lg:flex-row flex-col  lg:gap-52 gap-10 " >
                    <div className=" lg:w-[33%] lg:h-52 mt-3.5 rounded-2xl shadow text-[#3A3A3A] p-5 bg-[#F1F8FF] " >
                        <h1>Complete your profile to confirm that you're a genuine user on our platform.</h1>
                        <h1 className=" text-[#141414] font-bold text-4xl my-4 " >50%</h1>
                        <button className="px-[14px] py-2 border border-[#64A8E8] text-[#64A8E8]  shadow rounded-xl " > <Link to={""}>Update Profile</Link> </button>
                    </div>
                    <div className="lg:w-[33%] w-full lg:h-52 h-52 mt-3.5 rounded-2xl shadow text-[#3A3A3A] p-5 bg-[#F1F8FF] " >
                        <h1>Join As a Member since : 12 Nov 2024</h1>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default HomePage;