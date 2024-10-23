
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


const AppLayout = () => {
  const About = lazy(()=> import("./src/components/About Us.js"));
  return (
    <div className="app">
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
        element: <Body />,
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
        path: "/restaurants/:resId",
        element: <CardMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);