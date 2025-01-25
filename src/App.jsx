import "./App.css";
import { Fragment, useState } from "react";
import { myItems } from "./Utility";

function App() {
  let arr = myItems;

  return (
    <div className="itemsdiv">
    {
      arr.map(
        (x) => <Item a1={x.name} a2={x.url} ></Item>
      )
    }
    </div>
  );
}

export default App;

export function Item({a1, a2}) {
  return (
    <div>
      <img src={a2} style={{
        maxHeight:'300px',
        maxWidth:'300px',
        
      }}
      
      ></img>
      <h3>{a1}</h3>
    </div>
  );
}
