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
import { testApi } from '../../apis/Api'


const Homepage = () => {
  //Print Hello after page load,Automatic 

useEffect(()=> {  
  console.log("Hello")
  testApi().then((res)=>{
      console.log(res)
    })
})
    //calling test API 
    // testApi().then((res)=>{
    //   console.log(res)
    // })
  


  return (
    <div>
      <h1>
        Homepage
      </h1>
    </div>
  )
}

export default Homepage
