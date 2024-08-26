import { Children } from "react";
import Home from "../pages/Home";

import DefaultLayout from "../layouts/DefaultLayout";
import AdminLayout from "../layouts/AdminLayout";
import Admin from "../pages/Admin";
import Video from "../pages/Video";
import Notify from "../pages/Notify";
import Login from "../pages/Login";
import Register from "../pages/Register";
import LoginLayout from "../layouts/LoginLayout";
import Forgot from "../pages/Forgot";
import OTP from "../pages/OTP";

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
    {
        path: "/auth",
        element: <LoginLayout />,
        children: [
            {
                index: true,
                element: <Login />,
            },
            {
                path: "/auth/register",
                element: <Register />,
            },
            {
                path: "/auth/forgot",
                element: <Forgot />,
            },
            {
                path: "/auth/otp",
                element: <OTP />,
            },
        ],
    },
];
