import React from "react";
import { handleSignOut} from './Register'


const logout = async () => {
  await handleSignOut();
  // Rediriger l'utilisateur vers la page de connexion ou une autre page après la déconnexion si nécessaire
  window.location.href = "/login"; // Par exemple, rediriger vers la page de connexion
};

const Home = () => {
 
  return (
    <div>
      <h1>Page d'accueil</h1>
      <p>Bienvenue sur la page d'accueil !</p>
      <button onClick={() => window.location.href="/lessons"}>Go to Lesson lists</button>
      <button onClick={() => window.location.href="/students"}>Go to Student list</button>
      <button onClick={logout}>Sign Out</button> 
    </div>
  );
};

export default Home;

