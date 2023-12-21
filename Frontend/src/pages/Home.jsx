import React from "react";

const Home = () => {
  return (
    <div>
      <h1>Page d'accueil</h1>
      <p>Bienvenue sur la page d'accueil !</p>
      <button onClick={() => window.location.href="/notes"}>Go to Note list</button>
      <button onClick={() => window.location.href="/students"}>Go to Student list</button>
      <button onClick={() => window.location.href="/speakers"}>Go to Speaker list</button>
    </div>
  );
};

export default Home;
