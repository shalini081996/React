import resList from "../utils/mockData";
import RestroCardComponent from "./ResCard";
import { useState } from 'react';

const BodyComponent = () => {
  //Super powerful variables
  let [restaurantList, setRestaurantList] = useState(resList)
  //Normal Variable
  // let restaurantList = [...resList];
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="filters"><button className="filter-btn" onClick ={() => {
        let filteredRestaurants = restaurantList.filter((restaurant) => {
          return restaurant.rating > 4.5
        });
        setRestaurantList(filteredRestaurants);
        console.log(restaurantList);
      }}>Top Rated Restaurants</button></div>
      <div className="res-container">
        {
          restaurantList.map((restaurant) => (<RestroCardComponent key={restaurant.id} resData={restaurant}/>))
        }
      </div>
    </div>
  )
}

export default BodyComponent;
