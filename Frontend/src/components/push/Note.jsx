import React from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const Note = ({ title, description, author, link, year, cursus }) => {
	return (
		<Link className={`comp-push-note`} to={link}>
			<div className="tag">
				<code className="auteur">{author}</code>
			</div>
			<h2>{title}</h2>
			<div className="year">
				<ReactMarkdown children={"A" + year} />
				<div className="cursus">
					<ReactMarkdown children={cursus} />
				</div>
			</div>

			{description ? (
				<div className="description">
					<ReactMarkdown children={description} />
				</div>
			) : null}

			{/* <Link className="view" to={link}>
				Voir le cours
			</Link> */}
		</Link>
	);
};

export default Note;
