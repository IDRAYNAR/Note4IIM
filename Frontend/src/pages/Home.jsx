import React from "react";

const Home = () => {
  return (
    <div className="home wrapper -medium">
      <h1>Bienvenue sur Note 4 IIM</h1>
      <p className="doc">Cette appli permet de centraliser tous les cours d'une même classe.{'\n'}
        Une élève peut ajouter un module puis créer une note de tout ce qui a été vu en cours.{'\n'}
        Les profs y ont accès aussi.</p>
      <div className="card-container">
        <button className="card" onClick={() => window.location.href = "/notes"}>
          <h3>Go to Note list</h3>
        </button>
        <button className="card" onClick={() => window.location.href = "/students"}>Go to Student list</button>
        <button className="card" onClick={() => window.location.href = "/speakers"}>Go to Speaker list</button>
      </div>
    </div>
  );
};

export default Home;
