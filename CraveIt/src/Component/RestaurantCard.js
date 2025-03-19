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
      <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
        <img
          className="rounded-lg"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${cloudinaryImageId}`}
          alt={name}
        />
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{areaName}</h4>
        <h4>Avg Rating: {avgRating}</h4>
        <h4>Cost for Two: {costForTwo}</h4>
        <p>Cuisines: {cuisines?.join(", ")}</p>
      </div>
    </div>
  );
};

//Higeher Order component  

// Input -RestaurantCard => RestaurantCardPromoted

export const withPromtedLabel = (RestaurantCard) =>{
  return() =>{
    return(
      <div>
        <label>Promoted</label>
        <RestaurantCard/>
      </div>
    )
  }
}

export default RestaurantCard;
