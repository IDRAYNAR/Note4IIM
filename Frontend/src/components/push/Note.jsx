import React from 'react';
import {Link} from "react-router-dom";
import ReactMarkdown from "react-markdown";

const Note = ({title, description, auteur, link}) => {
  return (
    <div className={`comp-push-note`}>
      <h3>{title}</h3>
      <div className="auteur">{auteur}</div>
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