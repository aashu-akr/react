import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla } =
    resData?.info;
  //this is called optional chaining

  return (
    <div className="res-card">
      <img
        className="res-logo"
        // this {"logo" + "food"} is javascript as we cannot add two strings simply
        alt="logo - food"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="res-name1">{name}</h3>
      <h4 className="cuisine">{cuisines.join(", ")}</h4>
      <h4 className="costForTwo">{costForTwo}</h4>
      <h4 className="rating">{avgRating} ⭐</h4>
      <h4 className="del-time">{sla.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
