"use client"
import {useEffect, useState} from "react";
import {supabase} from "@/supabase";
import Note from "@/app/components/note";

const notes = () => {
    const [error, setError] = useState(null);
    const [notes, setNotes] = useState([]);
    const [selectedPromotion, setSelectedPromotion] = useState("");
    const [selectedCursus, setSelectedCursus] = useState("");

    useEffect(() => {
        const fetchNotes = async () => {
            let { data: notesData, error } = await supabase
                    .from('N4I_Lessons')
                    .select('id, name, author');

            if (error) {
                setError(error);
            } else {
                setNotes(notesData);
            }
        };

        fetchNotes().then(r => r);
    }, []);

    const handlePromotionChange = (event) => {
        setSelectedPromotion(event.target.value);
    };

    const handleCursusChange = (event) => {
        setSelectedCursus(event.target.value);
    };

    const filteredNotes = notes.filter((note) => {
        const byPromotion =
                !selectedPromotion ||
                note.attributes.Auteur.data.attributes.Promotion === selectedPromotion;
        const byCursus =
                !selectedCursus ||
                note.attributes.Auteur.data.attributes.Cursus === selectedCursus;
        return byPromotion && byCursus;
    });

    if (error) {
        return <div>Une erreur s'est produite : {error.message}</div>;
    }

    return (
            <div className="notes wrapper -medium">
                <h1>Toutes les notes</h1>
                <div className="selectContainer">
                    <select value={selectedPromotion} onChange={handlePromotionChange}>
                        <option value="">Toutes les promotions</option>
                        <option value="A1">A1</option>
                        <option value="A2">A2</option>
                        <option value="A3">A3</option>
                        <option value="A4">A4</option>
                        <option value="A5">A5</option>
                    </select>
                    <select value={selectedCursus} onChange={handleCursusChange}>
                        <option value="">Tous les cursus</option>
                        <option value="Création & Design">Création & Design</option>
                        <option value="Développement Web">Développement Web</option>
                        <option value="Jeu vidéo">Jeu vidéo</option>
                        <option value="Communication Digital">Communication Digital</option>
                        <option value="Animation 3D">Animation 3D</option>
                    </select>
                </div>
                <div className="card-container">
                    {filteredNotes.length > 0 ? (
                            filteredNotes.map((note) => (
                                    note.name && note.name.trim() !== '' ? (
                                            <Note name={note.name} author={note.author}
                                                  link={{
                                                      pathname: '/single-note',
                                                      query: {
                                                          id: note.id,
                                                      },
                                                  }} />
                                    ) : null
                            ))
                    ) : (
                            <div className="noResult">Aucun résultat trouvé</div>
                    )}
                </div>
            </div>
    );
}

export default notes;