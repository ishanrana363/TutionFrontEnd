import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const StickyNavbar = () => {
    return (
        <div className='bg-[#64A8E8] py-4 text-white sticky top-0 w-full z-50 shadow-md'>
            <div className='max-w-6xl mx-auto px-4'>
                <div className='flex gap-5 items-center'>
                    <div className='flex gap-2.5 items-center'>
                        <span><FaPhoneAlt /></span>
                        <p>01830376175</p>
                    </div>
                    <div className='flex items-center gap-2.5'>
                        <span><MdEmail /></span>
                        <p>Example@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StickyNavbar;
