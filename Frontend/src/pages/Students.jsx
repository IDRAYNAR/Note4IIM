import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
    const [error, setError] = useState(null);
    const [students, setStudents] = useState([]);
    const [selectedPromotion, setSelectedPromotion] = useState("");
    const [selectedCursus, setSelectedCursus] = useState("");

    useEffect(() => {
        axios
            .get("http://localhost:1337/api/students")
            .then(({ data }) => setStudents(data.data))
            .catch((error) => setError(error));
    }, []);

    const handlePromotionChange = (event) => {
        setSelectedPromotion(event.target.value);
    };

    const handleCursusChange = (event) => {
        setSelectedCursus(event.target.value);
    };

    const filteredStudents = students.filter((student) => {
        const byPromotion = !selectedPromotion || student.attributes.Promotion === selectedPromotion;
        const byCursus = !selectedCursus || student.attributes.Cursus === selectedCursus;
        return byPromotion && byCursus;
    });

    if (error) {
        // Print errors if any
        return <div>An error occured: {error.message}</div>;
    }

    return (
        <div className="App">
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
            {filteredStudents.map((student) => (
                <div key={student.attributes.Email}>
                    <p>{student.attributes.Nom}</p>
                    <p>{student.attributes.Prenom}</p>
                    <p>{student.attributes.Email}</p>
                    <p>{student.attributes.Promotion}</p>
                    <p>{student.attributes.Cursus}</p>
                </div>
            ))}
        </div>
    );
};


export default App;