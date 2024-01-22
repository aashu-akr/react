import { useEffect } from "react";

const RestaurantMenu = () => {
  useEffect(() => {
    fetchMenu();
    console.log("menu api fetched");
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.627981&lng=77.3648567&restaurantId=43904&catalog_qa=undefined&submitAction=ENTER"
    ).catch((err) => {
      console.log(err.response.data);
    });

    const json = await data.json();
  };

  return (
    <div className="menu">
      <h1>Name of the Restaurant</h1>
      <h2>Menu</h2>
      <ul>
        <li>Briyani</li>
        <li>Burgers</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
