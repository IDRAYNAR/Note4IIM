"use client"
import { useEffect, useState } from "react";
import { supabase } from '../../supabase';


const speakers = () => {
    const [error, setError] = useState(null);
    const [speakerData, setSpeakerData] = useState([]);
    const [selectedcursus, setSelectedcursus] = useState("");

    useEffect(() => {
        const fetchSpeakers = async () => {
            let { data: speakersData, error } = await supabase
                .from('N4I_Speakers')
                .select('name, email, cursus');

            if (error) {
                setError(error);
            } else {
                setSpeakerData(speakersData);
            }
        };

        fetchSpeakers().then(r => r);
    }, []);

    const handlecursusChange = (event) => {
        setSelectedcursus(event.target.value);
    };

    const filteredSpeakers = speakerData.filter((speaker) => {
        const bycursus = !selectedcursus || speaker.cursus === selectedcursus;
        return bycursus;
    });

    if (error) {
        return <div>An error occurred: {error.message}</div>;
    }

    return (
        <div className="App speakers wrapper -medium">
            <div className="selectContainer">
                <select value={selectedcursus} onChange={handlecursusChange}>
                    <option value="">Tous les sujets</option>
                    <option value="Création & Design">Création & Design</option>
                    <option value="Développement Web">Développement Web</option>
                    <option value="Jeu vidéo">Jeu vidéo</option>
                    <option value="Communication Digital">Communication Digital</option>
                    <option value="Animation 3D">Animation 3D</option>
                </select>
            </div>
            <div className="personListContainer">
                {filteredSpeakers.map((speaker) => (
                    <div key={speaker.email} className="personCard">
                        <p>
                            <b>{speaker.name.toUpperCase()}</b>
                        </p>
                        <code>{speaker.email}</code>
                        <div className="more-infos">
                            <p>cursus: <b>{speaker.cursus}</b></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default speakers;
