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
import AdditionalDetails from "../pages/gurdian/gurdian-profile-page/AdditionalDetails";
import PostedJobPage from "../pages/gurdian/posted-jon/PostedJobPage";
import Notice from "../pages/gurdian/notice-page/Notice";
import Setting from "../pages/gurdian/setting-page/Setting";
import TutorHome from "../pages/tutor/TutorHome";
import TuitionType from "../pages/tutor/tuition-type/TuitionType";
import TutorProfile from "../pages/tutor/tutor-profile/TutorProfile";

export const router = createBrowserRouter([
    {
        path: "/tutor-dashboard",
        element: <TutorLayout></TutorLayout>,
        children: [
            {
                path: "",
                element: <TutorHome></TutorHome>
            },
            {
                path: "job-board",
                element: <TuitionType></TuitionType>
            },
            {
                path: "profile",
                element: <TutorProfile></TutorProfile>
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
                        element: <AdditionalDetails></AdditionalDetails>
                    },

                ]
            },

            {
                path: "post-job",
                element: <PostedJobPage></PostedJobPage>
            },
            {
                path: "notice",
                element: <Notice></Notice>
            },
            {
                path: "setting",
                element: <Setting></Setting>
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