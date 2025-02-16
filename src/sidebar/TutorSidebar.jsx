import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const TutorSidebar = () => {
    const location = useLocation();
    const pathName = location.pathname;
    return (
        <div className="px-[17px] overflow-y-scroll bg-[#F1F8FF] py-6">
            <nav>
                <ul>
                    {/** Sidebar Menu Items */}
                    {[
                        { path: "/tutor-dashboard", label: "Dashboard", icon: "hiqksqdoynppnq0omfcx" },
                        { path: "/tutor-dashboard/job-board", label: "Job Board", icon: "jqous4irxwpncr90ux30" },
                        { path: "/tutor-dashboard/profile", label: "Profile", icon: "jqous4irxwpncr90ux30" },
                        { path: "/tutor-dashboard/payment", label: "Payment", icon: "mhy6vcoqqiuwey029qrz" },
                        { path: "/tutor-dashboard/notice", label: "Important Notice", icon: "ma1jum6tusg2bkluqn4x" },
                        { path: "/tutor-dashboard/setting", label: "Setting", icon: "wkpj6ilzkyvuko0stdct" },
                    ].map(({ path, label, icon }) => (
                        <li key={path}>
                            <NavLink
                                to={path}
                                className={({ isActive }) =>
                                    `flex items-center gap-4 my-6 px-[16px] py-[11px] rounded-sm transition ${pathName===path
                                        ? "bg-[#FFFFFF] shadow text-[#64A8E8] font-semibold"
                                        : "text-gray-700"
                                    }`
                                }
                            >
                                <img
                                    src={`https://res.cloudinary.com/dj2edy2rg/image/upload/v1739602048/tutor-bridge/${icon}.png`}
                                    alt={`${label} Icon`}
                                    className="w-5 h-5   transition"
                                    style={{ filter: "brightness(0) saturate(100%)" }}
                                />
                                <span>{label}</span>
                            </NavLink>
                        </li>
                    ))}

                    {/** Logout Button */}
                    <li>
                        <span
                            to=""
                            className="flex items-center gap-4 my-6 px-[16px] py-[11px] rounded-sm text-[#CA4A4A] font-semibold"
                        >
                            <img
                                src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1739604575/tutor-bridge/u5pdwayrqm739qxwavjm.png"
                                alt="Logout Icon"
                                className="w-5 h-5"
                            />
                            <span>Logout</span>
                        </span>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default TutorSidebar;
