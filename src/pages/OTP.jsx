import { Input, Spin } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";
import { postData } from "./api/fetchAPI";
import Swal from "sweetalert2";

export default function OTP() {
    const [loading, setLoading] = useState(false);
    const [valueOtp, setValueOtp] = useState("");
    const navigate = useNavigate();

    const email = localStorage.getItem("email");

    const onChange = (text) => {
        setValueOtp(text);
    };
    const sharedProps = {
        onChange,
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleRequestOTP(valueOtp);
    };

    const handleRequestOTP = async (otp) => {
        setLoading(true);
        const response = await postData("/auth/verify-otp", { email, otp });
        const data = await response.json();

        if (response.ok) {
            navigate("/");
        } else {
            Swal.fire({
                title: "Thất bại",
                text: data.msg,
                icon: "error",
            });
        }
        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit} className="bg-[#fffffe] w-full p-5 space-y-5 rounded-md shadow-lg shadow-[#ffc6c7]">
            <div className="mb-3">
                <p>Mã OTP đã gửi tới email: {email}</p>
                <Link target="_blank" to="https://mail.google.com/mail/u/0/#inbox" className="underline">
                    Bấm vào để vô gmail
                </Link>
            </div>
            <div className="text-center">
                <Input.OTP formatter={(str) => str.toUpperCase()} {...sharedProps} />
            </div>
            <div className="">
                <button className={`text-[#fff] w-full ${loading && "bg-bg hover:bg-bg cursor-wait"}`}>Xác nhận OTP {loading && <Spin indicator={<LoadingOutlined spin />} />}</button>
            </div>
        </form>
    );
}
