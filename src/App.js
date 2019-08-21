import React from 'react';
import s from "./App.css";
import Menu from './components/Menu/Menu';
import Slide from "./components/Slide/Slide";
import Block from "./components/Block/Block";
import content from "./content";
import styled from "styled-components";
import {Motion, spring} from "react-motion";
import ServiceBlock from "./components/ServiceBlock/ServiceBlock";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";

const Cursor = styled.div`
width: 40px;
height: 40px;
position: absolute;
top: 0;
left: 0;
border-radius: 50%;
border: 4px solid rgba(0, 242, 255, .5); 
z-index: 1000;
`;

class App extends React.Component{
        state = {
        opacity: 0,
        top: 0,
        left: 0,
        menu: 0
    };
    handleClick(event){
        var top = event.pageY - 20 + "px";
        var left = event.pageX - 20 + "px";
        this.setState({opacity: !this.state.opacity, top: top, left: left });
    }
    handleOut(){
        this.setState({opacity: !this.state.opacity});
    }

    listenScrollEvent = e => {
        if (window.scrollY > 200) {
            this.setState({menu: 1})
        } else {
            this.setState({menu: 0})
        }
        console.log(this.state);
    };

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    render(){
            return(
            <div className={s.mainBlock} onMouseDown={this.handleClick.bind(this)} onMouseUp={this.handleOut.bind(this)}>
                <Menu menuColor={this.state.menu} dataColor="Hello"/>
                 <Slide/>
                 <Block headline={content.aboutUs.headline} text={content.aboutUs.text} bgColor={content.aboutUs.bgColor}/>
                <Gallery/>
                 <ServiceBlock />
                <Block headline={content.something.headline} text={content.something.text} bgColor={content.something.bgColor}/>
                <Footer/>

                {this.state.opacity ?
                    <Motion defaultStyle={{scale: (1)}} style={{scale: spring(0)}}>
                        {(style)=>(
                        <Cursor style={{
                            opacity: `${this.state.opacity}`,
                            top: `${this.state.top}`,
                            left: `${this.state.left}`,
                            transform: `scale(${style.scale})`
                        }}/>
                            )}
                    </Motion>
                : "" }
            </div>
        )

    }
}

export default App;
