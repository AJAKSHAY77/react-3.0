import { IMG_URL } from "../Config";


const Fooditems = ({
  name,
  areaName,
  
  avgRating,
  cloudinaryImageId,
}) => {
  

  return (
    <div className="Card">
      <img src={IMG_URL + cloudinaryImageId} alt="cardimg" />

      <h1 className="font-bold"> {name}</h1>
      <h3>{areaName}</h3>
      
      <h3>⭐{avgRating}</h3>

  
    </div>
  );
};

export default Fooditems;
