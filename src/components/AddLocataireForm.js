import React, { useState } from 'react';
import { addLocataire } from '../api'; 
import '../styles/AddLocataireForm.css'; 

const AddLocataireForm = () => {
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
        identiteBailleur: '',
        adresseBailleur: '',
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
        // Reset form after submission
        setFormData({
            prenom: '',
            nom: '',
            dateNaissance: '',
            lieuNaissance: '',
            nationalite: '',
            adresse: '',
            designation: '',
            type: '',
            meuble: false,
            identiteBailleur: '',
            adresseBailleur: '',
            duree: '',
            detailsLoyer: ''
        });
    };

    return (
        <form onSubmit={handleSubmit} className="add-locataire-form">
            <h2>Ajouter un Locataire</h2>
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
            <input type="text" name="identiteBailleur" placeholder="Identité du Bailleur" value={formData.identiteBailleur} onChange={handleChange} required />
            <input type="text" name="adresseBailleur" placeholder="Adresse du Bailleur" value={formData.adresseBailleur} onChange={handleChange} required />
            <input type="text" name="duree" placeholder="Durée" value={formData.duree} onChange={handleChange} required />
            <textarea name="detailsLoyer" placeholder="Détails du Loyer" value={formData.detailsLoyer} onChange={handleChange} required></textarea>
            <button type="submit">Ajouter Locataire</button>
        </form>
    );
};

export default AddLocataireForm;