import React from "react";
import ReactDOM from "react-dom/client";

// "react" <- this is inside the node_module and being imported in to code

//browser scripts cannot be imports or exports and as browser understand normal javascript script and javascript does not have any import/export

const heading = React.createElement("h1", {}, "Hello from React this is finally printed");

console.log(heading);

const root1 = ReactDOM.createRoot(document.getElementById("root"));

root1.render(heading);


