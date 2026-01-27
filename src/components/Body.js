import resList from "../utils/mockData";
import RestroCardComponent from "./ResCard";


const BodyComponent = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {
          resList.map((restaurant) => (<RestroCardComponent key={restaurant.id} resData={restaurant}/>))
        }
      </div>
    </div>
  )
}

export default BodyComponent;
