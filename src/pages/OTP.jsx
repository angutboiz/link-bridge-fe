import { Flex, Input } from "antd";
import Title from "antd/es/skeleton/Title";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function OTP() {
    const navigate = useNavigate();

    const onChange = (text) => {
        console.log("onChange:", text);
    };
    const sharedProps = {
        onChange,
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/");
    };

    return (
        <form onSubmit={handleSubmit} className="bg-[#fffffe] w-full p-5 space-y-3 rounded-md shadow-lg shadow-[#ffc6c7]">
            <div className="mb-3">
                <p>Mã OTP đã gửi tới email bạn sử dụng để đăng ký</p>
                <Link target="_blank" to="https://mail.google.com/mail/u/0/#inbox" className="underline">
                    Bấm vào để vô gmail
                </Link>
            </div>
            <div className="text-center">
                <Input.OTP formatter={(str) => str.toUpperCase()} {...sharedProps} />
            </div>
            <div className="">
                <button className="text-[#fff] w-full">Xác nhận OTP</button>
            </div>
        </form>
    );
}
