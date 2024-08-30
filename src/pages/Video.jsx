import React from "react";
import CVideo from "./components/CVideo";
import { CiSearch } from "react-icons/ci";

export default function Video() {
    return (
        <div className="bg-[#fffffe] p-2 rounded-md shadow-md py-3 mt-5">
            <div className="flex justify-between items-center mb-3">
                <h1 className="text-2xl font-bold">Video</h1>
                <div className="border-btn border-[1px] rounded-md flex  items-center px-3 text-btn">
                    <CiSearch />
                    <input type="text" className="border-none focus-within:border-none" placeholder="Tìm bộ phim bạn thích..." />
                </div>
            </div>
            <CVideo />
        </div>
    );
}
