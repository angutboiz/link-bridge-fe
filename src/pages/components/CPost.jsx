import { Button, Dropdown, Input, Modal, Popover, Select } from "antd";
import React, { useState } from "react";
import CAvatar from "./CAvatar";
import { FaEarthAsia } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";

export default function CPost() {
    const { Option } = Select;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="bg-[#ffc6c7] rounded-md">
            <div className="flex items-center gap-3 px-5 py-3">
                <CAvatar />
                <input placeholder="Bạn đang nghĩ gì, An?" className="flex-1 rounded-full placeholder-btn cursor-pointer hover:bg-bg" onClick={showModal} />
                <Modal title="Tạo bài đăng" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <div className="flex gap-1 mb-3">
                        <CAvatar />
                        <div className="">
                            <p className="font-bold">Trọng An</p>
                            <Select defaultValue="Public" className="">
                                <Option value="public">
                                    <div className="flex gap-1 items-center text-sm">
                                        <FaEarthAsia />
                                        Public
                                    </div>
                                </Option>
                                <Option value="friend">
                                    <div className="flex gap-1 items-center text-sm">
                                        <FaUserFriends />
                                        Friend
                                    </div>
                                </Option>
                                <Option value="only">
                                    <div className="flex gap-1 items-center text-sm">
                                        <IoMdLock />
                                        Only me
                                    </div>
                                </Option>
                            </Select>
                        </div>
                    </div>
                    <textarea className="w-full h-[300px]" draggable="false" placeholder="Bạn đang nghĩ gì vây? An"></textarea>
                </Modal>
            </div>
        </div>
    );
}
