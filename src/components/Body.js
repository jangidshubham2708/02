
import RestaurantCard from "./Card";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { Card_Api } from "../elementary/URL";

const Body = () => {

  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

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

    // Optional Chaining
    setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setListOfRestraunt(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : ( 
    <div className="bg-slate-100 ">
      <div className=" flex flex-wrap px-80">
        <div className="justify-center peer-hover mx-80">
          <input
            type="text"
            className=" px-24  border border-gray-400 p-1 rounded-l-full "
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="border border-gray-400 px-5 py-1 rounded-r-full bg-gray-100"
            onClick={() => {
              console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className=" border border-gray-400 px-5 py-1 rounded-full bg-gray-100 mx-[-1350px]"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
       
      </div>
      <div className="flex flex-wrap px-[50px]">
        {filteredRestaurant.map((restaurant) => (
          <Link
          key={restaurant?.info?.id}
          to={"/restaurants/" + restaurant?.info?.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;