import React from 'react';
import { Link } from 'react-router-dom';

const TutorNavbar = () => {
    return (
        <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <div className="px-6 py-3 flex items-center justify-between rounded-l-3xl">
                {/* Logo */}
                <div className="w-[18%]">
                    <Link to="/">
                        <img
                            src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1739600639/tutor-bridge/kryarvglosqpsgvup8lj.png"
                            alt="Logo"
                            className="h-10"
                        />
                    </Link>
                </div>

                {/* Welcome Message */}
                <div>
                    <h1 className="text-lg font-semibold">Welcome, Ishan</h1>
                </div>

                {/* Notification & Profile */}
                <div className="flex items-center gap-4">
                    {/* Notification Icon */}
                    <Link to="/">
                        <img
                            src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1739600791/tutor-bridge/bwe3csdrr0pvoqtscezc.png"
                            alt="Notifications"
                            className="h-8"
                        />
                    </Link>

                    {/* Profile Image */}
                    <Link to="/">
                        <img
                            className="w-14 h-14 rounded-full"
                            src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1739600931/tutor-bridge/lyl7d3inmog8mar8ra8y.png"
                            alt="Profile"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TutorNavbar;
