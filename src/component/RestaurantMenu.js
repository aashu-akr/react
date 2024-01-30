import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
    );
  console.log(categories);

  return (
    <div className="text-center">
      <h2 className=" font-bold text-2xl ">{name}</h2>
      <p className="my-4 ">{cuisines.join(",") + " - " + costForTwoMessage}</p>
      {/* <h3 className="font-bold text-xl">Menu</h3> */}
      {categories.map((category) => (
        <RestaurantCategory data={category?.card?.card} />
      ))}
    </div>
  );
};

export default RestaurantMenu;

/**
{
<ul>
{itemCards.map((items) => (
  <li key={items.card.info.id}>
    {items.card.info.name +
      " - Rs : " +
      (items.card.info.price === undefined
        ? items.card.info.defaultPrice / 100
        : items.card.info.price / 100)}
  </li>
))}
</ul>
}
*/
