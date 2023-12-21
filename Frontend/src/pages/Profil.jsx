import {  useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const Profil = () => {
    const [selectedPromotion, setSelectedPromotion] = useState("");
    const [selectedCursus, setSelectedCursus] = useState("");
    const [userEmail, setUserEmail] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Récupérer l'e-mail depuis le stockage local
        const storedEmail = localStorage.getItem('signupEmail');
        if (storedEmail) {
            setUserEmail(storedEmail);
        }
    }, []);

    const handlePromotionChange = (event) => {
        setSelectedPromotion(event.target.value);
    };

    const handleCursusChange = (event) => {
        setSelectedCursus(event.target.value);
    };

    const addStudent = (event) => {
        event.preventDefault();
        const form = event.target;
        const nom = form.nom.value;
        const prenom = form.prenom.value;
        const promotion = selectedPromotion;
        const cursus = selectedCursus;
        const email = form.email.value;

        axios.post(`http://localhost:1337/api/students`, {
            data: {
            Nom: nom,
            Prenom: prenom,
            Promotion: promotion,
            Cursus: cursus,
            Email: email
            }
        })
        .then(({ data }) => {
            console.log("New student added:", data);
            navigate('/'); 
        })
        .catch((error) => {
            console.error("Error adding new student:", error);
        });
    }

    return (
        <div>
            <h1>Profil</h1>
            <form onSubmit={(event) => addStudent(event)}>
                <label htmlFor="nom">Nom</label>
                <input type="text" id="nom" name="nom" />

                <label htmlFor="prenom">Prénom</label>
                <input type="text" id="prenom" name="prenom" />

                <label htmlFor="promotion">Promotion</label>
                <select value={selectedPromotion} onChange={handlePromotionChange}>
                    <option value="">Toutes les promotions</option>
                    <option value="A1">A1</option>
                    <option value="A2">A2</option>
                    <option value="A3">A3</option>
                    <option value="A4">A4</option>
                    <option value="A5">A5</option>
                </select>

                <label htmlFor="cursus">Cursus</label>
                <select value={selectedCursus} onChange={handleCursusChange}>
                    <option value="">Tous les cursus</option>
                    <option value="Création & Design">Création & Design</option>
                    <option value="Développement Web">Développement Web</option>
                    <option value="Jeu vidéo">Jeu vidéo</option>
                    <option value="Communication Digital">Communication Digital</option>
                    <option value="Animation 3D">Animation 3D</option>
                </select>

                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" value={userEmail} placeholder={userEmail} readOnly/>

                <button type="submit">Update Profil</button>
            </form>
        </div>
    );

}
export default Profil;