import { IMG_URL } from "../Config";
import Usercontext from "../Utils/UserContext";
import { useContext } from "react";

const RestaurantCard = ({ name, areaName, cuisines, avgRating, cloudinaryImageId }) => {
  const { code } = useContext(Usercontext);

  return (
    <div className="Card">
      <img src={IMG_URL + cloudinaryImageId} alt="cardimg" />

      <h1> {name}</h1>
      <h3>{areaName}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h3>⭐{avgRating}</h3>

      {/* this is react context demo */}

      <h3>name:{code.name}</h3>
      <h3>email:{code.email}</h3>
     
    </div>
  );
};

export default RestaurantCard;
