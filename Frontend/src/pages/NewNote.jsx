import React, { useState, useEffect } from "react";
import { supabase } from "../supabase";
// import axios from "axios";

const NewNote = () => {
	const [error, setError] = useState(null);
	const [redirect, setRedirect] = useState(false);
	const [lessonId, setLessonId] = useState(null);

	const createNewLesson = async (event) => {
		event.preventDefault();
		const form = event.target;
		const nom = form.nom.value;
		const notes = form.notes.value;

		try {
			const { data, error } = await supabase
				.from("N4I_Lessons")
				.insert([{ name: nom, content: notes }])
				.select();

			if (error) {
				console.error("Erreur lors de l'insertion :", error.message);
				setError(error);
			} else {
				if (data && data[0] && data[0].id) {
					setLessonId(data[0].id);
					setRedirect(true);
				} else {
					console.error("Received invalid lesson data");
				}
			}
		} catch (error) {
			console.error("Error response from server:", error.message);
			setError(error);
		}

		// axios
		// 	.get("http://localhost:1337/api/students")
		// 	.then((response) => {
		// 		const students = response.data.data;
		// 		const randomIndex = Math.floor(Math.random() * students.length);
		// 		const selectedStudent = students[randomIndex];

		// 		axios
		// 			.post("http://localhost:1337/api/lessons", {
		// 				data: {
		// 					Nom: nom,
		// 					Notes: notes,
		// 					Auteur: selectedStudent.id,
		// 				},
		// 			})
		// 			.then(({ data }) => {
		// 				if (data && data.data && data.data.id) {
		// 					setLessonId(data.data.id);
		// 					setRedirect(true);
		// 				} else {
		// 					console.error("Received invalid lesson data");
		// 				}
		// 			})
		// 			.catch((error) => {
		// 				if (error.response) {
		// 					console.error("Error response from server:", error.response.data);
		// 				}
		// 				setError(error);
		// 			});
		// 	})
		// 	.catch((error) => {
		// 		console.error("Error fetching student:", error);
		// 		setError(error);
		// 	});
	};

	useEffect(() => {
		if (redirect && lessonId) {
			window.location.href = `/single-note/${lessonId}`;
		}
	}, [redirect, lessonId]);

	if (error) {
		return <div>Une erreur s'est produite : {error.message}</div>;
	}

	return (
		<div className="new-note wrapper -medium">
			<h1>Créer une nouvelle note</h1>

			<form className="form" onSubmit={createNewLesson}>
				<label htmlFor="nom">Nom du cours</label>
				<input className="input-title" type="text" id="nom" name="nom" />

				<label htmlFor="notes">Notes</label>
				<textarea className="input-notes" id="notes" name="notes"></textarea>
				<button className="update-btn" type="submit">
					Créer un nouveau cours
				</button>
			</form>
		</div>
	);
};

export default NewNote;
