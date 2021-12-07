import  React, { createElement } from 'react';
import para from "./para";


function Button_Action(){
    function clickHandler(){
        return(
            <div>
                <para />
            </div>
        )
    }
    return(
        <div>
            <button onClick={clickHandler} id="click">Click</button>
            
        </div>
    )
}

export default Button_Action


