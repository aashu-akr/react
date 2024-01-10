const heading = React.createElement("h1", {id:"heading"}, "Namaste React🚀");

console.log(heading);
/**
 * now, how JSX works:
 * JSX =>React.createElement => React Element - JS object(end of the day) => HTMLElement(render)
 * JSX is converted to React element behind the scene by BABLE
 */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

========================================================================
/**
 * how the code is being executed
 * React.createElement => React Element - JS object(end of the day) => HTMLElement(render)
 * 
 * now, how JSX works
 * 
 * now, how JSX works:
 * JSX =>Bables transpiles it to React.createElement => React Element - JS object(end of the day) => HTMLElement(render)
 * JSX is converted to React element behind the scene by BABLE
 */
// root.render(jsxHeading);
// ReactDOM will render and replace all that is present in the <div> tag 
//  it will replace, NOT append

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
/**
 * two types of component
 * class based : old way
 * functional based : new way
 *
 * (a) Functional Component:
 * const Heading = ()=> (
 *  return <h1 className = "head"> Hello from React Functional Component</h1>
 * );
 *
 * We can also created Nested Functional Component:
 * const Heading = () =>(
 *  <div id = "container">
 *      <h1 className = "head"> Hello from Nested  React Functional Component</h1>
 * </div>
 * );
 *
 * to render functional component : root.render(<Heading/>);
 *
 *
 * */
