import React, { useEffect, useState } from 'react';
import { getLocataires } from '../api'; 
import { Link } from 'react-router-dom';
import '../styles/LocatairesList.css';

const LocatairesList = () => {
    const [locataires, setLocataires] = useState([]);

    useEffect(() => {
        const fetchLocataires = async () => {
            const data = await getLocataires();
            setLocataires(data);
        };
        fetchLocataires();
    }, []);

    return (
        <div className="locataires-list">
            <h1>Liste des Locataires</h1>
            <Link to="/ajouter-locataire" className="add-locataire-button">Ajouter un Locataire</Link>
            <ul>
                {locataires.map((locataire) => (
                    <li key={locataire._id}>
                        {locataire.prenom} {locataire.nom} - {locataire.adresse_bien}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LocatairesList;