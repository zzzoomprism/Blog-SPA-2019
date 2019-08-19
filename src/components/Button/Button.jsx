import React from "react";
import s from "./Button.module.css";


function Button(props){
    let btn = "btn "+s.btnPrimary;
    return(
        <a className={btn} href="">{props.btnName}</a>
    )
}

export default Button;