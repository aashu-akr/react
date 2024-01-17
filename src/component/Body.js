import ResturantCard from "./ResturantCard";  //normal import
import resList from "../utils/mockData";  //normal import
import { useEffect, useState } from "react";   //named import
import Shimmer from "./Shimmer";

  
  /*
   * State Variable - React powered element
   * maintains the state of the component
   * local state variable: local scope
   *
   * const [listOfResturant] = useState(); - State Variable
   * let listOfResturant; - Normal Variable
   * [listOfResturant] - state value by react
   * 
   * const [listOfResturant] = useState(); - State Variable
   * industry convention : we apply set before the name of the the list
   * ex: listOfResturant -> setlistOfResturant, res -> setRes
   * useState() returns the state of the variable and its is received in an Array
   * 
   */

const Body = () => {

[listOfResturant, setListOfResturant] = useState([]);
  /*  
		setListOfResturant <- state variable in react
      `Array Destructuring`:
      const arr = useState(resList);

      [listOfResturant, setListOfResturant] = arr;

      const listOfResturant = arr[0];
      const setListOfResturant = arr[1];

      This above is the same thing as below:

       [listOfResturant, setListOfResturant] = useState(resList);
  */

// syntax = useEffect(setup, dependencies?)
useEffect(()=>{
	fetchData();
}, []);

const fetchData = async () =>{
	const data = await fetch(
		"https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.627981&lng=77.3648567&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
	);

	const json = await data.json();

	console.log(json);

	setListOfResturant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

};

/*
the below is the example of conditional rendering:
if(listOfResturant.length === 0){	//adding loading screen
	return(
		<Shimmer/>
	)
}
*/

return listOfResturant.length === 0 ? (
< Shimmer/> ) 
: (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfResturant.filter(
              (res) => res.info.avgRating >= 4.2
            );
            setListOfResturant(filteredList);
          }}
        >
          Top Rated Resturants
        </button>
      </div>
      <div className="res-container">
        {listOfResturant.map((resturant) => (
          <ResturantCard key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
