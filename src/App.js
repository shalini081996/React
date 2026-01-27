import ReactDOM from "react-dom/client";
import FooterComponent from "./components/Footer";
import BodyComponent from "./components/Body";
import HeaderComponent from "./components/Header";

const AppComponent = () => {
  return <div className="app">
    <HeaderComponent />
    <BodyComponent />
    <FooterComponent />
  </div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppComponent />);
