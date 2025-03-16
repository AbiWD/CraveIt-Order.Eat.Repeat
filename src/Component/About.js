import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Child Constructor");
  }

  render() {
    console.log("Child  Render");
    return (
      <div>
        <h1>About Class Component</h1>
        <h2>This is React Web Series</h2>
        <User name={"Abhilash (function)"} />

        <UserClass
          name={"Akshay Saini (class)"}
          loacation={"Mangalore Class"}
        />
      </div>
    );
  }
}

export default About;
