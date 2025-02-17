import React from 'react';
import TutorSidebar from '../sidebar/TutorSidebar';
import TutorNavbar from '../components/header/TutorNavbar';
import { Outlet } from 'react-router-dom';

const TutorLayout = () => {
    return (
        <div className="h-screen flex flex-col">
            {/* Navbar (Stays at the Top) */}
            <TutorNavbar />

            <div className="flex flex-grow">
                {/* Fixed Sidebar */}
                <div className="w-[20%] fixed h-screen overflow-hidden mt-14 bg-white shadow-lg">
                    <TutorSidebar />
                </div>

                {/* Dynamic Content Section */}
                <div className="w-[80%] ml-[20%] p-3 overflow-auto h-screen mt-14 ">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default TutorLayout;
