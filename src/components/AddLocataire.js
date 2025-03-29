// filepath: gestion-locative-frontend/src/components/AddLocataire.js
import React, { useState } from 'react';
import { addLocataire } from '../api';

const AddLocataire = () => {
    const [formData, setFormData] = useState({
        prenom: '',
        nom: '',
        adresse_bien: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addLocataire(formData);
        alert('Locataire ajouté avec succès');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Ajouter un Locataire</h1>
            <input
                type="text"
                name="prenom"
                placeholder="Prénom"
                value={formData.prenom}
                onChange={handleChange}
            />
            <input
                type="text"
                name="nom"
                placeholder="Nom"
                value={formData.nom}
                onChange={handleChange}
            />
            <input
                type="text"
                name="adresse_bien"
                placeholder="Adresse du bien"
                value={formData.adresse_bien}
                onChange={handleChange}
            />
            <button type="submit">Ajouter</button>
        </form>
    );
};

export default AddLocataire;