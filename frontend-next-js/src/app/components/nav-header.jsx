import React from 'react';
import Link from "next/link";

const NavHeader = ({isLoggedIn, handleSignOut}) => {

    return (
            <nav className="comp-nav-header">
                <ul>
                    <li className="logo">
                        <Link href="/" legacyBehavior>
                            <a>
                                <img src="https://file.diplomeo-static.com/file/00/00/02/10/21010.svg" alt="Logo"/>
                            </a>
                        </Link>
                    </li>
                    <div>
                        <li><Link href="/notes" legacyBehavior>Notes</Link></li>
                        <li><Link href="/students" legacyBehavior>Étudiants</Link></li>
                        <li><Link href="/speakers" legacyBehavior>Intervenants</Link></li>
                        <li><Link href="/new-note" legacyBehavior><a className="new">Créer une note</a></Link></li>
                    </div>
                </ul>
            </nav>
    );
};

export default NavHeader;