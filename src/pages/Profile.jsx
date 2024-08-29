import { Button } from "antd";
import React from "react";
import { IoCamera } from "react-icons/io5";

export default function Profile() {
    return (
        <div className="">
            <div className="bg-[#ccc] h-[300px] rounded-b-md relative mt-[-10px]">
                <div className="absolute bottom-3 right-5">
                    <Button className="flex gap-1 items-center">
                        <IoCamera /> Thêm ảnh bìa
                    </Button>
                </div>
            </div>
            <div className="avatar"></div>
            <div className="flex items-center gap-3 px-5 py-3"></div>
        </div>
    );
}
