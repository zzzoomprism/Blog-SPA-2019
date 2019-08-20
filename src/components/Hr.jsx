import React from "react";
import styled from "styled-components";
import {Motion, spring} from "react-motion";

const Line = styled.div `
width: 200px;
height: 4px;
background-color: #00f2ff;
margin-left: calc((100% - 200px)/2);
margin-top: 10px;
margin-bottom: 10px;
`;

class Hr extends React.Component{
    render() {
        return(
            <Motion defaultStyle={{scaleX:  0}} style={{scaleX: spring(1, { stiffness: 30, damping: 30 })}}>
                {(style)=>(
                    <Line style={{
                        transform: `scaleX(${style.scaleX})`,
                    }}/>
                )}
            </Motion>
        )
    }
}

export default Hr;