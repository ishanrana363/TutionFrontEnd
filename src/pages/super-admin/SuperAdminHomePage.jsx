import { Briefcase } from "lucide-react";

const SuperAdminHomePage = () => {
    return (
        <div>
            <div>
                <h1 className=" text-[32px] text-[#64A8E8] font-bold my-3.5 " >Overview</h1>
            </div>
            <div  >
                <div className="flex gap-6 "  >
                    <div className="w-64 h-32 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg flex items-center justify-center shadow-lg text-white p-4">
                        <div className="flex flex-col items-center">
                            <div>
                                <div className="flex items-center gap-3.5 " >
                                    <div>
                                        <img src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1739608659/tutor-bridge/clxc4jvc7rqlzngmxw1j.png" alt="" />
                                    </div>
                                    <div>
                                        <p className="text-lg font-medium mt-2">Total Job</p>
                                        <p className="text-2xl font-bold">10,000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="w-64 h-32 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg flex items-center justify-center shadow-lg text-white p-4">
                        <div className="flex flex-col items-center">
                            <div>
                                <div className="flex items-center gap-3.5 " >
                                    <div>
                                        <img src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1739609365/tutor-bridge/lryne41rfspxcheoozac.png" alt="" />
                                    </div>
                                    <div>
                                        <p className="text-lg font-medium mt-2">Total Confirm Job </p>
                                        <p className="text-2xl font-bold">10,000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="w-64 h-32 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg flex items-center justify-center shadow-lg text-white p-4">
                        <div className="flex flex-col items-center">
                            <div>
                                <div className="flex items-center gap-3.5 " >
                                    <div>
                                        <img className="w-24" src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1739609365/tutor-bridge/lryne41rfspxcheoozac.png" alt="" />
                                    </div>
                                    <div>
                                        <p className="text-lg font-medium mt-2">Total Guardians</p>
                                        <p className="text-2xl font-bold">10,000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="w-72 h-32 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg flex items-center justify-center shadow-lg text-white p-4">
                        <div className="flex flex-col items-center">
                            <div>
                                <div className="flex items-center gap-3.5 " >
                                    <div>
                                        <img className="w-24" src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1739609242/tutor-bridge/sqyk1knvxbmbuihvvsdd.png" alt="" />
                                    </div>
                                    <div>
                                        <p className="text-lg font-medium mt-2">Total Teacher</p>
                                        <p className="text-2xl font-bold">10,000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>




                </div>
            </div>
        </div>
    )
}

export default SuperAdminHomePage
