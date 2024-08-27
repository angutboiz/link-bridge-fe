import React from "react";
import { FaMessage } from "react-icons/fa6";
import CNotification from "./components/CNotification";

export default function Notify() {
    return (
        <div className="bg-[#fffffe] p-2 rounded-md shadow-md py-3 mt-5">
            <h1 className="text-2xl font-bold">Thông báo</h1>
            <CNotification icon="message" img="https://i.pinimg.com/736x/b4/30/0d/b4300d4736d4b1037a7117fb2e08bfd7.jpg" name="Quốc Đạt" date="2" content="Con mẹ m nhanh lên!" />

            <CNotification icon="friend" img="https://kiemtientuweb.com/ckfinder/userfiles/images/avatar-fb/avatar-fb-1.jpg" name="Huỳnh Quang" date="5" />

            <CNotification
                icon="like"
                img="https://s3v2.interdata.vn:9000/s3-586-15343-storage/dienthoaigiakho/wp-content/uploads/2024/01/31132457/anh-avatar-trang-nam-12.jpg"
                name="Thịn Tai"
                date="6"
            />

            <CNotification icon="comment" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEhrm20GA_rGJaCNAu-U-jJG2fnoXmMSQdEw&s" name="Thanh Phạm" date="5" />
        </div>
    );
}
