import React from "react";

const Home = () => {
  return (
    <div>
      <h1>Page d'accueil</h1>
      <p>Bienvenue sur la page d'accueil !</p>
      <button onClick={() => window.location.href="/lessons"}>Go to Lesson list</button>
    </div>
  );
};

export default Home;
