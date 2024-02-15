"use client";
import { useState, useEffect } from "react";
import { supabase } from "../../supabase";

const NewNote = () => {
  const [error, setError] = useState(null);
  const [redirect, setRedirect] = useState(false);
  const [lessonId, setLessonId] = useState(null);

  const createNewLesson = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.nom.value;
    const content = form.notes.value;
    const author = "loremp@test.com";
    const year = "3";
    const cursus = "Développement Web";

    try {
      const { error } = await supabase.from('N4I_Lessons').insert([{ name, content, author, year, cursus }]);

      if (error) {
        throw error;
      }else{
        window.location.href = "/notes";
      }
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    if (redirect && lessonId) {
      window.location.href = `/single-note/${lessonId}`;
    }
  }, [redirect, lessonId]);

  if (error) {
    return <div>Une erreur s&apos;est produite : {error.message}</div>;
  }

  return (
    <div className="new-note wrapper -medium">
      <h1>Créer une nouvelle note</h1>

      <form className="form" onSubmit={createNewLesson}>
				<label htmlFor="nom">Nom du cours</label>
				<input className="input-title" type="text" id="nom" name="nom" />

				<label htmlFor="notes">Notes</label>
				<textarea className="input-notes" id="notes" name="notes"></textarea>
				<button className="update-btn" type="submit">
					Créer un nouveau cours
				</button>
			</form>
    </div>
  );
};

export default NewNote;
