import React, { useState } from "react";

const Section = ({ title, decscription }) => {

  const[Isvisible,setIsvisible]=useState(false)
  return (
    <div className=" border-2 rounded-md mx-2 border-black mt-4">
      <h1 className="font-bold">{title} </h1>
      {Isvisible ? (
        <button onClick={() => setIsvisible(false)}>hide</button>
      ) : (
        <button onClick={() => setIsvisible(true)}>show</button>
      )}
      {Isvisible && <p className="text-red-600">{decscription}</p>}
    </div>
  );
};

const Instamart = () => {
  return (
    <>
      <Section title={"Heading 1"} decscription={"this is heading 1"} />
      <Section title={"Heading 2"} decscription={"this is heading 2"} />
      <Section title={"Heading 3"} decscription={"this is heading 3"} />
    </>
  );
};

export default Instamart;
