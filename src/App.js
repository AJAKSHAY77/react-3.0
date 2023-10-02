import React from "react";
import reactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter , Outlet, RouterProvider } from "react-router-dom";
import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import Restuarantmenu from "./Components/Restuarantmenu";



const Applayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const Approuter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/contact",
        element:<Contact/>
      },
      {
        path: "restuarant/:id",
        element: <Restuarantmenu/>
      }

    ],
  }
  
]);

const root = reactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Approuter} />);
