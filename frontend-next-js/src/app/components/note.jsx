import React from 'react';
import Link from 'next/link';
import ReactMarkdown from "react-markdown";

const Note = ({name, content, author, link}) => {
    return (
            <div className={`comp-push-note`}>
                <h2>{name}</h2>
                <div className="tag">
                    <code className="auteur">{author}</code>
                </div>
                {content ? (
                        <div className="description">
                            <ReactMarkdown children={description}/>
                        </div>
                ) : null}
                <Link className="view" href={link} legacyBehavior>Voir le cours</Link>
            </div>
    );
};

export default Note;