import React from 'react';
import Button from './../Button/Button';
import s from './Slide.module.css';

function Slide(props){
    return(
        <div className={s.slideModule}>
            <div className={s.centerblock}>
                <h1>Your favorite <span className={s.highlight}>source</span> of bootstrap themes!</h1>
                <hr/>
                <p className={s.slideText}>Start Bootstrap can help you build better websites using the Bootstrap framework! Just download a theme and start customizing, no strings attached!</p>
                <Button btnName="Find More!"/>
            </div>
        </div>
    );
}

export default Slide;
