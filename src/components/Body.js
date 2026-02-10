import resList from "../utils/mockData";
import RestroCardComponent from "./ResCard";
import { useEffect, useState } from 'react';
import ShimmerComponent from "./shimmer";

const BodyComponent = () => {
  //Super powerful variables
  let [restaurantList, setRestaurantList] = useState([]);

  useEffect(()=> {
    fetchRestaurantsData();
  }, [])

  const fetchRestaurantsData = async() => {
    let response = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.67400&lng=76.72490&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    let responseJSON = await response.json();
    setRestaurantList(responseJSON?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  const filterTopRatedRestaurants = () => {
    const filteredRestaurants = restaurantList.filter((restaurant) => {
          return restaurant?.info?.avgRating > 4.5
    });
    setRestaurantList(filteredRestaurants);
  }

  const searchRestaurants = (event) => {
    let searchTerm = event.target.value;
    const searchedRestaurants = restaurantList.filter((restaurant) => {
          return restaurant?.info?.name.toLowerCase().includes(searchTerm?.toLowerCase())
    });
    setRestaurantList(searchedRestaurants);
  }
  
  //Normal Variable
  // let restaurantList = [...resList];

  return restaurantList.length === 0 ? <ShimmerComponent/> : (
    <div className="body">
      <div className="search"><input type="text" className="search-box" onChange={(e)=> {
        searchRestaurants(e);
      }}/></div>
      <div className="filters"><button className="filter-btn" onClick ={() => {
        filterTopRatedRestaurants();
      }}>Top Rated Restaurants</button></div>
      <div className="res-container">
        {
          restaurantList?.map((restaurant) => (<RestroCardComponent key={restaurant?.info?.id} resData={restaurant?.info}/>))
        }
      </div>
    </div>
  )
}

export default BodyComponent;
