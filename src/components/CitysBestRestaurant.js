import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Card_Api } from "../elementary/URL";
import { Link } from "react-router-dom";
const City = () => {
    const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(Card_Api);
    const json = await data.json();
    setBrands(json?.data?.cards[6]?.card?.card?.brands);
  };

  return brands.length === 0 ? ( // Check if brandText is empty
    <Shimmer />
  ) : (
    <div className="">
    <h1 className="flex flex-wrap justify-center my-8 text-xl  font-extrabold">Best Places to Eat Across Cities</h1>
    <div className="   ">
      <div className=" mx-1">
        <div className="flex flex-wrap justify-center ">
          {brands.length > 0 ? (
            brands.map((brand, index) => (
              <Link key={index} to={brand.link} className="flex bg-white border border-gray-300 rounded-lg shadow-md m-1 p-2 hover:bg-gray-400 ">
                <h1 className="text-l font-semibold text-center">
                  {brand.text}
                </h1>
              </Link>
            ))
          ) : (
            <h1 className="text-2xl font-semibold">No brand text found</h1>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};
export default City;
