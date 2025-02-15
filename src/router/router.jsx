import { createBrowserRouter } from "react-router-dom";
import TutorLayout from "../layout/TutorLayout";
import GurdianLayout from "../layout/GurdianLayout";
import SuperAdminLayout from "../layout/SuperAdminLayout";
import SuperAdminHomePage from "../pages/super-admin/SuperAdminHomePage";
import JobRequest from './../pages/super-admin/JobRequest';
import TeacherTable from "../pages/super-admin/TeacherTable";
import HomePage from "../pages/gurdian/HomePage";
import TutorFrom from "../pages/gurdian/TutorFrom";
import GurdianProfile from "../pages/gurdian/gurdian-profile-page/GurdianProfile";
import ProfileLayout from "../layout/ProfileLayout";
import ContactInformation from "../pages/gurdian/gurdian-profile-page/ContactInformation";

export const router = createBrowserRouter([
    {
        path: "/tutor-dashboard",
        element: <TutorLayout></TutorLayout>,
        children: [
            {
                path: "",
                element: <div> <p> lorem</p> </div>
            },
            {
                path: "job-board",
                element: <div>job board</div>
            },
            {
                path: "profile",
                element: <div>Profile</div>
            },
            {
                path: "payment",
                element: <div>Payment</div>
            },
            {
                path: "notice",
                element: <div>notice</div>
            },
            {
                path: "setting",
                element: <div>Setting</div>
            }
        ]
    },
    {
        path: "/gurdian-dashboard",
        element: <GurdianLayout></GurdianLayout>,
        children: [
            {
                path: "",
                element: <HomePage></HomePage>
            },
            {
                path: "tutor-request",
                element: <TutorFrom></TutorFrom>
            },
            {
                path: "profile",
                element: <ProfileLayout></ProfileLayout>,
                children: [

                    {
                        path: "",
                        element: <ContactInformation></ContactInformation>
                    },
                    {
                        path: "addictional-info",
                        element: <div>adictional inof information</div>
                    },

                ]
            },

            {
                path: "post-job",
                element: <div>post-job</div>
            },
            {
                path: "notice",
                element: <div>notice</div>
            },
            {
                path: "setting",
                element: <div>Setting</div>
            }
        ]
    },
    {
        path: "/super-admin-dashboard",
        element: <SuperAdminLayout></SuperAdminLayout>,
        children: [
            {
                path: "",
                element: <SuperAdminHomePage></SuperAdminHomePage>
            },
            {
                path: "job-request",
                element: <JobRequest></JobRequest>
            },
            {
                path: "total-teacher",
                element: <TeacherTable></TeacherTable>
            }
        ]
    }
])