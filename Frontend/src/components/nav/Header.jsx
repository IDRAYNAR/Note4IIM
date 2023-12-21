import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <nav className="comp-nav-header">
      <ul>
        <li className="logo"><Link to="/"><span>4</span></Link></li>
        <li><Link to="/notes">Cours</Link></li>
        <li><Link to="/students">Étudiants</Link></li>
        <li><Link to="/speakers">Professeurs</Link></li>
      </ul>
    </nav>
)
  ;
};

export default Header;