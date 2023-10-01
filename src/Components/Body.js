import RestaurantCard from "./RestaurantCard";
import { restaurantlist } from "../Config";
import { useEffect, useState } from "react";
import Shimmer from "./Shimeer";

function FilterData(searchText, allRestaurant) {
  const filter = allRestaurant.filter((el) =>
    el?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
  return filter;
}

const Body = () => {
  const [searchText, setsearchText] = useState("");
  const[allRestaurant,setallRestaurant]=useState([])
  const [filteredRestuarant, setfilteredRestuarant] = useState([]);
 
 
  useEffect(() => {
    getallrestaurantlist();
  }, []);

  const getallrestaurantlist = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setfilteredRestuarant(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setallRestaurant(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(filteredRestuarant);
  };

  if (!filteredRestuarant) {
    return null;
  }

  if (filteredRestuarant.length===0) {
    return <h1>oops !! this is not availaible</h1>
  }
  return allRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="search"
          value={searchText}
          onChange={(e) => setsearchText(e.target.value)}
          className="search-input"
        />
        <button
          className="search-btn"
          onClick={() => {
            const Data = FilterData(searchText, allRestaurant);

            setfilteredRestuarant(Data);
            console.log("filterdata = ", Data);
          }}
        >
          search
        </button>
      </div>

      <div className="Restaurantlist">
        {filteredRestuarant.map((el) => {
          return <RestaurantCard {...el.info} key={el.info.id} />;
        })}
      </div>
    </>
  );
};

export default Body;

