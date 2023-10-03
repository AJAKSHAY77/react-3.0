import React, { lazy, Suspense } from "react";
import reactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter , Outlet, RouterProvider } from "react-router-dom";
// import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import Restuarantmenu from "./Components/Restuarantmenu";
import Cart from "./Components/Cart";
import Shimmer from "./Components/Shimeer.js"


const Instamart = lazy(() => import("../src/Components/Instamart"))
const About = lazy(()=>import("./Components/About"))



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
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "restuarant/:id",
        element: <Restuarantmenu />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = reactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Approuter} />);
