import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card_Api, Card_Menu_Img } from "../elementary/URL";
import Shimmer from "./Shimmer";

const Slider = () => {
    const [slideInfo, setSlideInfo] = useState(null);
    const { slideId } = useParams();
    const [searchText, setSearchText] = useState("");
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(Card_Api + slideId);
        const json = await data.json();
        setSlideInfo(json.data);
        console.log(json);
    };
    const handleSearch = () => {
      const filteredList = listOfRestaurants.filter((res) =>
        res.info.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredRestaurant(filteredList);
    };


    if (slideInfo === null) return <Shimmer />;

    const slide = slideInfo?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info;
    const slideArray = Array.isArray(slide) ? slide : [];

 console.log("hey");
 return(
<div>
      <div className="  transition-duration: 150ms">
      <div className="flex flex-wrap justify-center ">
        <div className="flex items-center">
          <input
            type="text"
            className="px-4 border p-1 rounded-l-full"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search restaurants..."
          />
          <button
            className="border border-gray-400 px-5 py-1 rounded-r-full bg-gray-100"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        </div>
  <div className=" ">
     <div className="w-full max-w-6xl mx-auto">
 <h2 className="text-center text-2xl font-semibold "></h2>
 <div className="flex overflow-y-hidden space-y-0 p-4 ">
   {slideArray.map((item) => {
     const imageId = item.imageId;
     return (
       <div key={imageId} className="flex-shrink-0">
         {imageId && (
           <img
             src={Card_Menu_Img + imageId}
             alt="Menu item"
             className="w-32 h-32 object-cover rounded-lg cursor-pointer "
           />
         )}
       </div>
     );
   })}
 </div>
 </div>
</div>
</div>
</div>

);
};

export default Slider;
