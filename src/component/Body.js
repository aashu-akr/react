import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);

  const [filteredListOfRestaurant, setFilteredListOfRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

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
    console.log(json);

    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const checkOnlineStatus = useOnlineStatus();

  if (checkOnlineStatus === false)
    return <h1>looks like you are offline!!! please check your internet</h1>;

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-button"
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
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.sla.deliveryTime > 35
            );
            setListOfRestaurant(filteredList);
            console.log("yes");
          }}
        >
          Top Rated Resturants
        </button>
      </div>
      <div className="res-container">
        {filteredListOfRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
          //key should be on parent JSX which is maped
        ))}
      </div>
    </div>
  );
};

export default Body;
