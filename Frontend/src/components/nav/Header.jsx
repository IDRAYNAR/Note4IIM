import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../assets/IIM.png";

const Header = () => {
  return (
    <nav className="comp-nav-header">
      <ul>
        <li className="logo">
          <Link to="/">
            <img src={logo} alt="Logo"/>
          </Link>
        </li>
        <li><Link to="/notes">Cours</Link></li>
        <li><Link to="/students">Étudiants</Link></li>
        <li><Link to="/speakers">Professeurs</Link></li>
        <li><Link className="new" to="/new-note">Créer</Link></li>
      </ul>
    </nav>
  );
};

export default Header;