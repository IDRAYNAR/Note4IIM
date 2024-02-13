import React from 'react';
import {Link} from "react-router-dom";
import ReactMarkdown from "react-markdown";

const Note = ({title, description, author, link, year}) => {
  return (
    <div className={`comp-push-note`}>
      <h2>{title}</h2>
      <div className="tag">
        <h3><code className="auteur">{author}</code></h3>
        <h3><code className='year'>A{year}</code></h3>
      </div>
      {description ? (
        <div className="description">
          <ReactMarkdown children={description}/>
        </div>
      ) : null}
      <Link className="view" to={link}>Voir le cours</Link>
    </div>
  );
};

export default Note;