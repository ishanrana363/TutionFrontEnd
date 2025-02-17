import { Outlet } from 'react-router-dom';
import GurdianProfileLeftSide from '../pages/gurdian/gurdian-profile-page/GurdianProfileLeftSide';
import GurdianProfileRightSide from './../pages/gurdian/gurdian-profile-page/GurdianProfileRightSide';

const ProfileLayout = () => {
  return (
    <div className="lg:flex gap-8 ">
      {/* Left Side - Fixed Width */}
      <div className="lg:w-[25%] w-full flex-shrink-0">
        <GurdianProfileLeftSide />
      </div>

      {/* Right Side - Expands Freely & Contains Outlet */}
      <div className="flex-1 bg-[#F1F8FF]  ">
        <GurdianProfileRightSide />
        <Outlet />  {/* ✅ Now inside the right section */}
      </div>
    </div>
  );
};

export default ProfileLayout;
