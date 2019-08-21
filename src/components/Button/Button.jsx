import React from "react";
import {Motion, spring} from "react-motion";


function Button(props){
    let btn = "btn "+props.btnColor;
    return(
        <Motion defaultStyle={{opacity: 0, translate: 200}} style={{opacity: spring(1, { stiffness: 30, damping: 30 }), translate: spring(0, { stiffness: 90, damping: 30 })}}>
            {(style)=>(
        <a style={{
            opacity: `${style.opacity}`,
            transform: `translateY(${style.translate}px)`
        }} className={btn} href="">{props.btnName}</a>
            )}
        </Motion>
    )
}

export default Button;