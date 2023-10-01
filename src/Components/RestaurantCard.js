import { IMG_URL } from "../Config";

const RestaurantCard = ({name,areaName,cuisines,avgRating,cloudinaryImageId}) => {

  return (
    <div className="Card">
      <img src={IMG_URL + cloudinaryImageId} alt="cardimg" />

      <h1> {name}</h1>
      <h3>{areaName}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h3>⭐{avgRating}</h3>
    </div>
  );
};

export default RestaurantCard;
