import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.categories[1];
  // resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.itemsCards?.card?.info?.category ;)   [1]?.card?.card
  //   ?.categories[1];

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
              " - Rs: " +
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
