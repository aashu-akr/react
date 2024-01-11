import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  Logo
 *  Nav Items
 * 
 * Body
 *  Search
 *  Resturant Container
 *      Resturant Card
 *          Img
 *          Name of res
 *          Star rating,cuisines,delivery time
 *          
 * Footer
 *  Copyright
 *  Links
 *  Address
 *  Contact
 */

const Header = () =>{
    return (
        <div className = "header">
            <div className = "logo-container">
                <img className = "logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li className="home">Home </li>
                    <li className="about-us">About Us </li>
                    <li className="contact-us">Contact Us </li>
                    <li className="cart"> 🛒 </li>
                </ul>
            </div>
        </div>
    )
};

const ResturantCard = (props) =>{
    console.log(props);
    return (
        <div className="res-card">
            <img className = "res-logo" alt = "res-logo" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDcCU2eMgh5ybB55I_hLeYiNQ8yuC9_lbSGdH3jtCCPg9S4nIJJZOFTn-2CfXIc3f8Big&usqp=CAU" />
            <h3 className="res-name1">{props.resName}</h3>
            <h4 className="cuisine">{props.cusine}</h4>
            <h4 className="rating">{props.rating}</h4>
            <h4 className="del-time">{props.delTime}</h4>

        </div>
    )
}

const Body =() =>{
    return(
        <div className="body">
            {/* <button className="search-button">Search</button> */}
            <div className="search">Search</div>
            <div className="res-container">
                <ResturantCard
                resName = "Meghna Foods"
                cusine = "Biryani, North India, Thai"
                rating = "4.4 ⭐"  
                delTime = "30-35 mins"
                />  
                <ResturantCard
                resName = "KFC"
                cusine = "Burger, Fries, Tacos"
                rating = "4.6 ⭐"  
                delTime = "20-25 mins"
                />         
            </div>  
        </div>
    )
};

const AppLayout =()=>{
    return (
        <div className = "app">
            {/* //Header */}
            {Header()}
            <Body/>
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);