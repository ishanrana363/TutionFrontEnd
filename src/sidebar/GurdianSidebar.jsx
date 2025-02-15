import React from "react";
import { NavLink } from "react-router-dom";

const GurdianSidebar = () => {
    return (
        <div className="px-[17px] overflow-y-scroll bg-[#F1F8FF] py-6">
            <nav>
                <ul>
                    {/** Sidebar Menu Items */}
                    {[
                        { path: "/gurdian-dashboard", label: "Dashboard", icon: "hiqksqdoynppnq0omfcx" },
                        { path: "/gurdian-dashboard/tutor-request", label: "Tutor Request", icon: "jqous4irxwpncr90ux30" },
                        { path: "/gurdian-dashboard/profile", label: "Profile", icon: "jqous4irxwpncr90ux30" },
                        { path: "/gurdian-dashboard/post-job", label: "Posted Jobs", icon: "mhy6vcoqqiuwey029qrz" },
                        { path: "/gurdian-dashboard/notice", label: "Important Notice", icon: "ma1jum6tusg2bkluqn4x" },
                        { path: "/gurdian-dashboard/setting", label: "Setting", icon: "wkpj6ilzkyvuko0stdct" },
                    ].map(({ path, label, icon }) => (
                        <li key={path}>
                            <NavLink
                                to={path}
                                className={({ isActive }) =>
                                    `flex items-center gap-4 my-6 px-[16px] py-[11px] rounded-sm transition ${isActive
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
                        <NavLink
                            to=""
                            className="flex items-center gap-4 my-6 px-[16px] py-[11px] rounded-sm text-[#CA4A4A] font-semibold"
                        >
                            <img
                                src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1739604575/tutor-bridge/u5pdwayrqm739qxwavjm.png"
                                alt="Logout Icon"
                                className="w-5 h-5"
                            />
                            <span>Logout</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default GurdianSidebar;
