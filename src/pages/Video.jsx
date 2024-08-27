import React from "react";
import CVideo from "./components/CVideo";

export default function Video() {
    return (
        <div className="bg-[#fffffe] p-2 rounded-md shadow-md py-3 mt-5">
            <h1 className="text-2xl font-bold">Video</h1>
            <CVideo />
        </div>
    );
}
