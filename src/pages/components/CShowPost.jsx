import React from "react";
import CAvatar from "./CAvatar";
import { FaEarthAsia } from "react-icons/fa6";
import { AiFillLike } from "react-icons/ai";
import { FaCommentDots } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { Button } from "antd";

export default function CShowPost() {
    return (
        <div className=" bg-[#ffc6c7] rounded-md mt-5 py-2">
            <div className="px-5">
                <div className="flex gap-2">
                    <CAvatar />
                    <div className="">
                        <p className="font-bold">Nguyễn Trọng An</p>
                        <p className="text-[12px] flex gap-1 items-center">
                            1 giờ trước <FaEarthAsia />
                        </p>
                    </div>
                </div>
                <div className="py-1">
                    <p>Audo dack qua</p>
                </div>
            </div>
            <div className="max-h-[500px] overflow-hidden">
                <img
                    src="https://scontent.fsgn20-1.fna.fbcdn.net/v/t39.30808-6/456332956_122133852374294060_118961680454536498_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE8kzhKdx1vp0hVkJt8fHwfaHPFutneY_poc8W62d5j-hpUySAp47hPNzehSKbJm-D59OHiaYnSlweI6i_O1xq_&_nc_ohc=WCc1ZUlbrhcQ7kNvgEYAYFn&_nc_ht=scontent.fsgn20-1.fna&oh=00_AYCoSTEYBnNC1oRZXeoaNs67sTk9CIuY2DcXwZsu2gmDlg&oe=66CDFE82"
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex justify-between items-center px-5 pt-2">
                <Button className="flex items-center gap-1 text-text">
                    <AiFillLike size={22} />2 Lượt thích
                </Button>
                <Button className="flex items-center gap-1 text-text">
                    <FaCommentDots size={22} />
                    235 Lượt bình luận
                </Button>
                <Button className="flex items-center gap-1 text-text">
                    <FaShareAlt size={22} />1 Lượt share
                </Button>
            </div>
        </div>
    );
}
