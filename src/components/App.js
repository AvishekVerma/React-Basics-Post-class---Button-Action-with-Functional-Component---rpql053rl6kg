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
    
      if(state) && <p id="para"> Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy </p>
    
      <button onClick=[() => setState(!true)] id="click">Click</button>
//       <Button_Action />
    </div>
  );
}


export default App;


