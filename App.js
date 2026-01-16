import React from "react";
import ReactDOM from "react-dom/client";

//React component
const root = ReactDOM.createRoot(document.getElementById("root"));
const Title = () => (<h1 className="title">React Functional component</h1>);
// component composition
let dynamicValue = 'This value is dynamic';
const HeadingComponent = () => (
    <div className="container">
        {Title()}
        <Title></Title>
        <Title/>
        <h6>{dynamicValue}</h6>
        <h2 className="heading">Functions returning JSX or React element is functional component</h2>
    </div>
);

root.render(<HeadingComponent />);
