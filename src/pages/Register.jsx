import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { browserHistory } from "react-router";

export default function Register() {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/auth/otp");
    };
    return (
        <form onSubmit={handleSubmit} className="bg-[#fffffe] w-full p-5 space-y-3 rounded-md shadow-lg shadow-[#ffc6c7]">
            <div className="">
                <input type="text" placeholder="Nhập email" name="username" className="w-full" />
            </div>
            <div className="">
                <input type="text" placeholder="Nhập tên (nickname) của bạn" name="name" className="w-full" />
            </div>
            <div className="">
                <input type="password" placeholder="Nhập mật khẩu" name="password" className="w-full" />
            </div>
            <div className="">
                <input type="password" placeholder="Nhập lại mật khẩu" name="repassword" className="w-full" />
            </div>

            <div className="">
                <button className="text-[#fff] w-full">Đăng ký tài khoản</button>
            </div>

            <div className="border-[1px] border-[#dadde1]"></div>
            <Link to="/auth" className="block text-center ">
                <button className="bg-[#594a4e]">Đăng nhập nếu đã có tài khoản?</button>
            </Link>
        </form>
    );
}
