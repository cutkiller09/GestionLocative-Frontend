// filepath: gestion-locative-frontend/src/api.js
import axios from 'axios';

const API_URL = 'http://210.138.1.210:3123/api/locataires';

// Récupérer tous les locataires
export const getLocataires = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

// Ajouter un locataire
export const addLocataire = async (locataire) => {
    const response = await axios.post(`${API_URL}/add`, locataire);
    return response.data;
};