import { useState, useEffect, useRef } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { Card_Api } from "../elementary/URL";
import TopRatedCard from "./TopRated@Card";

const TopRated = () => {
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(Card_Api);
    const json = await data.json();
    setListOfRestraunt(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
    );
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  if (listOfRestaurants.length === 0) return <Shimmer />;

  return (
    <div className="relative">
      <div className="w-full  mx-auto">
        <h2 className="text-center text-3xl font-bold">Top Rated Restaurants</h2>
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-md z-10"
        >
          ◀
        </button>
        <div
          ref={scrollContainerRef}
          className="flex space-x-4 overflow-x-hidden scrollbar-hide"
          style={{ scrollBehavior: "smooth" }}
        >
          {listOfRestaurants.map((restaurant) => (
            <Link
              key={restaurant?.info?.id}
              to={`/restaurant/${restaurant?.info?.id}`}
              className=" m-[34px] p-4 flex-shrink-0"
            >
              <TopRatedCard resData={restaurant} />
            </Link>
          ))}
        </div>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-md z-10"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default TopRated;
