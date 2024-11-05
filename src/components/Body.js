import { Link } from "react-router-dom";
import RestaurantCard from "./Card";
import { useState, useEffect } from "react";
import resList from "../elementary/resData";
import ShimmerBody from "./Shimmer@body";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {

    const timer = setTimeout(() => {
      setListOfRestaurants(resList);
      setFilteredRestaurant(resList);
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleTopRated = () => {
    const filteredList = listOfRestaurants.filter(
      (res) => res.info.avgRating > 4.5
    );
    setFilteredRestaurant(filteredList);
  };

  const handleSearch = () => {
    const filteredList = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(filteredList);
  };

  const resetFilters = () => {
    setFilteredRestaurant(listOfRestaurants);
    setSearchText("");
  };
  return isLoading ? (
    <ShimmerBody />
  ) : (
    <div>
      <div className="transition-duration: 150ms">
        <div className="flex flex-wrap justify-center">
          <button
            className="border border-gray-500 px-5 py-1 rounded-full bg-gray-200 mx-2"
            onClick={handleTopRated}
          >
            Promoted Restaurants
          </button>
          <button
            className="border border-gray-500 px-5 py-1 rounded-full bg-gray-200"
            onClick={resetFilters}
          >
            Reset
          </button>
        </div>
        <div className="flex flex-wrap  ">
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
