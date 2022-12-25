import * as React from "react"
import { Link } from 'gatsby'
import {
  navContainer,
  navHeader,
  navItems,
  navItem,
  navItemLink
} from "./header.module.css"


const Header = () => {
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
        </ul>
      </nav>
  );
}

export default Header