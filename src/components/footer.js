import * as React from "react"
import {
    footerContainer
  } from "./footer.module.css"

const Footer = () => {
    return (
        <footer className={footerContainer}>
            <p>Nick Cave and the Bad Seeds © {new Date().getFullYear()}</p>
            <p>CMS Development | AP Hogeschool</p>
        </footer>
    );
}

export default Footer