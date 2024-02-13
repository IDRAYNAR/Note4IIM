import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import ReactMarkdown from "react-markdown";

const SingleNote = () => {
	const { id } = useParams();
	const [note, setNote] = useState(null);

	useEffect(() => {
		axios
			.get(`http://localhost:1337/api/lessons/${id}?populate=*`)
			.then(({ data }) => setNote(data.data))
			.catch((error) => console.error("Error fetching note:", error));
	}, [id]);

	if (!note) {
		return <div>Loading...</div>;
	}

	return (
		<div className="containerElement wrapper -medium single-note">
			<h1>{note.attributes.Nom}</h1>
			<hr />
			<div className="lessonContainer">
				<ReactMarkdown children={note.attributes.Notes} />
			</div>
			<hr />
			<Link className="btn-edit" to={`/edit-note/${note.id}`}>
				Modifier la note
			</Link>
		</div>
	);
};

export default SingleNote;
