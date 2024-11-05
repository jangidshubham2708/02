
import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/AboutUs.js"
import CardMenu from "./src/components/CardMenu.js"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./src/components/Error.js";
import Login from "./src/components/Login.js";
import Cart from "./src/components/Cart.js";
import ContactUs from "./src/components/ContactUs.js"
import Slider from "./src/components/Slider.js"
import City from "./src/components/CitysBestRestaurant.js";
import TopRated from "./src/components/TopRatedRestaurant.js";
import BestCuisines from "./src/components/BestCuisines.js";
import Footer from "./src/components/Footer.js";
import { Provider } from "react-redux";
import appStore from "./src/elementary/appStore.js";
import Cart from "./src/components/Cart.js";



const AppLayout = () => {
  return (
    <Provider store={appStore}>
    <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 min-h-screen ">
      <Header />
      <Outlet />
    </div>
    </Provider>
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