import React from "react";
import { FaUserFriends, FaCommentDots } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { AiFillLike } from "react-icons/ai";

export default function CNotification(props) {
    const renderIcon = () => {
        switch (props.icon) {
            case "message":
                return (
                    <div className="bg-[#58d476] w-[25px] h-[25px] flex items-center justify-center rounded-full">
                        <FaMessage size={12} color="#fff" />
                    </div>
                );
            case "friend":
                return (
                    <div className="bg-[#1f7ee9] w-[25px] h-[25px] flex items-center justify-center rounded-full">
                        <FaUserFriends size={12} color="#fff" />
                    </div>
                );
            case "like":
                return (
                    <div className="bg-btn w-[25px] h-[25px] flex items-center justify-center rounded-full">
                        <AiFillLike size={12} color="#fff" />
                    </div>
                );
            case "comment":
                return (
                    <div className="bg-[#ffa502] w-[25px] h-[25px] flex items-center justify-center rounded-full">
                        <FaCommentDots size={12} color="#fff" />
                    </div>
                );
            default:
                return null;
        }
    };

    const renderContent = () => {
        switch (props.icon) {
            case "message":
                return (
                    <h1>
                        <b>{props.name}</b> đã nhắn tin cho bạn: {props.content}
                    </h1>
                );
            case "friend":
                return (
                    <h1>
                        <b>{props.name}</b> đã gửi lời mời kết bạn
                    </h1>
                );
            case "like":
                return (
                    <h1>
                        <b>{props.name}</b> đã thích bài viết của bạn
                    </h1>
                );
            case "comment":
                return (
                    <h1>
                        <b>{props.name}</b> đã bình luận về bài viết của bạn
                    </h1>
                );
            default:
                return null;
        }
    };

    return (
        <div className="flex gap-3 items-center w-full hover:bg-bg rounded-md cursor-pointer p-2">
            <div className="w-[60px] h-[60px] relative">
                <img src={props.img} alt="" className="w-full h-full object-cover rounded-full" />
                <div className="absolute bottom-[-7px] right-0">{renderIcon()}</div>
            </div>
            <div className="flex-1 flex justify-between items-center">
                <div className="w-full">
                    {renderContent()}
                    <p className="text-btn text-[12px]">{props.date} ngày trước</p>
                    {props.icon === "friend" ? (
                        <div className="flex gap-3 w-full mt-2">
                            <button className="flex-1 px-1 py-1 text-[12px]">Chấp nhận</button>
                            <button className="flex-1 px-1 py-1 text-[12px] bg-[#594a4e]">Từ chối</button>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
                <div className="w-3 h-3 bg-btn rounded-full"></div>
            </div>
        </div>
    );
}
