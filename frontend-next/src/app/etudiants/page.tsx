/*
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.REACT_APP_SUPALINK;
const supabaseAnonKey = process.env.REACT_APP_SUPAKEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

interface Student {
    name: string;
    email: string;
    cursus: string;
    year: number;
}

export default async function etudiants() {
    let { data: studentsData, error } = await supabase
        .from<Student>('N4I_Students')
        .select('name, email, cursus, year');

    if (error) {
        return <div>An error occured: {error.message}</div>;
    }

    const students = studentsData || [];

    return (
        <div className="App students wrapper -medium">
            <div className="personListContainer">
                {students.map((student) => (
                    <div key={student.email} className="personCard">
                        <p>
                            <b>{student.name.toUpperCase()}</b>
                        </p>
                        <code>{student.email}</code>
                        <div className="more-infos">
                            <p>Cursus: <b>{student.cursus}</b></p>
                            <p>Année: <b>{student.year}</b></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}*/
