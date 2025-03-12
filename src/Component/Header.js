import { useState } from "react";

const Header = () => {
  const btnName = "Login";

  const [btnNameReact, setBtnNameReact] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://cdn.pixabay.com/photo/2017/02/17/ 17/33/food-2074638_960_720.png"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          ></button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
