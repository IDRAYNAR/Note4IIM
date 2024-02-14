"use client"
import { useEffect, useState } from "react";
import { supabase } from '@/supabase'

const etudiants = () => {
    const [error, setError] = useState(null);
    const [students, setStudents] = useState([]);
    const [selectedYear, setSelectedYear] = useState("");
    const [selectedCursus, setSelectedCursus] = useState("");

    useEffect(() => {
        const fetchStudents = async () => {
            let { data: studentsData, error } = await supabase
                    .from('N4I_Students')
                    .select('name, email, cursus, year');

            if (error) {
                setError(error);
            } else {
                setStudents(studentsData);
            }
        };

        fetchStudents().then(r => r);
    }, []);

    const handleYearChange = (event) => {
        setSelectedYear(event.target.value);
    };

    const handleCursusChange = (event) => {
        setSelectedCursus(event.target.value);
    };

    const filteredStudents = students.filter((student) => {
        const byYear = !selectedYear || student.year.toString() === selectedYear;
        const byCursus = !selectedCursus || student.cursus === selectedCursus;
        return byYear && byCursus;
    });

    if (error) {
        return <div>An error occured: {error.message}</div>;
    }

    return (
            <div className="App students wrapper -medium">
                <div className="selectContainer">
                    <select value={selectedYear} onChange={handleYearChange}>
                        <option value="">Toutes les années</option>
                        <option value="1">A1</option>
                        <option value="2">A2</option>
                        <option value="3">A3</option>
                        <option value="4">A4</option>
                        <option value="5">A5</option>
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
                <div className="personListContainer">
                    {filteredStudents.map((student) => (
                            <div key={student.email} className="personCard">
                                <p>
                                    <b>{student.name.toUpperCase()}</b>
                                </p>
                                <code>{student.email}</code>
                                <div className="more-infos">
                                    <p>Cursus: <b>{student.cursus}</b></p>
                                    <p>Année: <b>{student.year}</b></p>
                                </div>
                            </div>
                    ))}
                </div>
            </div>
    );
};

export default etudiants;