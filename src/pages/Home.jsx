import React from "react";
import CPost from "./components/CPost";
import CShowPost from "./components/CShowPost";
export default function Home() {
    return (
        <div className="px-2 py-5">
            <CPost />
            <CShowPost />
        </div>
    );
}
