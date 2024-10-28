
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
    <div className="">
      <img
        className="w-32 h-32"
        alt="res-logo"
        src={Card_Img_Cdn + cloudinaryImageId}
      />
      <h3 className="font-extrabold font-sans">{name}</h3>
 <h4 className="font-semibold">Cuisines-{filteredCuiseines.join(", ")}</h4>
      <h4 className="font-semibold">{avgRating} stars</h4>
      <h4 className="font-semibold">₹{costForTwo} For Two</h4>
      <h4 className="font-semibold">{deliveryTime} minutes</h4>
    </div>
  );
};

export default TopRatedCard;