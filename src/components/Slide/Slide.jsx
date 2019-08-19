import React from 'react';
import Button from './../Button/Button';
import s from './Slide.module.css';
import button from './../Button/Button.module.css';
import Block from './../Block/Block';
import {Motion, spring} from "react-motion";
import styled from 'styled-components';

const Hr = styled.div `
width: 200px;
height: 4px;
background-color: #00f2ff;
margin-left: calc((100% - 200px)/2);
margin-top: 10px;
margin-bottom: 10px;
`;

function Slide(props){
    return(
        <div className={s.slideModule}>
            <div className={s.centerblock}>
                <h1>Your favorite <span className={s.highlight}>source</span> of bootstrap themes!</h1>
                <Motion defaultStyle={{scaleX:  0}} style={{scaleX: spring(1)}}>
                    {(style)=>(
                        <Hr style={{
                            transform: `scaleX(${style.scaleX})`,
                        }}/>
                    )}
                </Motion>
                <p className={s.slideText}>Start Bootstrap can help you build better websites using the Bootstrap framework! Just download a theme and start customizing, no strings attached!</p>
                <Button btnName="Find Out More" btnColor={button.btnPrimary}/>
            </div>
        </div>
    );
}

export default Slide;
