import React from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const Note = ({ name, content, author, link, cursus, year }) => {
	return (
		<Link className="view" href={link} legacyBehavior>
			<div className={`comp-push-note`}>
				<div className="tag">
					<code className="cursus">{cursus}</code>
					<code className="year">A{year}</code>
				</div>
				<div className="end">
					<h2>{name}</h2>
					<p className="auteur">par {author}</p>
				</div>

				{content ? (
					<div className="description">
						<ReactMarkdown>{description}</ReactMarkdown>
					</div>
				) : null}
			</div>
		</Link>
	);
};

export default Note;
