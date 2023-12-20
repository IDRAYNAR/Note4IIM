import React, { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const SingleNote = () => {
    const { id } = useParams();
    const [note, setNote] = useState(null);

    useEffect(() => {
        axios
          .get(`http://localhost:1337/api/lessons/${id}`)
          .then(({ data }) => setNote(data.data))
          .catch((error) => console.error("Error fetching note:", error));
    }, [id]);

    if (!note) {
        return <div>Loading...</div>;
    }

    return (
      <div>
        <h1>{note.attributes.Nom}</h1>
        <p>{note.attributes.Notes}</p>
        {/*<p>Auteur: {note.data.Auteur.data.attributes.Nom}</p>*/}
          {JSON.stringify(note)}
          <Link to={`/edit-note/${note.id}`}>View Details</Link>
      </div>
    );
};

export default SingleNote;