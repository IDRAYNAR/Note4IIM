"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { supabase } from "@/supabase";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const EditNote = () => {
	const router = useRouter(); // Add this line

	const [note, setNote] = useState(null);
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const searchParams = useSearchParams();
	const id = searchParams.get("id");

	useEffect(() => {
		const fetchNote = async () => {
			let { data, error } = await supabase
				.from("N4I_Lessons")
				.select("*")
				.eq("id", id);

			if (error) {
				console.error("Error fetching note:", error);
			} else {
				if (data && data.length > 0) {
					setNote(data[0]);
					setTitle(data[0].name);
					setContent(data[0].content);
				} else {
					console.error("No note found with id:", id);
				}
			}
		};

		fetchNote().then((r) => r);
	}, [id]);

	const handleTitleChange = (event) => {
		setTitle(event.target.value);
	};

	const handleContentChange = (event) => {
		setContent(event.target.value);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		const { error } = await supabase
			.from("N4I_Lessons")
			.update({ name: title, content })
			.eq("id", id);

		if (error) {
			console.error("Error updating note:", error);
		} else {
			const { data, error } = await supabase
				.from("N4I_Lessons")
				.select("*")
				.eq("id", id);

			if (error) {
				console.error("Error fetching updated note:", error);
			} else {
				setNote(data[0]);
				router.push(`/single-note?id=${id}`);
			}
		}
	};

	if (!note) {
		return <div>Loading...</div>;
	}

	return (
		<div className="edit-note wrapper">
			<h1>Page d'édition d'une note</h1>
			<form className="form" onSubmit={handleSubmit}>
				<label htmlFor="nom">Nom du cours</label>
				<input
					className="input-title"
					type="text"
					id="title"
					name="title"
					defaultValue={note.name}
					onChange={handleTitleChange}
				/>

				<label htmlFor="notes">Notes</label>
				<textarea
					className="input-notes"
					id="notes"
					name="notes"
					defaultValue={note.content}
					onChange={handleContentChange}
				/>
				<button className="update-btn" type="submit">
					Mettre à jour
				</button>
			</form>
		</div>
	);
};

export default EditNote;
