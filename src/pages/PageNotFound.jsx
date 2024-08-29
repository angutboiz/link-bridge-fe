import React from "react";
import { Result } from "antd";
import { Link } from "react-router-dom";
export default function PageNotFound() {
    return (
        <Result
            status="404"
            title="404"
            subTitle="Xin lỗi, trang mà bạn tìm không tồn tại"
            extra={
                <Link to="/">
                    <button type="primary">Quay về trang chủ</button>
                </Link>
            }
        />
    );
}
