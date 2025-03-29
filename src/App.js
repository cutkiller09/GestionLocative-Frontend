import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AffichageLocataires from './pages/AffichageLocataires';
import AjouterLocataire from './pages/AjouterLocataire';

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<AffichageLocataires />} />
                    <Route path="/ajouter-locataire" element={<AjouterLocataire />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;