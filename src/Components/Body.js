import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimeer";
import { Link } from "react-router-dom";
import { RES_LIST } from "../Config.js"
import { FilterData } from "../Utils/Helper";
import useonoffInternet from "../Utils/ISoffline";



const Body = () => {
  const [searchText, setsearchText] = useState("");
  const[allRestaurant,setallRestaurant]=useState([])
  const [filteredRestuarant, setfilteredRestuarant] = useState([]);
 
 
  useEffect(() => {
    getallrestaurantlist();
  }, []);

  const getallrestaurantlist = async () => {
    const data = await fetch(RES_LIST);
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

  // if (filteredRestuarant.length===0) {
  //   return <h1>oops !! this is not availaible</h1>
  // }

  const Internet = useonoffInternet();
  if (!Internet) {
    return (
      <h1>No internet connection </h1>
      
    ); 
     
    
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
          return (
            
            <Link className="link" key={el.info.id} to={"/restuarant/"+el.info.id}>
              <RestaurantCard {...el.info} />
             
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;

