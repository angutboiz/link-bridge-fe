import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
    return (
        <div>
            <Header />
            <div className="flex justify-center ">
                <div className="w-full px-3 md:px-0 md:w-[700px] mt-[50px]">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
