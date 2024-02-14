import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { supabase } from "../supabase";
import ReactMarkdown from "react-markdown";

const SingleNote = () => {
	const { id } = useParams();
	const [note, setNote] = useState(null);

	useEffect(() => {
		const fetchNote = async () => {
			try {
				let { data, error } = await supabase
					.from("N4I_Lessons")
					.select("*")
					.eq("id", id)
					.single();

				if (error) {
					console.error("Error fetching note:", error);
				} else {
					setNote(data);
				}
			} catch (error) {
				console.error("Error fetching note:", error);
			}
		};

		fetchNote();
	}, [id]);

	if (!note) {
		return <div>Loading...</div>;
	}

	return (
		<div className="containerElement wrapper -medium single-note">
			<h1>{note.name}</h1>
			<h4 className="noteAuthor">
				<p>Noté par </p>
				<code>{note.author}</code>
			</h4>
			<hr />
			<div className="lessonContainer">
				<ReactMarkdown children={note.content} />
			</div>
			<hr />
			<Link className="btn-edit" to={`/edit-note/${id}`}>
				Modifier la note
			</Link>
		</div>
	);
};

export default SingleNote;
