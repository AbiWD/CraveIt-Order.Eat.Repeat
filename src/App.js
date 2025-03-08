import React from "react";
import ReactDOM from "react-dom/client";
import { resObj, cloudinaryUrl } from "../utils/resData";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://cdn.pixabay.com/photo/2017/02/17/17/33/food-2074638_960_720.png"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;

  const {} = resData;

  return resData.map((restaurant, i) => (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${restaurant.info.cloudinaryImageId}`}
        alt="res-logo"
      />
      <h2>{restaurant.info.name}</h2>
      <h4>{restaurant.info.areaName}</h4>
      <h4>avgRating:{restaurant.info.avgRating}</h4>
      <h4>costForTwo:{restaurant.info.costForTwo}</h4>
      <p>Cuisines:{restaurant.info.cuisines.join(", ")}</p>
    </div>
  ));
};

const Body = () => {
  return (
    <div className="body">
      <div className="search"> Search</div>
      <div className="res-container">
        <RestaurantCard resData={resObj} />
      </div>
    </div>
  );
};

const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout />);
