import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla } =
    resData?.info;
  //this is called optional chaining

  return (
    <div className="res-card m-4 p-4 w-[250px] rounded-lg ">
      <img
        className="res-logo rounded-lg "
        // this {"logo" + "food"} is javascript as we cannot add two strings simply
        alt="logo - food"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="res-name1 font-bold mt-2 py- 4 ">{name}</h3>
      <h4 className="cuisine">{cuisines.join(", ")}</h4>
      <h4 className="costForTwo">{costForTwo}</h4>
      <h4 className="rating">{avgRating} ⭐</h4>
      <h4 className="del-time">{sla.slaString}</h4>
    </div>
  );
};

//higher order function
export const isOpenLable = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className=" absolute bg-black text-white rounded-sm m-2 px-2 pd-1 ">
          Open
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
