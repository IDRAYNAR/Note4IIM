"use client"

import React, { Suspense } from "react"; // Import Suspense
import {useSearchParams} from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import {supabase} from "@/supabase";
import { useEffect, useState } from "react";

const SingleNoteContent = () => {
    const [note, setNote] = useState(null);
    const [searchParams] = useSearchParams(); // Adjusted for destructuring
    const id = searchParams.get("id");

    useEffect(() => {
        const fetchNote = async () => {
            let { data, error } = await supabase
                    .from('N4I_Lessons')
                    .select('*')
                    .eq('id', id)

            if (error) {
                console.error("Error fetching note:", error);
            } else {
                if (data && data.length > 0) {
                    setNote(data[0]);
                } else {
                    console.error("No note found with id:", id);
                }
            }
        };

        fetchNote().then(r => r);
    }, [id]);

    if (!note) {
        return <div>Loading...</div>;
    }

    return (
        <div className="containerElement wrapper -medium single-note">
            <h1>{note.name}</h1>
            <hr/>
            <div className="lessonContainer">
                <ReactMarkdown>{note.content}</ReactMarkdown>
            </div>
            <hr/>
            <Link className="btn-edit" href={{
                pathname: '/edit-note',
                query: {
                    id: id,
                },
            }} legacyBehavior>
                <a className="btn-edit">Modifier la note</a>
            </Link>
        </div>
    );
};

const singleNote = () => {
    return (
        <Suspense fallback={<div>Loading note...</div>}>
            <SingleNoteContent />
        </Suspense>
    );
};

export default singleNote;