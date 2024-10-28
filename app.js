
import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About Us"
import CardMenu from "./src/components/CardMenu.js"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./src/components/Error.js";
import Login from "./src/components/Login.js";
import Cart from "./src/components/Cart.js";
import ContactUs from "./src/components/ContactUs.js"
import Slider from "./src/components/Slider.js";
import City from "./src/components/CitysBestRestaurant.js";
import TopRated from "./src/components/TopRatedRestaurant.js";
import BestCuisines from "./src/components/BestCuisines.js";
import Footer from "./src/components/Footer.js";


const AppLayout = () => {
  const About = lazy(()=> import("./src/components/About Us.js"));
  const CardMenu = lazy(()=> import("./src/components/CardMenu.js"));
  return (
    <div >
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/", 
        element: (
          <>
           <Slider />
           <TopRated />
            <Body />
          <City/>
          <BestCuisines />
          <Footer />
          </>
        ), 
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/restaurant/:resId",
        element: <CardMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);