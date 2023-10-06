import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_URL } from "../Config";
import Shimmer from "./Shimeer";
import { RES_MENU_API } from "../Config";
import UseRestuarantMenu from "../Utils/ResMenu";
import { additems } from "../Utils/CartSlice";
import { useDispatch } from "react-redux";

const Restuarantmenu = () => {
  // const params = useParams()
  // console.log(params);
  // const{id}=params

  const dispatch = useDispatch()

  const handleadditem = () => {
    dispatch(additems("grapes"));
  };

  const { id } = useParams();
  const restaurant = UseRestuarantMenu(id);

  if (!restaurant) {
    return <Shimmer />;
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
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          handleadditem()
        }}
      >
        add item
      </button>

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
