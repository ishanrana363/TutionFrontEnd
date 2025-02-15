import React from 'react';

import { Outlet } from 'react-router-dom';
import SuperAdminNavbar from '../components/header/SuperAdminNavbar';
import SuperAdminSidebar from '../sidebar/SuperAdminSidebar';

const SuperAdminLayout = () => {
    return (
        <div>
            <div> <SuperAdminNavbar></SuperAdminNavbar> </div>
            <div className='flex flex-row ' >
                <div className='w-[20%]  '  >
                    <SuperAdminSidebar></SuperAdminSidebar>
                </div>
                <div className='w-[84%] px-2 py-2 ' >
                    <Outlet></Outlet>
                </div>
            </div>

        </div>
    );
};

export default SuperAdminLayout;