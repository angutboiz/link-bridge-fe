import { Button, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaCirclePlay } from "react-icons/fa6";

export default function VideoDetail() {
    let { id } = useParams();
    const [data, setData] = useState({});
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch(`https://phimapi.com/phim/${id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setData(data.movie);
                setMovie(data.episodes[0].server_data);
                setLoading(true);
            });
    }, []);

    console.log(movie);
    console.log(data);

    return (
        <div className="bg-[#fffffe] rounded-md shadow-md mt-5 overflow-hidden">
            {loading ? (
                <div className="">
                    <div className="relative w-full h-[400px]">
                        <img src={data.thumb_url} className="h-full object-cover w-full" alt={data.content} />
                        <div className="absolute top-[45%] right-[45%] cursor-pointer text-[#fff] hover:text-btn">
                            <FaCirclePlay size={60} />
                        </div>
                    </div>
                    <div className="px-5 py-3">
                        <h1 className="font-bold text-xl">{data.name}</h1>
                        <p>{data.origin_name}</p>
                        <div className="grid grid-cols-8 gap-2 mt-2 ">
                            {movie.map((item, index) => (
                                <Button key={index}>{item.name}</Button>
                            ))}
                        </div>
                        <p className="mt-2">{data.content}</p>
                    </div>
                </div>
            ) : (
                <div className="h-[500px] flex items-center justify-center">
                    <Spin />
                </div>
            )}
        </div>
    );
}
