import React  from "react";
import  ReactDOM  from "react-dom";


//React element
const title1 =(
    <div id = "container">
        <h1 className="head"> Hello from React Element: Title1🚀</h1>
    </div>
);

//React component
const Title = ()=>(
    <div id = "container">
        <h1 className="head"> Hello from React Functional Component: Title🚀</h1>
    </div>
);
const number = 20000;

//we are injecting any JS code inside JSX using {}, the code will come inside the JSX
const Heading = () => (
    <div id = "container">
        {200+300}
        <h1 className="head"> Hello from React Functional Component: Heading🚀</h1>
        {Title()} 
        {title1} 
        <Title/>
        <Title></Title>
    </div>
);


/**
 * suppose we are fetching data from an API and it turned out to be a bad API
 * then it may result in a situation where an attacker might inject some bad JS code
 * and try to run it on the browser. It can lead to "cross-site script attack"
 * To avoid this, if any malicious data is passed, then JSX will check and then run it,
 * JSX will sanitize the data and then run automatically  
 * 
 * to render a React component:
 * <Title/>
 * instead: we can also write as <Title></Title>
 * <Title/> = <Title></Title>
 * 
 * google this : cross-site script attack
 * 
 * what is Heading(which is a functional component) at EOD?
 * 
 * if our code is fast and readable, then React is not making our code fast, JSX 
 * is helping out to make our code fast and readble with help of Bable and ofcourse, Parcel 
 * 
 *      {Title()} - to call a react component
        {title1} - to call a react Element
        <Title/> - to call a react component
        <Title></Title> - to call a react component
 */

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

