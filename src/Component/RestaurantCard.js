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

export default RestaurantCard;
