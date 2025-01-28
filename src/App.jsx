import "./App.css";
import { Fragment, useState } from "react";
import { myItems } from "./Utility";

function App() {
  let arr = myItems;

  let obj = {

  }

  obj = Object.keys(obj).length === 0 ? undefined : obj;

  // let obj1 = obj;

  // obj1.maxHeight = obj.maxHeight == undefined ? obj.maxHeight = "200px" : obj.maxHeight;
  // obj1.maxWidth = obj.maxWidth == undefined ? obj.maxWidth = "200px" : obj.maxWidth;



  return (
    <div className="itemsdiv">
    {
      arr.map(
        (x) => <Item a1={x.name} a2={x.url} c={obj}></Item>
      )
    }
    </div>
  );
}

export default App;

export function Item({a1, a2, c = {maxHeight : "100px", maxWidth : "200px"} }) {
  return (
    <div>
      <img src={a2} style={c}
      
      ></img>
      <h3>{a1}</h3>
    </div>
  );
}
