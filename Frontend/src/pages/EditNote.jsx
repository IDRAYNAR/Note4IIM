import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../supabase"; // Assurez-vous de configurer votre connexion Supabase

const EditNote = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const [note, setNote] = useState(null);

	useEffect(() => {
		const fetchNote = async () => {
			const { data, error } = await supabase
				.from("N4I_Lessons")
				.select()
				.eq("id", id)
				.single();

			if (error) {
				console.error("Error fetching note:", error);
			} else {
				setNote(data);
			}
		};

		fetchNote();
	}, [id]);

	const updateLesson = async (event, lessonId) => {
		event.preventDefault();
		const form = event.target;
		const nom = form.nom.value;
		const notes = form.notes.value;

		try {
			const { data, error } = await supabase
				.from("N4I_Lessons")
				.update({
					name: nom,
					content: notes,
				})
				.eq("id", lessonId)
				.single();

			if (error) {
				console.error("Error updating lesson:", error);
			} else {
				setNote(data);
				navigate("/notes");
			}
		} catch (error) {
			console.error("Error updating lesson:", error);
		}
	};

	if (!note) {
		return <div>Loading...</div>;
	}

	return (
		<div className="edit-note wrapper -medium">
			<h1>Modifier la note</h1>
			<form className="form" onSubmit={(event) => updateLesson(event, id)}>
				<label htmlFor="nom">Nom du cours</label>
				<input
					className="input-title"
					type="text"
					id="nom"
					name="nom"
					defaultValue={note?.Nom}
				/>

				<label htmlFor="notes">Notes</label>
				<textarea
					className="input-notes"
					id="notes"
					name="notes"
					defaultValue={note?.Notes}></textarea>
				<button className="update-btn" type="submit">
					Mettre à jour
				</button>
			</form>
		</div>
	);
};

export default EditNote;
