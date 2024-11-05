import { useState, useEffect } from "react";  
import { Card_Api } from "../elementary/URL";
import { Link } from "react-router-dom";
import ShimmerBest from "./Shimmer@Best";
const BestCuisines = () => {
    const [cuisines, setCuisines] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(Card_Api);
    const json = await data.json();
    setCuisines(json?.data?.cards[7]?.card?.card?.brands);
  };

  return cuisines.length === 0 ? ( 
    <ShimmerBest />
  ) : (
    <div className="">
    <h1 className="flex flex-wrap justify-center text-xl my-8 font-extrabold">Best Cuisines Near Me</h1>
    <div className=" ">
      <div className=" mx-7">
        <div className="flex flex-wrap justify-center">
          {cuisines.length > 0 ? (
            cuisines.map((cuisineres, index) => (
              <Link key={index} to={cuisineres.link} className="flex bg-white border border-gray-300 rounded-lg shadow-md m-1 p-2 hover:bg-gray-400 ">
                <h1 className="text-xl font-semibold text-center">
                  {cuisineres.text}
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
export default BestCuisines;
