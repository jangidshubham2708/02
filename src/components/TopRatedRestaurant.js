import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { Card_Api } from "../elementary/URL";
import TopRatedCard from "./TopRated@Card";

const TopRated = () => {

  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  console.log("Body Rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      Card_Api
    );

    const json = await data.json();
    console.log(json);

    
    setListOfRestraunt(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
    return listOfRestaurants.length === 0 ? (
      <Shimmer />
    ) : (
      <div className=" py-6">
        <div className="w-full max-w-6xl mx-auto">
          <h2 className="text-center text-2xl font-semibold mb-4">Top Rated Restaurants</h2>
          <div className="flex space-x-4 overflow-x-auto p-4">
            <div className="flex space-x-4">
              {listOfRestaurants.map((restaurant) => (
                <Link
                  key={restaurant?.info?.id}
                  to={"/restaurant/" + restaurant?.info?.id}
                  className="min-w-[300px] max-w-[300px] flex-shrink-0"
                >
                  <TopRatedCard resData={restaurant} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default TopRated;