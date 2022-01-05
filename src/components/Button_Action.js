import  React, { createElement } from 'react';
import para from "./para";


function Button_Action(){
    
    const [state, setState] = useState(false)
    
    function clickHandler(){
     () => setState(true)
   }    
//     function clickHandler(){
//         return(
//             <div>
//                 <para />
//             </div>
//         )
//     }
    return(
        <div>
        
            //if(state) && <p id="para"> Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy </p>
             //<button onClick=[() => setState(!true)] id="click">Click</button>
            <button onClick={clickHandler} id="click">Click</button>
            if(state) && <para />
            
        </div>
    )
}

export default Button_Action


