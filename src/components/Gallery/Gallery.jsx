import React from "react";
import s from "./Gallery.module.css";
import content from "./../../content";
import styled from "styled-components";
import {Motion, spring} from "react-motion";
import ImageBlock from "./ImageBlock/ImageBlock";

class Gallery extends React.Component {
    state = {
        onMouse: false,
        target: ""
    };

    handleMouseEnter(event){
        this.setState({onMouse: true, target: event.target.src});
    }

    handleMouseLeave(event){
        this.setState({onMouse: false, target: ""});
    }

    render() {
        const imagesRow = content.images.firstRow;
        const listItem = imagesRow.map((image) =>
            <div className="col-lg-4 col-sm-12 m-0 p-0" key={image.toString()} onMouseEnter={this.handleMouseEnter.bind(this)} onMouseLeave={this.handleMouseLeave.bind(this)}>
                {this.state.onMouse&&this.state.target===image.toString() ?
                    <Motion defaultStyle={{opacity: 0}} style={{opacity: spring(0.8)}}>
                        {(style)=>(
                            <ImageBlock style={{
                                opacity: `${style.opacity}`,
                            }}>
                                <Motion defaultStyle={{opacity: 0, scale: 0}} style={{opacity: spring(1), scale: spring(1)}}>
                                    {(style)=>(
                                        <div className={s.center} style={{
                                            opacity: `${style.opacity}`,
                                            transform: `scale(${style.scale})`
                                        }}>
                                            <h5>Category</h5>
                                            <h2>Project Name</h2>
                                        </div>
                                    )}
                                </Motion>
                            </ImageBlock>
                        )}
                    </Motion>
                    : "" }
                    <img src={image} width="100%" height="300px" alt=""/>
            </div>
        );
        const
            imagesRow2 = content.images.secondRow;
        const
            listItem2 = imagesRow2.map((image) =>
                <div className="col-lg-4 col-sm-12 m-0 p-0" key={image.toString()} onMouseEnter={this.handleMouseEnter.bind(this)} onMouseLeave={this.handleMouseLeave.bind(this)}>
                    {this.state.onMouse&&this.state.target===image.toString() ?
                        <Motion defaultStyle={{opacity: 0}} style={{opacity: spring(0.7)}}>
                            {(style)=>(
                                <ImageBlock style={{
                                    opacity: `${style.opacity}`,
                                }}>
                                    <Motion defaultStyle={{opacity: 0, scale: 0}} style={{opacity: spring(1), scale: spring(1)}}>
                                        {(style)=>(
                                            <div className={s.center} style={{
                                                opacity: `${style.opacity}`,
                                                transform: `scale(${style.scale})`
                                            }}>
                                                <h5>Category</h5>
                                                <h2>Project Name</h2>
                                            </div>
                                        )}
                                    </Motion>
                                </ImageBlock>
                            )}
                        </Motion>
                        : "" }
                    <img src={image} width="100%" height="300px" alt=""/>
                </div>
            );

        return (
            <div className={s.gallery}>
                <div className="row m-0 p-0">
                    {listItem}
                </div>
                <div className="row m-0 p-0">
                    {listItem2}
                </div>
            </div>
        )
    }
}
export default Gallery;