document.addEventListener('DOMContentLoaded', function() {
    const API_BASE_URL = 'http://localhost:3000'; // Remplacez par l'URL de votre API

    // Formulaire pour créer un employé
    const employeForm = document.getElementById('employeForm');
    employeForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nom = document.getElementById('nom').value;
        const prenom = document.getElementById('prenom').value;
        const dateNaissance = document.getElementById('dateNaissance').value;
        const animalId = document.getElementById('animalId').value;

        createEmploye(nom, prenom, dateNaissance, animalId);
    });

    // Fonction pour créer un employé
    function createEmploye(nom, prenom, dateNaissance, animalId) {
        const data = {
            nom: nom,
            prenom: prenom,
            dateNaissance: dateNaissance,
            animalId: animalId
        };

        fetch(`${API_BASE_URL}/employes`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            if (response.ok) {
                employeForm.reset(); // Réinitialiser le formulaire
                fetchEmployes(); // Mettre à jour la liste des employés après la création
            } else {
                console.error('Erreur lors de la création de l\'employé');
            }
        })
        .catch((error) => {
            console.error('Erreur lors de la création de l\'employé :', error);
        });
    }
});
