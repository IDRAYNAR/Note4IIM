import axios from "axios";
import { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown';

const App = () => {
  const [error, setError] = useState(null);
  const [lessons, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/lessons?populate=*")
      .then(({ data }) => setStudents(data.data))
      .catch((error) => setError(error));
  }, []);

  if (error) {
    // Print errors if any
    return <div>An error occured: {error.message}</div>;
  }

  return (
    <div className="App">
      {lessons.map((lesson) => (
        <div key={lesson.attributes.Email} className="lessonCard has-padding">
          <p className="has-padding">Name: <b>{lesson.attributes.Nom}</b></p>
          <div className="lessonContent has-padding">
            <ReactMarkdown children={lesson.attributes.Notes} />
          </div>
          <p className="has-padding">Auteur: <b>{lesson.attributes.Auteur.data.attributes.Email}</b></p>
        </div>
      ))}
    </div>
  );
};

export default App;