import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
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
        <div className="App">
            {students.map((student) => (
                <div key={student.attributes.Email}>
                    <p>Name: <b>{student.attributes.Prenom}</b></p>
                    <p>LastName: <b>{student.attributes.Nom}</b></p>
                    <p>Email: <b>{student.attributes.Email}</b></p>
                    <p>Promotion: <b>{student.attributes.Promotion}</b></p>
                    <p>Cursus: <b>{student.attributes.Cursus}</b></p>
                </div>
            ))}
        </div>
    );
};

export default App;