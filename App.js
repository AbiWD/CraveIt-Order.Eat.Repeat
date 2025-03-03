import React from "react";
import ReactDOM from "react-dom/client";

// React element

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Namaste React!"
// );

const Title = () => (
  <h1 className="head" tabIndex="5">
    Namaste React using jsx
  </h1>
);

// React Functional component

const HeadingComponent = () => (
  <div id="container">
    <Title />
    {/* {Title()} */}
    <h1 className="heading"> Namste React Functional Component </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
