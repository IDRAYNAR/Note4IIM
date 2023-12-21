import React from "react";
import Card from "../components/Card";
import { handleSignOut} from './Register'


const logout = async () => {
  await handleSignOut();
  // Rediriger l'utilisateur vers la page de connexion ou une autre page après la déconnexion si nécessaire
  window.location.href = "/login"; // Par exemple, rediriger vers la page de connexion
};

const Home = () => {
 
  return (
    <div className="home wrapper -medium">
      <h1>Bienvenue sur <strong style={{fontSize: 'larger', color: '#ED7000'}}>Note4IIM</strong></h1>
      <div className="doc">
        <p>Grâce à <strong style={{fontSize: 'larger', color: '#ED7000'}}>Note4IIM</strong>, n'importe quel etudiant de l'etablissement, si connecté peut acceder aux differents cours des differentes années (de 1 à 5) et des differents cursus. Les professeurs ont également accès à toutes les informations concernant les cours et les notes des élèves.</p>
      </div>
      <div className="card-container">
        <Card title="Cours" description="Accéder à tous les cours" link="/notes"/>
        <Card title="Étudiants" description="Liste de tous les étudiants" link="/students"/>
        <Card title="Professeurs" description="Liste de tous les professeurs" link="/speakers"/>
        <Card title="Portail De-Vinci" target="_blank" link="https://www.leonard-de-vinci.net/" className="-portal"/>
      </div>
    </div>
  );
};

export default Home;

