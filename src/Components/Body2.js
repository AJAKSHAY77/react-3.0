import RestaurantCard from "./RestaurantCard";
import { restaurantlist } from "../Config";
import { useState } from "react";

function filterData(searchtext, restaurant) {
  const filteredData = restaurant.map((el) =>
    el?.info?.name?.includes(searchtext)
  );
  return filteredData;
}

const Body = () => {
  const [searchtext, Setsearchtext] = useState("");
  console.log(searchtext);
  const [restuarant, Setrestuarant] = useState(restaurantlist);

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="search"
          value={searchtext}
          onChange={(e) => Setsearchtext(e.target.value)}
          className="search-input"
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchtext, restuarant);
            console.log(data);
            Setrestuarant(data);
          }}
        >
          search
        </button>
      </div>

      <div className="Restaurantlist">
        {restuarant.map((el) => (
          // <RestaurantCard co={el.info} />
          <RestaurantCard key={el.info.id} {...el.info} />
        ))}
      </div>
    </>
  );
};

export default Body;
