import * as React from "react"
import { Link } from 'gatsby'

const Header = () => {
  return (    
      <nav>
        <header>"Nick Cave and the Bad Seeds logo"</header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/albums">Albums</Link>
          </li>
        </ul>
      </nav>
  );
}

export default Header