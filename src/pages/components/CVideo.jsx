import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Spin } from "antd";

export default function CVideo() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await fetch(`https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=${page}`);
                const result = await res.json();
                if (result.items && result.items.length > 0) {
                    setData((prevData) => [...prevData, ...result.items]);
                } else {
                    setHasMore(false);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                setHasMore(false); // Stop trying to fetch if there's an error
            } finally {
                setLoading(false); // Đảm bảo setLoading(false) trong cả trường hợp thành công và lỗi
            }
        };

        fetchData();
    }, [page]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.scrollHeight - 10 && hasMore && !loading) {
                setPage((prevPage) => prevPage + 1);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [loading, hasMore]);

    return (
        <div>
            <div className="grid grid-cols-2">
                {data?.map((item, index) => (
                    <Link to={`/video/${item.slug}`} key={index} className="block px-3 py-2 group hover:bg-bg rounded-md cursor-pointer">
                        <div className="flex gap-3">
                            <div className="w-[100px] h-[100px] relative overflow-hidden">
                                <img
                                    src={`https://img.ophim.live/uploads/movies/${item.poster_url}`}
                                    alt={item.name}
                                    loading="lazy"
                                    className="w-full h-full object-cover rounded-md group-hover:scale-150 transition-all duration-300"
                                />
                                <div className="absolute bottom-0 right-0 bg-btn px-1">
                                    <p className="text-[10px] text-bg">{item.tmdb.vote_average} IMDB</p>
                                </div>
                            </div>
                            <div className="flex-1">
                                <p className="font-bold line-clamp-2 group-hover:text-btn">{item.name}</p>
                                <div className="text-sm text-paragraph group-hover:text-btn">
                                    <p>{item.origin_name}</p>
                                    <p>{item.year}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            {loading && (
                <div className="h-[100px] flex items-center justify-center">
                    <Spin />
                </div>
            )}
        </div>
    );
}
