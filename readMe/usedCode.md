const heading = React.createElement("h1", {id:"heading"}, "Namaste React🚀");

console.log(heading);
/\*\*

- now, how JSX works:
- JSX =>React.createElement => React Element - JS object(end of the day) => HTMLElement(render)
- JSX is converted to React element behind the scene by BABLE
  \*/
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(heading);

========================================================================
/\*\*

- how the code is being executed
- React.createElement => React Element - JS object(end of the day) => HTMLElement(render)
-
- now, how JSX works
-
- now, how JSX works:
- JSX =>Bables transpiles it to React.createElement => React Element - JS object(end of the day) => HTMLElement(render)
- JSX is converted to React element behind the scene by BABLE
  \*/
  // root.render(jsxHeading);
  // ReactDOM will render and replace all that is present in the <div> tag
  // it will replace, NOT append

//if i were to give class name to the JSX
// const jsxHeading1 = <h1 className="head">Namaste React🚀 using JSX</h1>

const jsxHeading = <h1 className = "heading">Namaste React🚀using JSX</h1>
//this className is JSX which gets converted to a HTML class in the browser, done by Babel

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);

//React element
const heading = (

<h1 className="head">
Namaste React🚀using JSX
</h1>
);
//React functional Component:

const Title = () => (

<div id = "container">
<h1 className="head"> Hello from React Functional Component: Title🚀</h1>
</div>
);

// if i want to render Title component in Heading component, then i will do this and the code of Title will come here in the backend and understood by Babel
const Heading = () => (

<div id = "container">
<Title/>  
 <h1 className="head"> Hello from React Functional Component: Heading🚀</h1>
</div>
);
//above is called Component Composition: composing two component together like above example
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);

//React Component: Everything is a component in react:
/\*\*

- two types of component
- class based : old way
- functional based : new way
-
- (a) Functional Component:
- const Heading = ()=> (
- return <h1 className = "head"> Hello from React Functional Component</h1>
- );
-
- We can also created Nested Functional Component:
- const Heading = () =>(
- <div id = "container">
-      <h1 className = "head"> Hello from Nested  React Functional Component</h1>
- </div>
- );
-
- to render functional component : root.render(<Heading/>);
-
-
- \*/

==========================================================
Eipsode 4:

Hard coding the values :

const ResturantCard = () =>{
return (

<div className="res-card">
<img className = "res-logo" alt = "res-logo" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDcCU2eMgh5ybB55I_hLeYiNQ8yuC9_lbSGdH3jtCCPg9S4nIJJZOFTn-2CfXIc3f8Big&usqp=CAU" />
<h3 className="res-name1">Meghna Foods</h3>
<h4 className="cuisine">Biryani, North India, Thai</h4>
<h4 className="rating">4.4 ⭐</h4>
<h4 className="del-time"> ETA : 40 - 45 mins</h4>

        </div>
    )

## }

<h3 className="res-name1">{resData.info.name}</h3>
      <h4 className="cuisine">{resData.info.cuisines.join(", ")}</h4>
      <h4 className="costForTwo">{resData.info.costForTwo} for Two</h4>
      <h4 className="rating">{resData.info.avgRating} ⭐</h4>
      <h4 className="del-time">{resData.info.sla.slaString}</h4>

writing above this as :

const {
cloudinaryImageId,
name,
cuisines,
costForTwo,
avgRating,
slaString,
} = resData?.data;

<!-- the above is called destructuring our data -->

    <h3 className="res-name1">{name}</h3>
    <h4 className="cuisine">{cuisines.join(", ")}</h4>
    <h4 className="costForTwo">{costForTwo} for Two</h4>
    <h4 className="rating">{avgRating} ⭐</h4>
    <h4 className="del-time">{sla.slaString}</h4>

---

        {/* <ResturantCard resData = {resList[0]}/>
        <ResturantCard resData = {resList[1]}/>
        <ResturantCard resData = {resList[2]}/>
        <ResturantCard resData = {resList[3]}/>
        <ResturantCard resData = {resList[4]}/>
        <ResturantCard resData = {resList[5]}/>
        <ResturantCard resData = {resList[6]}/>
        <ResturantCard resData = {resList[7]}/>  */}

        is equivalent to

        {
            resList.map(resturant => <ResturantCard resData = {resturant}/>)
        }

---

warning:

App.js:894 Warning: Each child in a list should have a unique "key" prop.

to fix this, there is a key in the react component

    <ResturantCard key = {resturant.info.id} resData = {resturant}/>)

=> e have addded this : key = {resturant.info.id}

=> Unique Key property: It means each of the item in resList has to be uniquley represented.
so always add key to MAP 0

why we need keys in Map?

=============================================================================================

Episode 5:

//normal JS Variable:
let listOfResturant1 = [];
//State Variable:
let [listOfResturant1] = useSate([]);

      `Array Destructuring`:
      const arr = useState(resList);

      [listOfResturant, setListOfResturant] = arr;

      This above is the same thing as below:

       [listOfResturant, setListOfResturant] = useState(resList);

=============================================================================================
Episode 6:

//we have used the below code to fetch data from swiggy api and store in promise(a javascript function)

const fetchData = async () =>{
	const data = await fetch(
		"https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.627981&lng=77.3648567&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
	);

	const json = await data.json();

	console.log(json);
}


//used this to change the state of setListOfResturant - here we are also reading the json data using optional chaining
setListOfResturant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

//to show a spinner while page is loading:
if(listOfResturant.length === 0){
	return(
		<h1>Loading.....</h1>
	)
}

//shimmer UI