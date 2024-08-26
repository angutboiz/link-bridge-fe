import React from "react";
import { Link, NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { MdPersonalVideo } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
export default function Header() {
    return (
        <header className="fixed w-full z-10 bg-[#fffffe]">
            <div className="flex items-center justify-between px-5 py-1  shadow-md">
                <Link to="/" className="">
                    <h1 className="text-xl font-bold text-text matemasie-regular">Link Bridge</h1>
                </Link>
                <ul className="flex items-center gap-5 text-paragraph">
                    <li>
                        <NavLink to="/" className="flex w-[75px] justify-center ">
                            <IoHomeOutline size={25} />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/video" className="flex w-[75px] justify-center ">
                            <MdPersonalVideo size={25} />
                        </NavLink>
                    </li>{" "}
                    <li>
                        <NavLink to="/notification" className="flex w-[75px] justify-center">
                            <IoMdNotificationsOutline size={25} />
                        </NavLink>
                    </li>
                </ul>
                <div className="login">
                    <Link to="/auth">
                        <button>Đăng nhập</button>
                    </Link>
                </div>
            </div>
        </header>
    );
}
