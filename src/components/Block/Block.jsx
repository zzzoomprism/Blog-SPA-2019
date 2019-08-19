import React from "react";
import s from "./Block.module.css";
import Button from "../Button/Button";
import button from "../Button/Button.module.css";

function Block(props){
    return(
        <div className={s.aboutUsBlock} style={{backgroundColor: props.bgColor}}>
            <div className={s.center}>
            <h3>{props.headline}</h3>
            <hr/>
            <p>{props.text}</p>
                <Button btnName="Get Started" btnColor={button.btnLight}/>
            </div>
        </div>
    )
}

export default Block;