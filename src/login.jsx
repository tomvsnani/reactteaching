import { useState } from "react";

export default function () {

   

const [a, seta] = useState("some test")


  return <>
 <input value={a} onChange={(x)=>{
     console.log("o change called")
    seta(x.target.value)
    
    }}/>
  </>;
}


