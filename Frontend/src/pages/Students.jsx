import axios from "axios";
import { useEffect, useState } from "react";
import React from 'react';

const Students = () => {
    const [error, setError] = useState(null);
    const [students, setStudents] = useState([]);

    useEffect(() => {
      axios
        .get("http://localhost:1337/api/students")
        .then(({ data }) => setStudents(data.data))
        .catch((error) => setError(error));
    }, []);
  
    if (error) {
      // Print errors if any
      return <div>An error occured: {error.message}</div>;
    }
  
    return (
      <div className="Students">
        {students.map((student) => (
          <div key={student.attributes.Email} style={{ backgroundColor: "gray", margin: "0.5rem", padding: "0.5rem" }}>
            <p>Name: <b>{student.attributes.Prenom}</b></p>
            <p>LastName: <b>{student.attributes.Nom}</b></p>
            <p>Email: <b>{student.attributes.Email}</b></p>
            <p>Promotion: <b>{student.attributes.Promotion}</b></p>
            <p>Cursus: <b>{student.attributes.Cursus}</b></p>
          </div>
        ))}
      </div>
    );
}

export default Students