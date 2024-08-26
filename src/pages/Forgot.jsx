import React from "react";
import { Link } from "react-router-dom";

export default function Forgot() {
    return (
        <form className="bg-[#fffffe] w-full p-5 space-y-3 rounded-md shadow-lg shadow-[#ffc6c7]">
            <div className="">
                <input type="text" placeholder="Nhập email hoặc số điện thoại bạn đã đăng ký" name="forgot" className="w-full" />
            </div>
            <div className="">
                <button className="text-[#fff] w-full">Lấy lại mật khẩu</button>
            </div>
            <div className="">
                <Link to="/auth" className="text-[12px] text-btn">
                    Đăng nhập nếu bạn đã nhớ?
                </Link>
            </div>
        </form>
    );
}
