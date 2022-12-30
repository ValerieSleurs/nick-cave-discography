import * as React from "react"
import { Link } from 'gatsby'
import {
  navContainer,
  navHeader,
  navItems,
  navItem,
  navItemLink,
  spotifyButton
} from "./header.module.css"


const Header = ({ spotifyLink }) => {
  return (
    <nav className={navContainer}>
      <header className={navHeader}><Link to="/">Nick Cave & the Bad Seeds</Link></header>
      <ul className={navItems}>
        <li className={navItem}>
          <Link className={navItemLink} to="/">Home</Link>
        </li>
        <li className={navItem}>
          <Link className={navItemLink} to="/albums">Discography</Link>
        </li>
        <li>
          <a
            className={spotifyButton}
            href={spotifyLink.spotify}
            target="_blank"
            rel="noreferrer"
          >
            Listen on Spotify
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header