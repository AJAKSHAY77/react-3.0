 import React from "react";
import reactDOM from "react-dom/client"

// const Compo = () => {
//   return (
//     <div>
//       <h1>hello </h1>
//       <h1>hello </h1>
//       <h1>hello </h1>
//       <h1>hello </h1>
//     </div>
//   )
 
// };

const string = "alsjau"
const Compo = () => (

  <div>
    {string}
      <h1>hello </h1>
      <h1>hello </h1>
      <h1>hello </h1>
    <h1>hello </h1>
   
    </div>
  )
 
// const Compo = (
//   <h1>jai </h1>
// )

   
  
  
 

   
   
 

const root = reactDOM.createRoot(document.getElementById("root"));
root.render(<Compo/>);