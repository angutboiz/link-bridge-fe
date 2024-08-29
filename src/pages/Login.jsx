import { Button, Input, Spin } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { loginUserSchema } from "../Validations/userValidation";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
import { LoadingOutlined } from "@ant-design/icons";

export default function Login() {
    const [loading, setIsLoading] = useState(false);

    const navigate = useNavigate();
    const fetchLogin = async () => {
        const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formik.values),
        });
        const data = await response.json();
        console.log(data);
        if (response.ok) {
            Cookies.set("token", data.token, { expires: 1 / 24 });
            navigate("/");
        } else {
            Swal.fire({
                title: "Thất bại",
                text: data.msg,
                icon: "error",
            });
        }
        setIsLoading(false);
    };

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: loginUserSchema,
        onSubmit: (values) => {
            setIsLoading(true);
            fetchLogin();
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className="register bg-[#fffffe] w-full p-5 space-y-3 rounded-md shadow-lg shadow-[#ffc6c7]">
            <div className="">
                <input type="text" placeholder="Nhập email hoặc số điện thoại" name="email" className="w-full" value={formik.values.email} onChange={formik.handleChange} />
                {formik.errors.email && formik.touched.email && <p>{formik.errors.email}</p>}
            </div>
            <div className="">
                <input type="password" placeholder="Nhập mật khẩu" name="password" className="w-full" value={formik.values.password} onChange={formik.handleChange} />
                {formik.errors.password && formik.touched.password && <p>{formik.errors.password}</p>}
            </div>

            <div className="">
                <button className="text-[#fff] w-full flex gap-3 items-center justify-center" type="submit" disabled={loading}>
                    Đăng nhập {loading && <Spin indicator={<LoadingOutlined spin />} />}
                </button>
            </div>
            <div className="">
                <Link to="/auth/forgot" className="text-[12px] text-btn">
                    Quên mật khẩu?
                </Link>
            </div>
            <div className="border-[1px] border-btn"></div>
            <Link to="/auth/register" className="block text-center ">
                <button className="bg-[#cc6f85]">Tạo tài khoản mới</button>
            </Link>
        </form>
    );
}
