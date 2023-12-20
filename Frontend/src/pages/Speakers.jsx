import React, { useEffect, useState } from "react";
import axios from "axios";

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
            .then(({ data }) => setSpeakers(data.data))
            .catch((error) => setError(error));
    }, []);

    const filteredSpeakers = speakers.filter((speaker) => {
        const byCursus = !selectedCursus || speaker.attributes.Cursus === selectedCursus;
        return  byCursus;
    });

    if (error) {
        // Print errors if any
        return <div>An error occurred: {error.message}</div>;
    }

    return (
        <div className="App">
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
            {filteredSpeakers.map((speaker) => (
                <div key={speaker.attributes.Email}>
                    <p>{speaker.attributes.Nom}</p>
                    <p>{speaker.attributes.Prenom}</p>
                    <p>{speaker.attributes.Email}</p>
                    <p>{speaker.attributes.Cours}</p>
                    <p>{speaker.attributes.Cursus}</p>
                </div>
            ))}
        </div>
    );
};


export default App;