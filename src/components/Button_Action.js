import  React, { createElement } from 'react';
import para from "./para";


function Button_Action(){
    
    const [state, setState] = useState(false)
    
    function clickHandler() {
     () => setState(true)
   }    
    return(
        <div>
            <button onClick={clickHandler} id="click">Click</button>
            if(state) && <para />
            
        </div>
    )
}

export default Button_Action


