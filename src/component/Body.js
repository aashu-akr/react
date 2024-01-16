import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import { useState } from "react";

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
  const [listOfResturant, setListOfResturant] = useState([{
    info: {
      id: "629572",
      name: "White Hart Pizza",
      cloudinaryImageId: "mznveqfmric44rydj4ie",
      costForTwo: "₹300 for two",
      cuisines: ["Pizzas", "Burgers"],
      avgRating: 4,

      sla: {
        slaString: "30-35 mins",
      },
    },
  },
 
  {
    info: {
      id: "650301",
      name: "Punjabi Angithi (Vegorama Group)",
      cloudinaryImageId: "462fee9cf0f98f128cc8aa9148c24bbf",
      costForTwo: "₹400 for two",
      cuisines: ["North Indian", "Chinese"],
      avgRating: 4.2,

      sla: {
        slaString: "20-25 mins",
      },
    },
  },
  {
    info: {
      id: "607711",
      name: "Khadak Singh Da Dhaba",
      cloudinaryImageId: "8144bf37947c161953f656308d1bfc30",
      locality: "Vasundhara Colony",
      areaName: "Indirapuram",
      costForTwo: "₹200 for two",
      cuisines: ["North Indian", "Mughlai", "Tandoor", "Indian", "Snacks"],
      avgRating: 4.1,

      sla: {
        slaString: "35-40 mins",
      },
    },
  },]);


//   //  normal JS Variable:
//   var listOfResturant = [];



  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            listOfResturant = listOfResturant.filter(
              (res) => res.info.avgRating > 3.5
            );
            console.log(listOfResturant);
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
