// import React from "react";

// const Homepage =()=>{
//     return(
// <div>
//     <h1>
//         Homepage
//     </h1>
// </div>
//     );
// }

// //exporting 
// export default Homepage;


//Using Rafce

import React,{useEffect} from 'react'


const Homepage = () => {
  //Print Hello after page load,Automatic 
  useEffect(()=>{console.log("Hello")})
  return (
    <div>
      <h1>
        Homepage
      </h1>
    </div>
  )
}

export default Homepage
