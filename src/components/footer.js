import * as React from "react"
import {
    footerContainer,
    link
} from "./footer.module.css"

const Footer = ({ siteTitle }) => {
    return (
        <footer className={footerContainer}>
            <p>{siteTitle} © {new Date().getFullYear()}</p>
            <a
                className={link}
                target="__blank"
                href="https://www.ap.be/graduaat/programmeren"
            >
                CMS Development - AP Hogeschool
            </a>
        </footer>
    );
}

export default Footer