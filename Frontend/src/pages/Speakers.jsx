import React, {useEffect, useState} from "react";
import axios from "axios";
import "../styles/Persons.css";

const App = () => {
  const [speakers, setSpeakers] = useState([]);
  const [error, setError] = useState(null);
  const [selectedCursus, setSelectedCursus] = useState("");

  const handleCursusChange = (event) => {
    setSelectedCursus(event.target.value);
  };

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/speakers")
      .then(({data}) => setSpeakers(data.data))
      .catch((error) => setError(error));
  }, []);

  const filteredSpeakers = speakers.filter((speaker) => {
    const byCursus = !selectedCursus || speaker.attributes.Cursus === selectedCursus;
    return byCursus;
  });

  if (error) {
    // Print errors if any
    return <div>An error occurred: {error.message}</div>;
  }

  return (
    <div className="App students wrapper -medium">
      <div className="selectContainer">
        <select value={selectedCursus} onChange={handleCursusChange}>
          <option value="">Tous les cursus</option>
          <option value="Création & Design">Création & Design</option>
          <option value="Développement Web">Développement Web</option>
          <option value="Jeu vidéo">Jeu vidéo</option>
          <option value="Communication Digital">Communication Digital</option>
          <option value="Animation 3D">Animation 3D</option>
        </select>
      </div>
      <div className="personListContainer">
        {filteredSpeakers.map((speaker) => (
          <div key={speaker.attributes.Email} className="personCard">
            <p>
              <b>{speaker.attributes.Nom.toUpperCase()} {speaker.attributes.Prenom.charAt(0).toUpperCase() + speaker.attributes.Prenom.slice(1)}</b>
            </p>
            <code>{speaker.attributes.Email}</code>
            <div className="more-infos">
              <p>Cours: <b>{speaker.attributes.Cours}</b></p>
              <p>Cursus: <b>{speaker.attributes.Cursus}</b></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default App;