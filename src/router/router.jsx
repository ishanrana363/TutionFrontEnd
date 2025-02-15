import { createBrowserRouter } from "react-router-dom";
import TutorLayout from "../layout/TutorLayout";

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
    }
])