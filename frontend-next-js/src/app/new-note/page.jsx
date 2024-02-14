"use client"
import { useState, useEffect } from "react";
import { createClient } from '@supabase/supabase-js'; // Assurez-vous d'importer la fonction createClient depuis @supabase/supabase-js

const supabaseUrl = 'https://lkhayewnehhxhqkckehs.supabase.co/';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxraGF5ZXduZWhoeGhxa2NrZWhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI4OTc5NTMsImV4cCI6MjAxODQ3Mzk1M30.fKfRK_Dmx4KZ39za2coUrQGBbLJkrCbK_YIKEBbEQ6U';

const supabase = createClient(supabaseUrl, supabaseAnonKey); // Initialisez le client Supabase directement

const NewNote = () => {
  const [error, setError] = useState(null);
  const [redirect, setRedirect] = useState(false);
  const [lessonId, setLessonId] = useState(null);

  const createNewLesson = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.nom.value;
    const content = form.notes.value;
    const author = "loremp@test.com"; // Vous devrez remplacer ceci par l'auteur réel de la note.
    const year = new Date().getFullYear(); // Vous pouvez obtenir l'année actuelle de cette façon.

    try {
      const { data, error } = await supabase.from('N4I_Lessons').insert([{ name, content, author, year }]);
      if (error) {
        throw error;
      }
      if (data && data.length > 0) {
        setLessonId(data[0].id); // Supposant que votre table a une colonne 'id' pour identifier chaque enregistrement.
        setRedirect(true);
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
    return <div>Une erreur s'est produite : {error.message}</div>;
  }

  return (
    <div className="new-note wrapper -medium">
      <h1>Créer une nouvelle note</h1>

      <form className="form" onSubmit={createNewLesson}>
        <label htmlFor="nom">Nom du cours</label>
        <input className="input-title" type="text" id="nom" name="nom" />

        <label htmlFor="notes">Notes</label>
        <textarea className="input-notes" id="notes" name="notes"></textarea>
        <button className="update-btn" type="submit">Créer un nouveau cours</button>
      </form>
    </div>
  );
};

export default NewNote;
