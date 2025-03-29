import axios from 'axios';

const API_URL = 'http://your-api-url.com/api'; // Remplacez par l'URL de votre API

export const getLocataires = async () => {
    try {
        const response = await axios.get(`${API_URL}/locataires`);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des locataires:', error);
        throw error;
    }
};

export const addLocataire = async (locataireData) => {
    try {
        const response = await axios.post(`${API_URL}/locataires`, locataireData);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de l\'ajout d\'un locataire:', error);
        throw error;
    }
};