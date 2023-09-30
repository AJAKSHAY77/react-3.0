import React from "react";
import reactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";

const Applayout = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

const root = reactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
