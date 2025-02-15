import React from 'react'
import { Link } from 'react-router-dom'

const GurdianNavbar = () => {
    return (
        <div>
            <div className=' shadow-md rounded-l-3xl ' >
                <div className='px-4 py-1 flex ' >
                    {/* logo */}
                    <div className='w-[18%]' >
                        <Link to={""}> <img src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1739600639/tutor-bridge/kryarvglosqpsgvup8lj.png" alt="" /> </Link>
                    </div>
                    <div className=' flex justify-between items-center  w-full ' >
                        {/* name */}
                        <div>
                            <h1>Welcome Ishan</h1>
                        </div>
                        {/* notification */}
                        <div className='flex items-center gap-3 ' >
                            <div>
                                <Link to={"/"}> <img src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1739600791/tutor-bridge/bwe3csdrr0pvoqtscezc.png" alt="" /> </Link>
                            </div>
                            <div>
                                <Link to={""}> <img className='w-14 rounded-full h-auto ' src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1739600931/tutor-bridge/lyl7d3inmog8mar8ra8y.png" alt="" /> </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GurdianNavbar
