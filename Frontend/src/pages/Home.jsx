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
      <h1>Note 4 IIM</h1>
      <div className="doc">
        <p>Cette appli permet de centraliser tous les cours d'une même classe.</p>
        <p>Une élève peut ajouter un module puis créer une note de tout ce qui a été vu en cours.</p>
        <p>Les profs y ont accès aussi.</p>
      </div>
      <div className="card-container">
        <Card title="Cours" description="Accéder à tous les cours" link="/notes"/>
        <Card title="Étudiants" description="Liste de tous les étudiants" link="/students"/>
        <Card title="Professeurs" description="Liste de tous les professeurs" link="/speakers"/>
        <Card title="Portail De-Vinci" target="_blank" link="https://www.leonard-de-vinci.net/" className="-portal"/>
      </div>
      <button onClick={logout}>Sign Out</button> 
    </div>
  );
};

export default Home;

