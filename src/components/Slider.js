import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Card_Api, Card_Menu_Img } from "../elementary/URL";
import Shimmer from "./Shimmer";

const Slider = () => {
  const [slideInfo, setSlideInfo] = useState(null);
  const { slideId } = useParams();
  const [searchText, setSearchText] = useState("");
  const [filteredSlideArray, setFilteredSlideArray] = useState([]);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(Card_Api + slideId);
    const json = await data.json();
    setSlideInfo(json.data);
  };

  useEffect(() => {
    if (slideInfo) {
      const slide = slideInfo?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info;
      const slideArray = Array.isArray(slide) ? slide : [];

      const filteredList = slideArray.filter((item) => {
        const itemName = item?.info?.name?.toLowerCase() || "";
        return itemName.includes(searchText.toLowerCase());
      });

      setFilteredSlideArray(filteredList);
    }
  }, [searchText, slideInfo]);

  if (slideInfo === null) return <Shimmer />;

  const slide = slideInfo?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info;
  const slideArray = Array.isArray(slide) ? slide : [];

   const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -200, 
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative ">
      <h2 className="text-center py-5 text-3xl font-bold ">What's on your mind?</h2>
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-md z-10"
      >
        ◀
      </button>
      <div
        ref={scrollContainerRef}
        className="flex overflow-hidden space-x-8 scrollbar-hide"
        style={{ scrollBehavior: "smooth" }}
      >
        {(searchText ? filteredSlideArray : slideArray).map((item) => {
          const imageId = item.imageId;
          return (
            <div key={imageId} className="flex-shrink-0 ">
            {imageId && (
              <img
                src={Card_Menu_Img + imageId}
                alt="Menu item"
                className="w-48 m-[24px] object-cover rounded-lg cursor-pointer "
              />
            )}
          </div>          
          );
        })}
      </div>
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-md z-10"
      >
        ▶
      </button>
    </div>
  );
};

export default Slider;
