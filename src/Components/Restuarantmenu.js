import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_URL } from "../Config";
import Shimmer from "./Shimeer";


const Restuarantmenu = () => {
  // const params = useParams()
  // console.log(params);
  // const{id}=params

  const { id } = useParams();
  const [restaurant, setRestuarant] = useState(null);

  useEffect(() => {
    Restuarantmenu();
  }, []);

  async function Restuarantmenu() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.9430915&lng=88.43611480000001&restaurantId="+id
    );
    const json = await data.json();
    console.log(json.data);
    setRestuarant(json?.data.cards[0].card.card.info);
    }
    
    if (!restaurant) {
        return <Shimmer/>;
    }
  return (
    <div>
      <div className="menu">
        <h2>{restaurant.name}</h2>
        <img src={IMG_URL + restaurant.cloudinaryImageId} />
        <h2>{restaurant.areaName}</h2>
        <h2>{restaurant.city}</h2>
        <h2>{restaurant.avgRating}</h2>
        <h2>{restaurant.costForTwoMessage}</h2>
      </div>

      <div>
        {/* {console.log(
          Object.values(
            restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
              ?.card?.itemCards
          )
        )} */}
      </div>
    </div>
  );
};

export default Restuarantmenu;
