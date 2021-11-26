import  React, { createElement } from 'react';

function Button_Action(){
    return(
        //<button id="click">ClickMe</button>
        React.createElement('button',
        {id="click"},
        React.createElement('p',
        {id='para'},
        "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"))
    )
}

export default Button_Action


