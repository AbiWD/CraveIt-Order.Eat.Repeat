const RestaurantCard = (props) => {
  const { resData } = props;

  console.log("props", props);

  const {
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
    cloudinaryImageId,
    areaName,
    id,
  } = resData?.info;

  return (
    <div>
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }} key={id}>
        <img
          className="res-logo"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${cloudinaryImageId}`}
          alt={name}
        />
        <h2>{name}</h2>
        <h4>{areaName}</h4>
        <h4>Avg Rating: {avgRating}</h4>
        <h4>Cost for Two: {costForTwo}</h4>
        <p>Cuisines: {cuisines?.join(", ")}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
