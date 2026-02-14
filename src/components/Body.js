import resList from "../utils/mockData";
import RestroCardComponent from "./ResCard";
import { useEffect, useState } from 'react';
import ShimmerComponent from "./shimmer";

const BodyComponent = () => {
  //Super powerful variables
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(()=> {
    fetchRestaurantsData();
  }, [])

  const fetchRestaurantsData = async() => {
    let response = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.67400&lng=76.72490&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    let responseJSON = await response.json();
    setFilteredRestaurants(responseJSON?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setRestaurantList(responseJSON?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  const filterTopRatedRestaurants = () => {
    const filteredRestaurants = restaurantList.filter((restaurant) => {
          return restaurant?.info?.avgRating > 4.5
    });
    setFilteredRestaurants(filteredRestaurants);
  }

  const searchRestaurants = () => {
    console.log(restaurantList)
    if(!searchText) {
      setFilteredRestaurants(restaurantList);
      return;
    }
    const searchedRestaurants = restaurantList.filter((restaurant) => {
          return restaurant?.info?.name?.toLowerCase().includes(searchText?.toLowerCase())
    });
    setFilteredRestaurants(searchedRestaurants);
  }
  
  //Normal Variable
  // let restaurantList = [...resList];

  return restaurantList.length === 0 ? <ShimmerComponent/> : (
    <div className="body">
      
      <div className="filters">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e)=> {
            setSearchText(e.target.value);
          }}/>
          <button className="" onClick={() => {
            searchRestaurants();
          }}>Search</button>
        </div>
        <button className="filter-btn" onClick ={() => {
          filterTopRatedRestaurants();
        }}>Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {
          filteredRestaurants?.map((restaurant) => (<RestroCardComponent key={restaurant?.info?.id} resData={restaurant?.info}/>))
        }
      </div>
    </div>
  )
}

export default BodyComponent;
