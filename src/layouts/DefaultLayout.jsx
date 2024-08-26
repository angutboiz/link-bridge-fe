import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
    return (
        <div>
            <Header />
            <div className="flex justify-center ">
                <div className="w-[700px]">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
