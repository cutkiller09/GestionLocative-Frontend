// filepath: gestion-locative-frontend/src/components/LocatairesList.js
import React, { useEffect, useState } from 'react';
import { getLocataires } from '../api'; 

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
        <div>
            <h1>Liste des Locataires</h1>
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