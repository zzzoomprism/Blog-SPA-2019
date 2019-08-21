import React from 'react';
import S from './Menu.module.css';
import { Link } from "react-scroll";

function Menu(props){
        var menuClassName = "navbar fixed-top navbar-expand-lg navbar-dark bg-dark ";
        var brand = "navbar-brand ";
        return <nav className={props.menuColor === 0 ? menuClassName + S.mainNavBar : menuClassName + S.colorNavBar}>
            <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration= {1000}
            ><a className={brand + S.navBarBrand} href="#"><span className={S.brand + " mr-2"}>Your</span> Source!</a></Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className={S.navUl + " navbar-nav ml-auto"}>
                                <Link
                                    activeClass="active"
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration= {1000}
                                ><li className={S.navLink + " nav-item nav-link"}>
                                   About
                                </li>
                                </Link>
                                <Link
                                    activeClass="active"
                                    to="portfolio"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration= {500}
                                >
                                    <li className={S.navLink + " nav-item nav-link"}>
                                        Portfolio
                                    </li>
                                </Link>
                                <Link
                                    activeClass="active"
                                    to="services"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration= {500}
                                >
                                    <li className={S.navLink + " nav-item nav-link"}>
                                        Services
                                    </li>
                                </Link>
                                <Link
                                    activeClass="active"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration= {500}
                                >
                                    <li className={S.navLink + " nav-item nav-link"}>
                                        Contact
                                    </li>
                                </Link>

                            </ul>
                        </div>
                    </nav>
}

export default Menu;