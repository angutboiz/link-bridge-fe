import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
                setData(data);
                setMovie(data.episodes[0].server_data);
                setLoading(true);
            });
    }, []);

    console.log(movie);

    return (
        <div className="bg-[#fffffe] p-2 rounded-md shadow-md py-3 mt-5">
            {/* {data ?? <iframe src={data?.episodes[0]?.server_data[0]?.link_embed} allowFullScreen allow="autoplay" className="w-[100%] h-[300px] md:w-[1000px] md:h-[500px]" />} */}
            <div className=""></div>
        </div>
    );
}
