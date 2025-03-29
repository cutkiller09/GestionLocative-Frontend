import React, { useState } from 'react';
import { addLocataire } from '../api'; 
import '../styles/AddLocataireForm.css';

const AjouterLocataire = () => {
    const [formData, setFormData] = useState({
        prenom: '',
        nom: '',
        dateNaissance: '',
        lieuNaissance: '',
        nationalite: '',
        adresse: '',
        designation: '',
        type: '',
        meuble: false,
        identite: '',
        duree: '',
        detailsLoyer: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addLocataire(formData);
        // Optionally reset the form or redirect the user
    };

    return (
        <div>
            <h1>Ajouter un Locataire</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="prenom" placeholder="Prénom" value={formData.prenom} onChange={handleChange} required />
                <input type="text" name="nom" placeholder="Nom" value={formData.nom} onChange={handleChange} required />
                <input type="date" name="dateNaissance" value={formData.dateNaissance} onChange={handleChange} required />
                <input type="text" name="lieuNaissance" placeholder="Lieu de Naissance" value={formData.lieuNaissance} onChange={handleChange} required />
                <input type="text" name="nationalite" placeholder="Nationalité" value={formData.nationalite} onChange={handleChange} required />
                <input type="text" name="adresse" placeholder="Adresse" value={formData.adresse} onChange={handleChange} required />
                <input type="text" name="designation" placeholder="Désignation" value={formData.designation} onChange={handleChange} required />
                <input type="text" name="type" placeholder="Type" value={formData.type} onChange={handleChange} required />
                <label>
                    Meublé:
                    <input type="checkbox" name="meuble" checked={formData.meuble} onChange={handleChange} />
                </label>
                <input type="text" name="identite" placeholder="Identité du Bailleur" value={formData.identite} onChange={handleChange} required />
                <input type="text" name="duree" placeholder="Durée" value={formData.duree} onChange={handleChange} required />
                <textarea name="detailsLoyer" placeholder="Détails du Loyer" value={formData.detailsLoyer} onChange={handleChange} required></textarea>
                <button type="submit">Ajouter Locataire</button>
            </form>
        </div>
    );
};

export default AjouterLocataire;