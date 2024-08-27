import React, { useEffect, useState } from "react";
import { Spin } from "antd";
import { Link, NavLink } from "react-router-dom";
export default function CVideo() {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch("https://phimapi.com/v1/api/danh-sach/hoat-hinh")
            .then((res) => res.json())
            .then((data) => {
                setData(data.data.items);
                setLoading(true);
            });
    }, []);

    return (
        <div>
            {loading ? (
                <div>
                    {data.map((item, index) => (
                        <Link to={`/video/${item.slug}`} key={index} className="block px-3 py-2 hover:bg-bg rounded-md cursor-pointer">
                            <div className="flex gap-3">
                                <div className="w-[100px] h-[100px] overflow-hidden">
                                    <img src={`https://img.phimapi.com/${item.poster_url}`} alt={item.name} className="w-full h-full object-cover rounded-md" />
                                </div>
                                <div className="flex-1">
                                    <p className="font-bold line-clamp-1">{item.name}</p>
                                    <p className="text-sm text-paragraph">{item.origin_name}</p>
                                    <p className="text-sm">{item.episode_current}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            ) : (
                <div className="h-[500px] flex items-center justify-center">
                    <Spin></Spin>
                </div>
            )}
        </div>
    );
}
