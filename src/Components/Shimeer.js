const Shimmer = () => {
  // return (
  //   <div className="Restaurantlist">
  //     {Array(10)
  //       .fill("")
  //       .map((e,ind) => {
  //         return (
  //           <div  key={ind} className="shimmer">
  //             <div className="shimmerimg"></div>
  //             <div>
  //               <h1></h1>
  //               <h2></h2>
  //               <h3></h3>
  //               <h3></h3>
  //             </div>
  //           </div>
  //         );
  //       })}
  //   </div>
  // );



return (
  <div className="Restaurantlist">
    {Array(12)
      .fill("")
      .map((e, ind) => {
        return (
          <div key={ind} className="cardo">
            <div className="shimmereffect"></div>
          </div>
        );
      })}
  </div>
);

};



export default Shimmer;
