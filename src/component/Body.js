import ResturantCard from "./ResturantCard";  //normal import
import resList from "../utils/mockData";  //normal import
import { useState } from "react";   //named import

const Body = () => {
  /**
   * State Variable - React powered element
   * maintains the state of the component
   * local state variable: local scope
   *
   *   const [listOfResturant] = useState(); - State Variable
   *   let listOfResturant; - Normal Variable
   *
   *    [listOfResturant] - state value by react
   */
  //   useState() returns the state of the variable and its is received in an Array

  //  const [listOfResturant] = useState(); - State Variable
  //industry convention : we apply set before the name of the the list
//   ex: listOfResturant -> setlistOfResturant, res -> setRes
  

  [listOfResturant, setListOfResturant] = useState(resList);
  /*  
      `Array Destructuring`:
      const arr = useState(resList);

      [listOfResturant, setListOfResturant] = arr;

      const listOfResturant = arr[0];
      const setListOfResturant = arr[1];

      This above is the same thing as below:

       [listOfResturant, setListOfResturant] = useState(resList);
  */ 

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfResturant.filter(
              (res) => res.info.avgRating > 4 
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
