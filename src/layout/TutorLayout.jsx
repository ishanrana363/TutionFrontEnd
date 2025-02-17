import React from 'react';
import TutorSidebar from '../sidebar/TutorSidebar';
import TutorNavbar from '../components/header/TutorNavbar';
import { Outlet } from 'react-router-dom';

const TutorLayout = () => {
    return (
        <div>
            <div><TutorNavbar></TutorNavbar></div>
            <div className='flex flex-row ' >
                <div className='w-[20%]  '  >
                    <TutorSidebar></TutorSidebar>
                </div>
                <div className='w-[84%]' >
                    <div className='p-3' >
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TutorLayout;