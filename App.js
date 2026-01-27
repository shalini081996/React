import React from "react";
import ReactDOM from "react-dom/client";

const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://cbx-prod.b-cdn.net/COLOURBOX38603643.jpg?width=1200&height=1200&quality=70" />
      </div>
      <div className="nav-items">
        <ul>
          <li className="home">Home</li>
          <li className="about">About Us</li>
          <li className="contact">Contact Us</li>
          <li className="cart">Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestroCardComponent = (props) => {
  const { resData } = props;
  const {name, cuisines, rating, etaMin} = resData
  return (
    <div className="res-card">
      <img className="res-img" src={"https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/11/18/"+resData.img}/>
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{rating}</h4>
      <h4>{etaMin} minutes</h4>
    </div>
  )
}

const resList = [
  {
    id: 1,
    name: "KFC",
    cuisines: ["American", "Fast Food"],
    rating: 4.3,
    etaMin: 36,
    img:'b32cc9c1-a7a0-4454-910d-5ed59f8d63dd_images19232fa9aedbc461ab183dbfc4bb2311d9b711f85b17f41ac9e5b0db6c230b66b.JPG'
  },
  {
    id: 2,
    name: "WOW China!",
    cuisines: ["Chinese", "Fast Food"],
    rating: 4.3,
    etaMin: 22,
    img:'cab0a8ba-bf1e-4cad-99e5-ed2595ef080a_88480eb3f9d940b8ab0325b4c100f21d1ce53bfa50c74a3ca13fd2561627ec95.JPG'
  },
  {
    id: 3,
    name: "Sagar Ratna",
    cuisines: ["South Indian"],
    rating: 4.3,
    etaMin: 48,
    img:'4b25acc1-e21a-4202-96fb-f33aecbcbca1_71ecfcb60a6f440380358190e3eadb20bbbe7a7f31c147518613a8e2345fdb46.JPG'
  },
  {
    id: 4,
    name: "Harvi's Pizza",
    cuisines: ["Italian", "American", "Fast Food"],
    rating: 4.3,
    etaMin: 17,
    img:'10cfd990-d0dd-4e36-8421-139e0b4012d9_9618f06ea80f4abfa72694e5a64a41e527aa254be0da4062883e022d3402b977.JPG'
  }
]

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

const FooterComponent = () => {
  return (
    <div className="footer">
      @copyright2026
    </div>
  )
}

const AppComponent = () => {
  return <div className="app">
    <HeaderComponent />
    <BodyComponent />
    <FooterComponent />
  </div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppComponent />);
