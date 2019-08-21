import React from "react";
import s from "./Footer.module.css";

function Footer(){
    var date = new Date();

    return <div className={s.footer}>
        <p>Copyright © {date.getFullYear()} Aliaksandra Susha.</p>
    </div>
}

export default Footer;