import React, { useState } from "react";
import { handleSignOut } from './Register';

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Mettez ici l'état initial de la connexion

  const logout = async () => {
    await handleSignOut();
  
    setIsLoggedIn(false);
    window.location.href = "/login"; // Par exemple, rediriger vers la page de connexion
  };

  // Vérifier l'état de connexion pour décider d'afficher ou non le bouton "Sign Out"
  const renderSignOutButton = isLoggedIn ? <button onClick={logout}>Sign Out</button> : null;

  return (
    <div>
      <h1>Page d'accueil</h1>
      <p>Bienvenue sur la page d'accueil !</p>
      <button onClick={() => window.location.href="/lessons"}>Go to Lesson lists</button>
      <button onClick={() => window.location.href="/students"}>Go to Student list</button>
      {renderSignOutButton}
    </div>
  );
};

export default Home;





