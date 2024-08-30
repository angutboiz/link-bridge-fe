import { Button } from "antd";
import React from "react";
import { IoCamera } from "react-icons/io5";
import { IoIosAdd } from "react-icons/io";
import CPost from "./components/CPost";
import CShowPost from "./components/CShowPost";

export default function Profile() {
    return (
        <div className="mb-5">
            <div className="bg-[#ccc] h-[250px] rounded-b-md relative mt-[-10px]">
                <div className="absolute bottom-3 right-5">
                    <Button className="flex gap-1 items-center">
                        <IoCamera /> Thêm ảnh bìa
                    </Button>
                </div>
            </div>
            <div className="px-5 flex justify-between items-center md:items-end flex-col md:flex-row">
                <div className="flex gap-3 items-center md:flex-row flex-col ">
                    <div className="w-[120px] h-[120px] mt-[-25px] relative z-10">
                        <img src="https://noithatbinhminh.com.vn/wp-content/uploads/2022/08/anh-dep-44.jpg.webp" alt="" className="w-full h-full object-cover rounded-full" />
                        <div className="absolute bottom-0 right-0">
                            <Button className="flex gap-1 items-center p-1">
                                <IoCamera size={22} />
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-row md:flex-col text-center md:text-left">
                        <h1 className="text-2xl font-bold">Trọng An</h1>
                        <p className="text-paragraph text-sm">421 Friends</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 mt-3 md:mt-0">
                    <Button className="flex gap-1 items-center bg-btn text-[#fff]">
                        <IoIosAdd size={22} /> Đăng story
                    </Button>
                    <Button className="flex gap-1 items-center">
                        <IoCamera size={22} /> Chỉnh sửa thông tin
                    </Button>
                </div>
            </div>
            <div className="border-[1px] border-[#ccc] mt-5 mb-3"></div>
            <div className="flex gap-3 md:flex-row flex-col">
                <div className="bg-[#fffffe] w-full md:w-[40%] rounded-md px-3 py-2 shadow-md">
                    <h1 className="text-lg font-bold">Giới thiệu</h1>
                    <div className="text-sm">
                        <p className="text-paragraph">Ngày sinh: 20/10/2000</p>
                        <p className="text-paragraph">Sống tại: Hà Nội</p>
                        <p className="text-paragraph">Giới tính: Nam</p>
                        <p className="text-paragraph">Số điện thoại: 0123456789</p>
                        <p className="text-paragraph">Email:</p>
                    </div>
                    <button className="w-full mt-2 py-1">Chỉnh sửa thông tin</button>
                </div>
                <div className="w-full md:w-[60%] ">
                    <div className="bg-[#fffffe] rounded-md shadow-md">
                        <CPost />
                    </div>
                    <div className="bg-[#fffffe] rounded-md shadow-md">
                        <CShowPost />
                    </div>
                </div>
            </div>
        </div>
    );
}
