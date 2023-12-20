import React from "react";
import axios from "axios";
import {useState} from "react";

const NewNote = () => {
  const [error] = useState(null);
  const [lessons, setLessons] = useState([]);

  const createNewLesson = (event) => {
    event.preventDefault();
    const form = event.target;
    const nom = form.nom.value;
    const notes = form.notes.value;

    axios.get("http://localhost:1337/api/students/2")
      .then((response) => {
        const student = response.data;

        axios.post("http://localhost:1337/api/lessons", {
          data: {
            Nom: nom,
            Notes: notes,
            Auteur: student.data.id
          }
        })
          .then(({data}) => {
            if (data.data.attributes && data.data.attributes.Nom !== undefined && data.attributes.Nom !== null) {
              setLessons([...lessons, data]);
            } else {
              console.error("Received lesson data has undefined or null 'Nom'");
            }
          })
          .catch((error) => {
            if (error.response) {
              console.error("Error response from server:", error.response.data);
            }
          });
      })
      .catch((error) => {
        console.error("Error fetching student:", error);
      });
  };

  if (error) {
    return <div>Une erreur s'est produite : {error.message}</div>;
  }

  return (
    <div className="new-note">
      <h1>Créer une nouvelle note</h1>

      <form onSubmit={createNewLesson}>
        <label htmlFor="nom">Nom du cours</label>
        <input type="text" id="nom" name="nom"/>

        <label htmlFor="notes">Notes</label>
        <textarea id="notes" name="notes"></textarea>
        <button type="submit">Créer un nouveau cours</button>
      </form>
    </div>
  );
};

export default NewNote
