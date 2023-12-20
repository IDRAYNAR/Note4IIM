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
        <div key={lesson.attributes.Email} style={{ margin: "0.5rem", padding: "0.5rem", display: "flex", flexDirection: "column" }}>
          <p style={{ backgroundColor: "gray", padding: "0.5rem" }}>Name: <b>{lesson.attributes.Nom}</b></p>
          <div style={{ border: "solid black 1px", padding: "0.5rem" }}>
            <ReactMarkdown children={lesson.attributes.Notes} />
          </div>
          <p style={{ backgroundColor: "gray", padding: "0.5rem" }}>Auteur: <b>{lesson.attributes.Auteur.data.attributes.Email}</b></p>
        </div>
      ))}
    </div>
  );
};

export default App;