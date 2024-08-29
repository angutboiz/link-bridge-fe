import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { browserHistory } from "react-router";
import * as yup from "yup";
import { registerUserSchema } from "../Validations/userValidation";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

export default function Register() {
    const [loading, setIsLoading] = useState(false);

    const navigate = useNavigate();
    const fetchLogin = async (values) => {
        const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        });
        const data = await response.json();
        if (response.ok) {
            Swal.fire({
                title: "Thành công",
                text: data.msg,
                icon: "success",
                willClose: () => {
                    navigate("/auth/otp");
                },
            });
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
            full_name: "",
            email: "",
            phone_number: "",
            date_of_birth: "",
            gender: "Male",
            password: "",
        },
        validationSchema: registerUserSchema,
        onSubmit: (values) => {
            const dataRegister = {
                full_name: values.full_name,
                email: values.email,
                phone_number: values.phone_number,
                date_of_birth: values.date_of_birth,
                gender: values.gender,
                password: values.password,
            };
            setIsLoading(true);
            fetchLogin(dataRegister);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className="register bg-[#fffffe] w-full p-5 space-y-3 rounded-md shadow-lg shadow-[#ffc6c7]">
            <div className="flex gap-3 flex-col md:flex-row">
                <div className="flex-1">
                    <input type="text" placeholder="Nhập email" name="email" className="w-full" value={formik.values.email} onChange={formik.handleChange} />
                    {formik.errors.email && formik.touched.email && <p>{formik.errors.email}</p>}
                </div>
                <div className="flex-1">
                    <input type="text" placeholder="Nhập họ tên của bạn" name="full_name" className="w-full" value={formik.values.full_name} onChange={formik.handleChange} />
                    {formik.errors.full_name && formik.touched.full_name && <p>{formik.errors.full_name}</p>}
                </div>
            </div>
            <div className="flex gap-3 flex-col md:flex-row">
                <div className="flex-1">
                    <input type="text" placeholder="Nhập số điện thoại" name="phone_number" className="w-full" value={formik.values.phone_number} onChange={formik.handleChange} />
                    {formik.errors.phone_number && formik.touched.phone_number && <p>{formik.errors.phone_number}</p>}
                </div>
                <div className="flex-1">
                    <input type="date" placeholder="dd/mm/yyyy" name="date_of_birth" className="w-full" value={formik.values.date_of_birth} onChange={formik.handleChange} />
                    {formik.errors.date_of_birth && formik.touched.date_of_birth && <p>{formik.errors.date_of_birth}</p>}
                </div>
            </div>
            <div className="flex gap-3 flex-col md:flex-row">
                <div className="flex-1">
                    <input type="password" placeholder="Nhập mật khẩu" name="password" className="w-full" value={formik.values.password} onChange={formik.handleChange} />
                    {formik.errors.password && formik.touched.password && <p>{formik.errors.password}</p>}
                </div>
                <div className="flex-1">
                    <input type="password" placeholder="Nhập lại mật khẩu" name="confirm_password" className="w-full" value={formik.values.confirm_password} onChange={formik.handleChange} />
                    {formik.errors.confirm_password && formik.touched.confirm_password && <p>{formik.errors.confirm_password}</p>}
                </div>
                <div className="flex-1">
                    <select type="password" placeholder="Nhập lại mật khẩu" name="gender" className="w-full" value={formik.values.gender} defaultValue="Male" onChange={formik.handleChange}>
                        <option value="Male">Nam</option>
                        <option value="Female">Nữ</option>
                    </select>
                    {formik.errors.gender && formik.touched.gender && <p>{formik.errors.gender}</p>}
                </div>
            </div>

            <div className="">
                <div className="">
                    <button className="text-[#fff] w-full flex gap-3 items-center justify-center" type="submit" disabled={loading}>
                        Bước tiếp theo {loading && <Spin indicator={<LoadingOutlined spin />} />}
                    </button>
                </div>
            </div>

            <div className="border-[1px] border-[#dadde1]"></div>
            <Link to="/auth" className="block text-center ">
                <button className="bg-[#594a4e]">Đăng nhập nếu đã có tài khoản?</button>
            </Link>
        </form>
    );
}
