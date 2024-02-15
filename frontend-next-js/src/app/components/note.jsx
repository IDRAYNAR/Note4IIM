import React from 'react';
import Link from 'next/link';
import ReactMarkdown from "react-markdown";

const Note = ({ name, content, author, link, cursus, year }) => {
    return (
        <Link className="view" href={link} legacyBehavior>
            <div className={`comp-push-note`}>
                <h2>{name}</h2>
                <div className="tag">
                    <code className="auteur">{author}</code>
                    <code className="year">A{year}</code>
                </div>
                <p className="cursus"><b>{cursus}</b></p>
                {content ? (
                    <div className="description">
                        <ReactMarkdown children={description} />
                    </div>
                ) : null}
            </div>
        </Link>
    );
};

export default Note;