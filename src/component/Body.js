import RestaurantCard, { isOpenLable } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);

  const [filteredListOfRestaurant, setFilteredListOfRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  const RestaurantCardIsOpen = isOpenLable(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.627981&lng=77.3648567&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    ).catch((err) => {
      console.log(err.response.data);
    });

    const json = await data.json();
    // console.log(json);

    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const checkOnlineStatus = useOnlineStatus();

  const { loggedInUser, setUserName } = useContext(UserContext);

  if (checkOnlineStatus === false)
    return <h1>looks like you are offline!!! please check your internet</h1>;

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex mt-5 mb-5">
        <div className="search ">
          <input
            type="text"
            placeholder="Type..."
            className=" ml-4 border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="m-2 px-1.5 bg-green-100 border border-solid border-green-500 rounded-sm "
            onClick={() => {
              //filter the list and update the UI
              console.log(searchText);
              const filteredRestaurant = listOfRestaurant.filter(
                (res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase()) //when we search for any string, it will include this string and finds out the matching result
              );
              setFilteredListOfRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="search flex items-center">
          <button
            className=" m-2 px-1.5 bg-green-100 border border-solid border-green-500 rounded-sm "
            onClick={() => {
              const filteredList = listOfRestaurant.filter(
                (res) => res.info.avgRating > 4.2
              );
              setListOfRestaurant(filteredList);
              // console.log("yes");
            }}
          >
            Top Rated Resturants
          </button>
        </div>
        <div>
          <button className="search_box search flex items-center mt-2">
            <label>User Name: </label>
            <input
              className="border border-black"
              placeholder="Name"
              value={loggedInUser}
              onClick={(e) => setUserName(e.target.value)}
            />
          </button>
        </div>
      </div>
      <div className="res-cont  flex flex-wrap justifed-between p-10 ">
        {filteredListOfRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.isOpen ? (
              <RestaurantCardIsOpen resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
          //key should be on parent JSX which is maped
        ))}
      </div>
    </div>
  );
};

export default Body;
