import { createBrowserRouter } from "react-router-dom";
import TutorLayout from "../layout/TutorLayout";
import GurdianLayout from "../layout/GurdianLayout";
import SuperAdminLayout from "../layout/SuperAdminLayout";

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
                path:"job-board",
                element : <div>job board</div>
            },
            {
                path:"profile",
                element : <div>Profile</div>
            },
            {
                path:"payment",
                element : <div>Payment</div>
            },
            {
                path:"notice",
                element : <div>notice</div>
            },
            {
                path:"setting",
                element : <div>Setting</div>
            }
        ]
    },
    {
        path: "/gurdian-dashboard",
        element: <GurdianLayout></GurdianLayout>,
        children: [
            {
                path: "",
                element: <div> <p> lorem</p> </div>
            },
            {
                path:"tutor-request",
                element : <div>tutor request</div>
            },
            {
                path:"profile",
                element : <div>Profile</div>
            },
            {
                path:"post-job",
                element : <div>post-job</div>
            },
            {
                path:"notice",
                element : <div>notice</div>
            },
            {
                path:"setting",
                element : <div>Setting</div>
            }
        ]
    },
    {
        path : "/super-admin-dashboard",
        element : <SuperAdminLayout></SuperAdminLayout>,
        children : [
            {
                path:"",
                element : <div>home page</div>
            },
            {
                path:"job-request",
                element : <div>tutor-request</div>
            },
            {
                path:"total-teacher",
                element : <div>total teacher</div>
            }
        ]
    }
])