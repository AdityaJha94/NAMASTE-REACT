import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [newResList, setNewResList] = useState([]);
  const [filteredResList,setFilteredResList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2446361&lng=73.1235274&collection=83631&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null",
    );
    const json = await data.json();
    const restaurants = json?.data?.cards
      ?.filter(
        (item) =>
          item?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      )
      ?.map((item) => item?.card?.card?.info);

    setNewResList(restaurants);
    setFilteredResList(restaurants);
  };

  return (
    newResList.length === 0
  ? <Shimmer/> : (
      <div className="body">
        <div className="filter">
          <div className="search">
            <input
              type="text"
              className="search-box"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              placeholder="Search for Restaurants"
            ></input>
            <button
              className="search-btn"
              onClick={() => {
                const filteredSearch = newResList.filter((res) => {
                  return res.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase());
                });
                setFilteredResList(filteredSearch);
              }}
            >
              Search
            </button>
          </div>
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = newResList.filter(
                (res) => res.avgRating > 4.0,
              );
              setNewResList(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="res-container">
          {filteredResList.map((restaurant) => (
            <RestaurantCard key={restaurant.id} resData={restaurant} />
          ))}
        </div>
      </div>,
    )
  );
};

export default Body;
