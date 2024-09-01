import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { MdPersonalVideo } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { IoMdHelpCircle } from "react-icons/io";
import { VscFeedback } from "react-icons/vsc";
import { jwtDecode } from "jwt-decode";
import { FaUserCircle } from "react-icons/fa";

import Cookies from "js-cookie";
import CAvatar from "../pages/components/CAvatar";
import { Button, Popover } from "antd";
export default function Header() {
    const [open, setOpen] = useState(false);
    const [userId, setUserId] = useState(null);
    const hide = () => {
        setOpen(false);
    };
    const handleOpenChange = (newOpen) => {
        setOpen(newOpen);
    };

    const token = Cookies.get("token");
    useEffect(() => {
        if (token !== undefined) {
            const decoded = jwtDecode(token);
            setUserId(decoded.user.id);
        }
    }, [token]);

    const handleLogout = () => {
        Cookies.remove("token");
        window.location.reload();
    };
    return (
        <header className="fixed w-full z-10 bg-[#fffffe]">
            <div className="flex items-center justify-between px-5 py-1  shadow-md ">
                <Link to="/" className="">
                    <h1 className="text-xl font-bold text-text matemasie-regular md:block hidden">Link Bridge</h1>
                    <h1 className="text-xl font-bold text-text matemasie-regular block md:hidden">LB</h1>
                </Link>
                <ul className="flex items-center gap-5 text-paragraph">
                    <li>
                        <NavLink to="/" className="flex w-[30px] md:w-[75px] justify-center ">
                            <IoHomeOutline size={25} />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/video" className="flex w-[30px] md:w-[75px] justify-center ">
                            <MdPersonalVideo size={25} />
                        </NavLink>
                    </li>{" "}
                    <li>
                        <NavLink to="/notification" className="flex w-[30px] md:w-[75px] justify-center">
                            <IoMdNotificationsOutline size={25} />
                        </NavLink>
                    </li>
                </ul>
                {token ? (
                    <div>
                        <Popover
                            content={
                                <div className="w-[200px]">
                                    <Link to={`/profile/${userId}`} className="w-full flex gap-2 items-center hover:bg-bg p-2 rounded-md">
                                        <FaUserAlt /> Profile
                                    </Link>
                                    <Link to="/help" className="w-full flex gap-2 items-center hover:bg-bg p-2 rounded-md">
                                        <IoMdHelpCircle /> Trợ giúp
                                    </Link>
                                    <Link to="/feedback" className="w-full flex gap-2 items-center hover:bg-bg p-2 rounded-md">
                                        <VscFeedback /> Feedback
                                    </Link>
                                    <Link to="/setting" className="w-full flex gap-2 items-center hover:bg-bg p-2 rounded-md">
                                        <IoMdSettings /> Cài đặt
                                    </Link>
                                    <div className="border-[1px] border-[#dadde1] mt-3"></div>

                                    <Button className="w-full bg-[#ef4444] text-[#fff] mt-3" onClick={handleLogout}>
                                        <IoIosLogOut />
                                        Logout
                                    </Button>
                                </div>
                            }
                            trigger="click"
                            placement="bottomRight"
                            open={open}
                            onOpenChange={handleOpenChange}>
                            <button type="primary" className="p-0 bg-[#fffffe] flex items-center justify-center hover:bg-[#fffffe]">
                                <CAvatar />
                            </button>
                        </Popover>
                    </div>
                ) : (
                    <div className="login">
                        <Link to="/auth">
                            <button className="block md:hidden">
                                <FaUserCircle />
                            </button>
                            <button className="md:block hidden">Đăng nhập</button>
                        </Link>
                    </div>
                )}
            </div>
        </header>
    );
}
