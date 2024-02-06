/_ "react" <- this is inside the node_module and being imported in to code
browser scripts cannot be imports or exports and as browser understand normal javascript script and javascript does not have any import/export
_/

/\*
React.createElement("h1", {id:"heading"}, "Namaste React🚀");
//this is done using Core React
//this is not developer friendly
is equivalent to

<h1 id = "heading1">Namaste React🚀 using JSX</h1>
//this is done using JSX

//React and JSX is different

How HTML is different from JSX?

if i want to give class name in HTML:

<div class = "head"> hello </div>

if i want to give class name in JSX:

<h1 class = "head">Namaste React🚀 using JSX</h1>

\*/

/\*\*

- Header
- Logo
- Nav Items
-
- Body
- Search
- Resturant Container
-      Resturant Card
-          Img
-          Name of res
-          Star rating,cuisines,delivery time
-
- Footer
- Copyright
- Links
- Address
- Contact
  \*/

========================================
/_
the below is the example of conditional rendering:
if(listOfResturant.length === 0){ //adding loading screen
return(
<Shimmer/>
)
}
_/

=========================================

# Redux Toolkit:

-install @reduxjs/toolkit and react-redux

-Build our store
-connect our store to our app
-slice(cartSlice)
-dispatch(action)
-selector

==========================================

# Types of Testing:

- Unit Testing
- Integrated Testing
- End to End Testing

# Setting up Testing in our app:

- Install React Testing Library
- Installed Jest
- Installed Babel dependencies
- Configured babel.config.js file
