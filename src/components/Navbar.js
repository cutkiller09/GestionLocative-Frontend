import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/affichage-locataires">Affichage Locataires</Link>
                </li>
                <li>
                    <Link to="/ajouter-locataire">Ajouter Locataire</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;