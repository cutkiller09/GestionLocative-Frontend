const validateLocataire = (locataire) => {
    const errors = {};

    if (!locataire.prenom) {
        errors.prenom = "Le prénom est requis.";
    }

    if (!locataire.nom) {
        errors.nom = "Le nom est requis.";
    }

    if (!locataire.dateNaissance) {
        errors.dateNaissance = "La date de naissance est requise.";
    } else if (new Date(locataire.dateNaissance) > new Date()) {
        errors.dateNaissance = "La date de naissance ne peut pas être dans le futur.";
    }

    if (!locataire.lieuNaissance) {
        errors.lieuNaissance = "Le lieu de naissance est requis.";
    }

    if (!locataire.nationalite) {
        errors.nationalite = "La nationalité est requise.";
    }

    if (!locataire.adresse) {
        errors.adresse = "L'adresse est requise.";
    }

    if (!locataire.designation) {
        errors.designation = "La désignation est requise.";
    }

    if (!locataire.type) {
        errors.type = "Le type est requis.";
    }

    if (locataire.meuble === undefined) {
        errors.meuble = "Le statut meublé est requis.";
    }

    if (!locataire.identiteBailleur) {
        errors.identiteBailleur = "L'identité du bailleur est requise.";
    }

    if (!locataire.duree) {
        errors.duree = "La durée est requise.";
    }

    if (!locataire.detailsLoyer) {
        errors.detailsLoyer = "Les détails du loyer sont requis.";
    }

    return errors;
};

export { validateLocataire };