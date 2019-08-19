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
                <div className="container d-flex justify-content-end">
                    <div className="card" style={{border: "none", backgroundColor: "#333"}}>
                        <div className={f.cardIcon}>
                        <i className="fab fa-react"></i>
                        </div>
                            <div className="card-body">
                                <h5>Sturdy Themes</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up
                                    the bulk of the card's content.</p>
                            </div>
                    </div>
                    <div className="card" style={{border: "none", backgroundColor: "#333"}}>
                        <div className={f.cardIcon}>
                            <i className="fab fa-react"></i>
                        </div>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up
                                the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card" style={{border: "none", backgroundColor: "#333"}}>
                        <div className={f.cardIcon}>
                            <i className="fab fa-react"></i>
                        </div>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up
                                the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card" style={{border: "none", backgroundColor: "#333"}}>
                        <div className={f.cardIcon}>
                            <i className="fab fa-react"></i>
                        </div>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up
                                the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceBlock;