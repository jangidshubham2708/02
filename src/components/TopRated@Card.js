
import { Card_Img_Cdn } from "../elementary/URL";

const TopRatedCard = (props) => {
  const { resData } = props;

  if (!resData || !resData.info) {
    return null;
  }
  
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
  } = resData?.info;

  const {deliveryTime}=resData?.info?.sla;
  const filteredCuiseines= cuisines.slice(0,2);

return ( 
    <div className="p-1 w-[220px] rounded-lg hover:bg-gray-400 transition-transform duration-300 hover:scale-110">
      <img
        className="w-80 h-60 rounded-lg"
        alt="res-logo"
        src={Card_Img_Cdn + cloudinaryImageId}
      />
      <h3 className="font-extrabold font-sans text-lg">{name}</h3>
      <h4 className="font-semibold">Cuisines - {filteredCuiseines.join(", ")}</h4>
      <h4 className="font-semibold">Ratings - {avgRating} stars</h4>
      <h4 className="font-semibold">Price - {costForTwo}</h4>
      <h4 className="font-semibold">Estimated Time - {deliveryTime} minutes</h4>
    </div>
  );
};
export default TopRatedCard;