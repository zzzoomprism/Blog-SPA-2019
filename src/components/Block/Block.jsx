import React from "react";
import s from "./Block.module.css";
import Button from "../Button/Button";
import button from "../Button/Button.module.css";
import Hr from "../Hr";

function Block(props){
    return(
        <div className={s.aboutUsBlock} style={{backgroundColor: props.bgColor}} >
            {props.bgColor === 'white' ?
                <div className={s.center} id="contact">
                    <h3 className="text-dark">{props.headline}</h3>
                    <Hr/>
                    <p className="text-dark">{props.text}</p>
                    <Button btnName="Get Started" btnColor={button.btnDrk}/>
                </div> :
            <div className={s.center}>
            <h3>{props.headline}</h3>
                <Hr/>
            <p>{props.text}</p>
                <Button btnName="Get Started" btnColor={button.btnLight}/>
            </div>
            }
        </div>
    )
}

export default Block;