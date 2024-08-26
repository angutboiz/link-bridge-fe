import { Children } from "react";
import Home from "../pages/Home";

import DefaultLayout from "../layouts/DefaultLayout";
import AdminLayout from "../layouts/AdminLayout";
import Admin from "../pages/Admin";
import Video from "../pages/Video";
import Notify from "../pages/Notify";

export const routers = [
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/video",
                element: <Video />,
            },
            {
                path: "/notification",
                element: <Notify />,
            },
        ],
    },
    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <Admin />,
            },
        ],
    },
];
