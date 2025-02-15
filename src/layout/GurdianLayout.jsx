import { Outlet } from 'react-router-dom';
import GurdianNavbar from '../components/header/GurdianNavbar';
import GurdianSidebar from '../sidebar/GurdianSidebar';

const GurdianLayout = () => {
    return (
        <div>
            <div><GurdianNavbar></GurdianNavbar> </div>
            <div className='flex flex-row ' >
                <div className='w-[20%]  '  >
                    <GurdianSidebar></GurdianSidebar>
                </div>
                <div className='w-[84%] px-2 py-2 ' >
                    <Outlet></Outlet>
                </div>
            </div>

        </div>
    );
};

export default GurdianLayout;