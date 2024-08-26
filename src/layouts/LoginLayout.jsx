import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function LoginLayout() {
    return (
        <div className="flex flex-col md:flex-row  gap-5 h-[70vh] items-center px-10 lg:px-[200px] ">
            <div className="flex-1 flex flex-col justify-end ">
                <Link to="/" className="">
                    <h1 className="text-3xl font-bold text-btn matemasie-regular">Link Bridge</h1>
                </Link>
                <p className="w-[350px] mt-3">LinkBridge giúp bạn kết nối và chia sẻ tới với bạn bè của bạn trong cuộc sống.</p>
            </div>
            <div className="flex-1 w-full">
                <Outlet />
            </div>
        </div>
    );
}
