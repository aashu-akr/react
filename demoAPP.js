import React  from "react";
import  ReactDOM  from "react-dom";

//using createElement method
const heading = React.createElement(
    "h1",
    {id : "heading1"},
    React.createElement(
        "h2",
        {id :"heading2"},
        React.createElement(
            "h3",
            {id : "heading3"},
            "this is heading 3"
        )
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

//==================================================================
//using JSX
