"use client"
import { useEffect, useState } from "react";
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lkhayewnehhxhqkckehs.supabase.co/';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxraGF5ZXduZWhoeGhxa2NrZWhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI4OTc5NTMsImV4cCI6MjAxODQ3Mzk1M30.fKfRK_Dmx4KZ39za2coUrQGBbLJkrCbK_YIKEBbEQ6U';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

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
                        <option value="Design">Design</option>
                        <option value="Web Development">Développement Web</option>
                        <option value="Game Development">Jeu vidéo</option>
                        <option value="Digital Communication">Communication Digital</option>
                        <option value="3D Animation">Animation 3D</option>
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
