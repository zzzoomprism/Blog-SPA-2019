import React from "react";
import s from "./../Block/Block.module.css";
import f from "./ServiceBlock.module.css";
import Hr from "../Hr";

function ServiceBlock(props){
    return(
        <div className={f.servicesBlock}>
            <div>
                <h3 className={f.darkHeadline}>At Your Service</h3>
                <Hr/>
                <div className="container">
                    <div className="row d-flex justify-content-end">
                    <div className="card col-sm-12 col-lg-3" style={{border: "none", backgroundColor: "#333"}}>
                        <div className={f.cardIcon}>
                            <i className="fab fa-angrycreative"></i>
                        </div>
                            <div className="card-body">
                                <h5>Sturdy Themes</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up
                                    the bulk of the card's content.</p>
                            </div>
                    </div>
                    <div className="card col-sm-12 col-lg-3" style={{border: "none", backgroundColor: "#333"}}>
                        <div className={f.cardIcon}>
                            <i className="fab fa-angellist"></i>
                        </div>
                        <div className="card-body">
                            <h5>Sturdy Themes</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up
                                the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card col-sm-12 col-lg-3" style={{border: "none", backgroundColor: "#333"}}>
                        <div className={f.cardIcon}>
                            <i className="fab fa-buffer"></i>
                        </div>
                        <div className="card-body">
                            <h5>Sturdy Themes</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up
                                the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card col-sm-12 col-lg-3" style={{border: "none", backgroundColor: "#333"}}>
                        <div className={f.cardIcon}>
                            <i className="far fa-check-circle"></i>
                        </div>
                        <div className="card-body">
                            <h5>Sturdy Themes</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up
                                the bulk of the card's content.</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceBlock;