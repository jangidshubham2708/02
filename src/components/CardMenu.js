import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card_Menu_Api, Card_Menu_Img } from "../elementary/URL";
import Shimmer from "./Shimmer";

const CardMenu = () => {
    const [resInfo, setresInfo] = useState(null);
    const { resId } = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(Card_Menu_Api + resId);
        const json = await data.json();
        setresInfo(json.data);
        console.log(json);
    };

    if (resInfo === null) return <Shimmer />;

    const { text } = resInfo?.cards[0]?.card?.card || {};
    const { cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info || {};
    const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;

    // Ensure itemCards is an array
    const itemsArray = Array.isArray(itemCards) ? itemCards : [];

    return (
        <div className="">
            <h1>{text}</h1>
            <p className="bg-red-400">
                {cuisines?.join(", ")} - {costForTwoMessage}
            </p>
            <h2>Menu</h2>
            <ul className="to-blue-500">
                {itemsArray.map((item) => (
                    <li key={item.card.info.id}>
                        {item.card.info.name} - Rs.
                        {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                    </li>
                ))}
            </ul>
            <h2>Images</h2>
            <ul className="to-blue-500">
                {itemsArray.map((item) => {
                    const imageId = item.card.info.imageId;
                    return (
                        <li key={item.card.info.id}>
                            {imageId && (
                                <img
                                    src={ Card_Menu_Img + imageId }
                                    alt="Menu item"
                                    className="menu-item-image"
                                />
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default CardMenu;
