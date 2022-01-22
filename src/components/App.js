import React, {Component, useState} from "react";
import "./../styles/App.css";
import Button_Action from "./Button_Action";

function App() {
  
  const [state, setState] = useState(false)
  
//   function clickHandler(){
//     () => setState(!true)
//   }
  
  return (
    <div id="main">
      // Do not alter the main div
      <button onClick={clickHandler} id="click">Click</button>
      <Button_Action />
    </div>
  );
}


export default App;


