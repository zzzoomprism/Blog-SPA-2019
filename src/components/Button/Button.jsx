import React from "react";
import s from "./Button.module.css";


function Button(props){
    let btn = "btn "+props.btnColor;
    return(
        <a className={btn} href="">{props.btnName}</a>
    )
}

export default Button;