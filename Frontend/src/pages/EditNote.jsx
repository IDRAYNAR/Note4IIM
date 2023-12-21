import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

const EditNote = () => {
    const { id } = useParams();
    const [note, setNote] = useState(null);
    const [lessons, setLessons] = useState([]);

    useEffect(() => {
        axios
          .get(`http://localhost:1337/api/lessons/${id}`)
          .then(({ data }) => setNote(data.data))
          .catch((error) => console.error("Error fetching note:", error));
    }, [id]);

    const updateLesson = (event, lessonId) => {
        event.preventDefault();
        const form = event.target;
        const nom = form.nom.value;
        const notes = form.notes.value;

        axios.put(`http://localhost:1337/api/lessons/${lessonId}`, {
            data: {
                Nom: nom,
                Notes: notes
            }
        })
          .then(({data}) => {
              setLessons(lessons.map(lesson => lesson.id === data.id ? data : lesson));
          })
          .catch((error) => {
              console.error("Error updating lesson:", error);
          });
    }

    if (!note) {
        return <div>Loading...</div>;
    }

    return (
      <div className="edit-note wrapper -medium">
          <h1>Page d'édition d'une note</h1>
          <form className="form" onSubmit={(event) => updateLesson(event, id)}>
              <label htmlFor="nom">Nom du cours</label>
              <input className="input-title" type="text" id="nom" name="nom" defaultValue={note?.attributes?.Nom}/>

              <label htmlFor="notes">Notes</label>
              <textarea className="input-notes" id="notes" name="notes" defaultValue={note?.attributes?.Notes}></textarea>
              <button className="update-btn" type="submit">Update Lesson</button>
          </form>
      </div>
    );
}

export default EditNote;