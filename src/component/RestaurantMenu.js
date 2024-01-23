import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, SetResInfo] = useState(null);

  const { resId } = useParams();
  console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId).catch((err) => {
      console.log(err.response.data);
    });
    const json = await data.json();

    SetResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.categories[1];

  console.log(itemCards);

  return (
    <div className="menu">
      <h2>{name}</h2>
      <p>{cuisines.join(",") + " - " + costForTwoMessage}</p>

      <h3>Menu</h3>
      <ul>
        {itemCards.map((items) => (
          <li key={items.card.info.id}>
            {items.card.info.name +
              " - " +
              (items.card.info.price === undefined
                ? items.card.info.defaultPrice
                : items.card.info.price)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
