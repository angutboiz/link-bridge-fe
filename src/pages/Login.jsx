import { Button, Input } from "antd";
import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <form className="bg-[#fffffe] w-full p-5 space-y-3 rounded-md shadow-lg shadow-[#ffc6c7]">
            <div className="">
                <input type="text" placeholder="Nhập email hoặc số điện thoại" name="username" className="w-full" />
            </div>
            <div className="">
                <input type="password" placeholder="Nhập mật khẩu" name="password" className="w-full" />
            </div>

            <div className="">
                <button className="text-[#fff] w-full">Đăng nhập</button>
            </div>
            <div className="">
                <Link to="/auth/forgot" className="text-[12px] text-btn">
                    Quên mật khẩu?
                </Link>
            </div>
            <div className="border-[1px] border-[#dadde1]"></div>
            <Link to="/auth/register" className="block text-center ">
                <button className="bg-[#594a4e]">Tạo tài khoản mới</button>
            </Link>
        </form>
    );
}
