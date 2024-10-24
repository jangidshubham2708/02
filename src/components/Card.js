import { Card_Img_Cdn } from "../elementary/URL";
const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
  } = resData?.info;
  const{deliveryTime} = resData?.info?.sla;  

  const filteredCuiseines= cuisines.slice(0,2);

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-400">
      <img
        className="w-56 h-60"
        alt="res-logo"
        src={Card_Img_Cdn + cloudinaryImageId }
      />
      <h3 className="font-extrabold font-sans ">{name   }</h3>
      <h4 className="font-semibold">Cuisines-{filteredCuiseines.join(", ")}</h4>
      <h4 className="font-semibold">Stars-{avgRating} stars</h4>
      <h4 className="font-semibold">₹{costForTwo} </h4>
      <h4 className="font-semibold">Delivered Upto-{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;