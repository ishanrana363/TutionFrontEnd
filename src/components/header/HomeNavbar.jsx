import React from 'react'
import { Link } from 'react-router-dom'

const HomeNavbar = () => {
  return (
    <div className=' bg-[#F1F8FF] ' >
      <div className=' max-w-6xl mx-auto py-1 ' >
        <div className='flex justify-between items-center ' >
          <div>
            <Link to={"/"}><img src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1739890227/Frame_2147224871_ekpza2.png" alt="" /></Link>
          </div>
          <div className='' >
            <nav>
              <ul className='flex items-center gap-6  ' >
                <li> <Link className=' text-[#2F3A4D] font-semibold ' to={"/job-board"}>Job Board</Link> </li>
                <li> <Link className=' text-[#2F3A4D] font-semibold ' to={"/sign-in"}>Sign in</Link> </li>
                <li> <Link to={"/become-tutor"}> <button className=' bg-[#64A8E8] px-4 py-1.5 text-white shadow rounded-md ' >Become A Tutor </button> </Link> </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeNavbar
