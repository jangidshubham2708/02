import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantCard from "./Card";
import { useState, useEffect } from "react";
import resList from "../elementary/resData";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");   

  useEffect(() => {
    setListOfRestaurants(resList);
    setFilteredRestaurant(resList);
  }, []);

  const handleTopRated = () => {
    const filteredList = listOfRestaurants.filter(
      (res) => res.info.avgRating > 4.5
    );
    setFilteredRestaurant(filteredList);
  };

  const resetFilters = () => {
    setFilteredRestaurant(listOfRestaurants);
    setSearchText("");
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
   
    <div>
    <div className="  transition-duration: 150ms">
      <div className="flex flex-wrap justify-center ">
        <button
          className="border border-gray-400 px-5 py-1 rounded-full bg-gray-100 mx-2"
          onClick={handleTopRated}
        >
          Top Rated Restaurants
        </button>
        <button
          className="border border-gray-400 px-5 py-1 rounded-full bg-gray-100"
          onClick={resetFilters}
        >
          Reset
        </button>
      </div>
      <div className="flex flex-wrap px-80">
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} to={`/restaurant/${restaurant.info.id}`}>
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Body;
