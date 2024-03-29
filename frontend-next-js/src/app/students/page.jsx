/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
"use client";
import { useEffect, useState } from "react";
import { supabase } from "../../supabase";
import Student from "../components/student";

const students = () => {
	const [error, setError] = useState(null);
	const [students, setStudents] = useState([]);
	const [selectedYear, setSelectedYear] = useState("");
	const [selectedCursus, setSelectedCursus] = useState("");

	useEffect(() => {
		const fetchStudents = async () => {
			let { data: studentsData, error } = await supabase
				.from("N4I_Students")
				.select("name, email, cursus, year");

			if (error) {
				setError(error);
			} else {
				setStudents(studentsData);
			}
		};

		fetchStudents().then((r) => r);
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
		<div className="App students wrapper ">
			<h1>Étudiants</h1>
			<div className="selectContainer">
				<select value={selectedYear} onChange={handleYearChange}>
					<option value="">Toutes les promotions</option>
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
					<Student
						name={student.name}
						cursus={student.cursus}
						year={student.year}
						email={student.email}
					/>
				))}
			</div>
		</div>
	);
};

export default students;
