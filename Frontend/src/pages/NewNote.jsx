import React, { useState, useEffect } from "react";
import { supabase } from "../supabase";
// import axios from "axios";

const NewNote = () => {
	const [error, setError] = useState(null);
	const [redirect, setRedirect] = useState(false);
	const [lessonId, setLessonId] = useState(null);
	const [nom, setNom] = useState("");
	const [notes, setNotes] = useState("");
	const [isButtonDisabled, setIsButtonDisabled] = useState(true);

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
				if (data && data[0] && data[0].id && notes && nom) {
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
	};

	useEffect(() => {
		setIsButtonDisabled(!(nom && notes));
	}, [nom, notes]);

	useEffect(() => {
		if (redirect && lessonId) {
			window.location.href = `/single-note/${lessonId}`;
		}
	}, [redirect, lessonId]);

	if (error) {
		return <div>Une erreur s'est produite : {error.message}</div>;
	}

	return (
		<div className="new-note wrapper">
			<h1>Créer une nouvelle note</h1>

			<form className="form" onSubmit={createNewLesson}>
				<label htmlFor="nom">Nom du cours</label>
				<input
					className="input-title"
					type="text"
					id="nom"
					name="nom"
					value={nom}
					onChange={(e) => setNom(e.target.value)}
				/>

				<label htmlFor="notes">Notes</label>
				<textarea
					className="input-notes"
					id="notes"
					name="notes"
					value={notes}
					onChange={(e) => setNotes(e.target.value)}
				/>
				<button
					className="update-btn"
					type="submit"
					disabled={isButtonDisabled}>
					Créer
				</button>
			</form>
		</div>
	);
};

export default NewNote;
