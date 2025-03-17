import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Component/Header";
import Body from "./Component/Body";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Error from "./Component/Error";
import RestaurantMenu from "./Component/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import Grocery from "./Component/Grocery";

// Chunking
// Code splitting
// Dynamic Bundling

const Grocery = lazy(() => import("./Component/Grocery"));

const Applayout = () => {
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
    element: <Applayout />,
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
        path: "/contact",
        element: <Contact />,
      },
    ],
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/grocery",
    element: (
      <Suspense fallback={<h1>Loading screen</h1>}>
        <Grocery />
      </Suspense>
    ),
  },
  {
    path: "/restaurants/:resId",
    element: <RestaurantMenu />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
