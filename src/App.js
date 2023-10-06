import React, { lazy, Suspense, useState } from "react";
import reactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import Restuarantmenu from "./Components/Restuarantmenu";
import Cart from "./Components/Cart";
import Shimmer from "./Components/Shimeer.js";
import Footer from "./Components/Footer";
import Usercontext from "../src/Utils/UserContext.js";
import { Provider } from "react-redux";
import Store from "./Utils/Store";

const Instamart = lazy(() => import("../src/Components/Instamart"));
const About = lazy(() => import("./Components/About"));

const Applayout = () => {
  const [value, setvalue] = useState({
    name: "aditya",
    email: "jai ho",
  });
  return (
    <Provider store={Store}>
      <Usercontext.Provider
        value={{
          code: value,
        }}
      >
        <Header />
        <Outlet />
        <Footer />
      </Usercontext.Provider>
    </Provider>
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
