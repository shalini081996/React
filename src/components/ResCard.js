import { CDN_URL } from "../utils/constants";

const RestroCardComponent = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla} = resData;
  return (
    <div className="res-card">
      <img className="res-img" src={CDN_URL+cloudinaryImageId}/>
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating} star</h4>
      <h4>{sla.deliveryTime} minutes</h4> 
    </div>
  )
}

export default RestroCardComponent;