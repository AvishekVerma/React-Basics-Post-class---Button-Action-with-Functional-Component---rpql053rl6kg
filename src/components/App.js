import React, {Component, useState} from "react";
import "./../styles/App.css";
import Button_Action from "./Button_Action";

function App() {
  
  const [state, setState] = useState(false)
  
  return (
    <div id="main">
      // Do not alter the main div
    
      <p id="para"> Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy </p>
    
      <Button_Action />
    </div>
  );
}


export default App;


