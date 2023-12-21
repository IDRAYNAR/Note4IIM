import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../assets/IIM.png";

const Header = ({ isLoggedIn, handleSignOut }) => {
  return (
    <nav className="comp-nav-header">
      <ul>
        <li className="logo">
          <Link to="/">
            <img src={logo} alt="Logo"/>
          </Link>
        </li>
          <div>
            <li><Link to="/notes">Cours</Link></li>
            <li><Link to="/students">Étudiants</Link></li>
            <li><Link to="/speakers">Professeurs</Link></li>
            <li><Link className="new" to="/new-note">Créer une note</Link></li>
          </div>
      </ul>
    </nav>
  );
};

export default Header;