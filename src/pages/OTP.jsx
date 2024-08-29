import { Input, Spin } from "antd";
import React, {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";

export default function OTP() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const onChange = (text) => {
        console.log("onChange:", text);

        if (text === "000000") {
            setLoading(true);

            setTimeout(() => {
                setLoading(false);
                navigate("/auth");
            }, 2000);
        }
    };
    const sharedProps = {
        onChange,
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // navigate("/");
    };

    return (
        <form onSubmit={handleSubmit} className="bg-[#fffffe] w-full p-5 space-y-5 rounded-md shadow-lg shadow-[#ffc6c7]">
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
                <button className={`text-[#fff] w-full ${loading && "bg-bg hover:bg-bg cursor-wait"}`}>Xác nhận OTP {loading && <Spin indicator={<LoadingOutlined spin />} />}</button>
            </div>
        </form>
    );
}
