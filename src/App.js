import ReactDOM from "react-dom/client";
import FooterComponent from "./components/Footer";
import BodyComponent from "./components/Body";
import HeaderComponent from "./components/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AboutComponent from "./components/About";
import ContactComponent from "./components/Contact";
import ErrorComponent from "./components/Error";

const AppComponent = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
    children: [
      { path: "/", element: <BodyComponent /> },
      { path: "/about", element: <AboutComponent /> },
      { path: "/contact", element: <ContactComponent /> },
    ],
    errorElement: <ErrorComponent />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
