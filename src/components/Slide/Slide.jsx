import React from 'react';
import Button from './../Button/Button';
import s from './Slide.module.css';
import button from './../Button/Button.module.css';
import Hr from "./../Hr";
import {Motion, spring} from "react-motion";


function Slide(props){
    return(
        <div className={s.slideModule} id="about">
            <Motion defaultStyle={{opacity: 0, translate: -200 }} style={{opacity: spring(1,{ stiffness: 30, damping: 30 }), translate: spring(0, { stiffness: 60, damping: 30 })}}>
                {(style)=>(
            <div className={s.centerblock} >
                <h1 style={{
                    opacity: `${style.opacity}`,
                    transform: `translateY(${style.translate}px)`
                }}>Your favorite <span className={s.highlight}>source</span> of bootstrap themes!</h1>
                <Hr/>
                <p style={{
                    opacity: `${style.opacity}`
                }} className={s.slideText}>Start Bootstrap can help you build better websites using the Bootstrap framework! Just download a theme and start customizing, no strings attached!</p>
                <Button style={{
                    opacity: `${style.opacity}`
                }} btnName="Find Out More" btnColor={button.btnPrimary}/>
            </div>
                    )}
            </Motion>
        </div>
    );
}

export default Slide;
