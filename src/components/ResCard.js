import { CDN_URL } from "../utils/constants";

const RestroCardComponent = (props) => {
  const { resData } = props;
  const {name, cuisines, rating, etaMin} = resData
  return (
    <div className="res-card">
      <img className="res-img" src={CDN_URL+resData.img}/>
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{rating}</h4>
      <h4>{etaMin} minutes</h4>
    </div>
  )
}

export default RestroCardComponent;